<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\TermsExport;
use App\Models\Term;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class TermController extends Controller
{
    public function index(Request $request)
    {
        $data = Term::all();
        return view('supervisor.terms.index', compact('data'));
    }

    public function create()
    {
        return view('supervisor.terms.create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'term' => 'required',
        ]);

        $input = $request->all();
        $term = Term::create($input);
        return redirect()->route('supervisor.terms.index')
            ->with('success', 'تم اضافة شرط بنجاح');
    }

    public function show($id)
    {
        $term = Term::findorfail($id);
        return view('supervisor.terms.show', compact('term'));
    }

    public function edit($id)
    {
        $term = Term::findOrFail($id);
        return view('supervisor.terms.edit', compact('term'));
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'term' => 'required',
        ]);
        $input = $request->all();
        $term = Term::findOrFail($id);
        $term->update($input);
        return redirect()->route('supervisor.terms.index')
            ->with('success', 'تم تعديل بيانات الشرط بنجاح');
    }

    public function destroy(Request $request)
    {
        Term::findOrFail($request->term_id)->delete();
        return redirect()->route('supervisor.terms.index')
            ->with('success', 'تم حذف الشرط بنجاح');
    }

    public function remove_selected(Request $request)
    {
        $terms_id = $request->terms;
        foreach ($terms_id as $term_id) {
            $term = Term::FindOrFail($term_id);
            $term->delete();
        }
        return redirect()->route('supervisor.terms.index')
            ->with('success', 'تم الحذف بنجاح');
    }

    public function print_selected()
    {
        $terms = Term::all();
        return view('supervisor.terms.print', compact('terms'));
    }

    public function export_terms_excel()
    {
        return Excel::download(new TermsExport(), 'كل الشروط.xlsx');
    }
}
