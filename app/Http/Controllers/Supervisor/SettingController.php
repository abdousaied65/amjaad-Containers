<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        $settings = Setting::FindOrFail(1);
        return view('supervisor.settings.index', compact('settings'));
    }
    public function update(Request $request){
        $settings = Setting::FindOrFail(1);
        $settings->update($request->all());
        return redirect()->route('supervisor.settings.index')->with('success','تم تعديل الاعدادات بنجاح');
    }
}
