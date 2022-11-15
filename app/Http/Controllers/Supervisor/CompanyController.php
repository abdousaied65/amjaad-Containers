<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\CompaniesExport;
use App\Models\Company;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index(Request $request)
    {
        $data = Company::all();
        return view('supervisor.companies.index', compact('data'));
    }

    public function create()
    {
        return view('supervisor.companies.create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'company_name' => 'required',
        ]);
        $input = $request->all();
        $company = Company::create($input);
        return redirect()->route('supervisor.companies.index')
            ->with('success', 'تم اضافة شركة بنجاح');
    }

    public function show($id)
    {
        $company = Company::findorfail($id);
        return view('supervisor.companies.show', compact('company'));
    }

    public function edit($id)
    {
        $company = Company::findOrFail($id);
        return view('supervisor.companies.edit', compact('company'));
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'company_name' => 'required',
        ]);
        $input = $request->all();
        $company = Company::findOrFail($id);
        $company->update($input);
        return redirect()->route('supervisor.companies.index')
            ->with('success', 'تم تعديل بيانات الشركة بنجاح');
    }

    public function destroy(Request $request)
    {
        Company::findOrFail($request->company_id)->delete();
        return redirect()->route('supervisor.companies.index')
            ->with('success', 'تم حذف الشركة بنجاح');
    }

    public function remove_selected(Request $request)
    {
        $companies_id = $request->companies;
        foreach ($companies_id as $company_id) {
            $company = Company::FindOrFail($company_id);
            $company->delete();
        }
        return redirect()->route('supervisor.companies.index')
            ->with('success', 'تم الحذف بنجاح');
    }

    public function print_selected()
    {
        $companies = Company::all();
        return view('supervisor.companies.print', compact('companies'));
    }

    public function export_companies_excel()
    {
        return Excel::download(new CompaniesExport(), 'كل الشركات.xlsx');
    }

    public function storeCon(Request $request)
    {
        $data = $request->all();
        $company = Company::create($data);
        
        if ($company) {
            return response()->json([
                'status' => true,
                'company_id' => $company->id,
                'company_name' => $company->company_name,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'هناك خطأ فى تسجيل العميل حاول مرة اخرى',
            ]);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
