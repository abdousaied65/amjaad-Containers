<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\ContainersExport;
use App\Exports\ContainersExportByEnd;
use App\Exports\ContainersExportByStatus;
use App\Models\Container;
use App\Http\Controllers\Controller;
use App\Models\Contract;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class ContainerController extends Controller
{
    public function index(Request $request)
    {
        $data = Container::all();
        return view('supervisor.containers.index', compact('data'));
    }

    public function create()
    {
        return view('supervisor.containers.create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'measure' => 'required',
            'rent_amount' => 'required',
            'status' => 'required'
        ]);

        $input = $request->all();
        $container = Container::create($input);
        return redirect()->route('supervisor.containers.index')
            ->with('success', 'تم اضافة حاوية بنجاح');
    }

    public function show($id)
    {
        $container = Container::findorfail($id);
        return view('supervisor.containers.show', compact('container'));
    }

    public function edit($id)
    {
        $container = Container::findOrFail($id);
        return view('supervisor.containers.edit', compact('container'));
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'measure' => 'required',
            'rent_amount' => 'required',
            'status' => 'required'
        ]);
        $input = $request->all();
        $container = Container::findOrFail($id);
        $container->update($input);
        return redirect()->route('supervisor.containers.index')
            ->with('success', 'تم تعديل بيانات الحاوية بنجاح');
    }

    public function destroy(Request $request)
    {
        Container::findOrFail($request->container_id)->delete();
        return redirect()->route('supervisor.containers.index')
            ->with('success', 'تم حذف الحاوية بنجاح');
    }

    public function remove_selected(Request $request)
    {
        $containers_id = $request->containers;
        foreach ($containers_id as $container_id) {
            $container = Container::FindOrFail($container_id);
            $container->delete();
        }
        return redirect()->route('supervisor.containers.index')
            ->with('success', 'تم الحذف بنجاح');
    }

    public function print_selected()
    {
        $containers = Container::all();
        return view('supervisor.containers.print', compact('containers'));
    }

    public function export_containers_excel()
    {
        return Excel::download(new ContainersExport(), 'كل الحاويات.xlsx');
    }

    public function export_containers_by_status_excel(Request $request)
    {
        $statuses = $request->statuses;
        $containers = Container::whereIn('Status', $statuses)
            ->get();
        if ($containers->isEmpty()) {
            return redirect()->route('supervisor.containers.index')->with('error', 'لا يوجد حاويات تخص هذه الحالات ');
        } else {
            return Excel::download(new ContainersExportByStatus($statuses), 'حاويات حسب الحالة.xlsx');
        }
    }

    public function export_containers_by_end_excel(Request $request)
    {
        $today = date('Y-m-d');
        $contracts = Contract::whereBetween('contract_end_date', [$today, date('Y-m-d', strtotime($today . '+1 month'))])->get();

        $ids = array();
        foreach ($contracts as $contract) {
            array_push($ids, $contract->container_id);
        }

        $containers = Container::select('name', 'measure', 'rent_amount', 'status', 'created_at')
            ->whereIn('id', $ids)
            ->get();
        if ($containers->isEmpty()) {
            return redirect()->route('supervisor.containers.index')->with('error', 'لا يوجد حاويات ينتهى ايجارها قريبا');
        } else {
            return Excel::download(new ContainersExportByEnd(), 'حاويات ينتهى ايجارها قريبا.xlsx');
        }
    }

    public function getDetails(Request $request)
    {
        $containers_ids = $request->container_id;
        foreach ($containers_ids as $containers_id) {
            $container = Container::FindOrFail($containers_id);
            $container_name = $container->name;
            $container_amount = round($container->rent_amount, 2);
            $container_tax = round((15 / 100 * $container->rent_amount), 2);
            $container_total = round(($container_amount + $container_tax), 2);
            echo
                '
            <div class="row mb-2">
                <div class="col-md-3">
                    <label class="d-block">
                        رقم الحاوية
                    </label>
                    <input readonly class="form-control" type="text" dir="ltr" value="' . $container_name . '" />
                </div>
                <div class="col-md-3">
                    <label class="d-block">
                        المبلغ بدون الضريبة
                    </label>
                    <input readonly class="form-control" type="number" dir="ltr" value="' . $container_amount . '"/>
                </div>
                <div class="col-md-3">
                    <label class="d-block">
                        الضريبة
                    </label>
                    <input readonly class="form-control" dir="ltr" value="' . $container_tax . '" type="number"/>
                </div>
                <div class="col-md-3">
                    <label class="d-block">
                        الصافى مع الضريبة
                    </label>
                    <input readonly class="form-control" dir="ltr" value="' . $container_total . '" type="number"/>
                </div>
            </div>
            ';
        }
    }
}
