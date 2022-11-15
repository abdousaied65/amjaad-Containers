<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\SafesExport;
use App\Models\Safe;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class SafeController extends Controller
{
    public function index(Request $request)
    {
        $data = Safe::all();
        return view('supervisor.safes.index', compact('data'));
    }

    public function create()
    {
        return view('supervisor.safes.create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'safe_name' => 'required',
            'balance' => 'required',
            'type' => 'required',
        ]);

        $input = $request->all();
        $safe = Safe::create($input);
        return redirect()->route('supervisor.safes.index')
            ->with('success', 'تم اضافة خزنة بنجاح');
    }

    public function show($id)
    {
        $safe = Safe::findorfail($id);
        return view('supervisor.safes.show', compact('safe'));
    }

    public function edit($id)
    {
        $safe = Safe::findOrFail($id);
        return view('supervisor.safes.edit', compact('safe'));
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'safe_name' => 'required',
            'balance' => 'required',
            'type' => 'required',
        ]);
        $input = $request->all();
        $safe = Safe::findOrFail($id);
        $safe->update($input);
        return redirect()->route('supervisor.safes.index')
            ->with('success', 'تم تعديل بيانات الخزنة بنجاح');
    }

    public function destroy(Request $request)
    {
        Safe::findOrFail($request->safe_id)->delete();
        return redirect()->route('supervisor.safes.index')
            ->with('success', 'تم حذف الخزنة بنجاح');
    }

    public function remove_selected(Request $request)
    {
        $safes_id = $request->safes;
        foreach ($safes_id as $safe_id) {
            $safe = Safe::FindOrFail($safe_id);
            $safe->delete();
        }
        return redirect()->route('supervisor.safes.index')
            ->with('success', 'تم الحذف بنجاح');
    }

    public function print_selected()
    {
        $safes = Safe::all();
        return view('supervisor.safes.print', compact('safes'));
    }

    public function export_safes_excel()
    {
        return Excel::download(new SafesExport(), 'كل الخزن.xlsx');
    }
}
