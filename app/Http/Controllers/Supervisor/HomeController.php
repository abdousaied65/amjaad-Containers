<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\BillContainer;
use App\Models\Company;
use App\Models\Container;
use App\Models\Contract;
use App\Models\Supervisor;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:supervisor-web');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable|\Illuminate\Http\RedirectResponse
     */
    public function index()
    {
        $auth_id = Auth::user()->id;
        $user = Supervisor::findOrFail($auth_id);
        $roles = Role::where('guard_name','supervisor-web')->get();
        $supervisors = Supervisor::all();
        $containers = Container::all();
        $companies = Company::all();
        $empty_containers = Container::where('status','فارغة')->get();
        $rented_containers = Container::where('status','مؤجرة')->get();
        return view('supervisor.home',
            compact('user','roles','companies','containers','rented_containers','empty_containers','supervisors'));
    }
    public function lock_screen(){
        return view('supervisor.lockscreen');
    }
    public function view_container_details(Request $request){
        $container_id = $request->container_id;
        $container = Container::FindOrFail($container_id);

        $bill_container = BillContainer::where('container_id',$container->id)->latest()->first();
        $contract = $bill_container->contract;
        echo "<table class='table table-bordered table-condensed table-hover table-striped'>";
        echo "<tbody>";

        echo "<tr>";
        echo "<td> حالة الحاوية </td>";
        echo "<td>".$container->status."</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> مبلغ الايجار </td>";
        echo "<td>".$container->rent_amount."</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> الشركة المؤجرة </td>";
        echo "<td>".$contract->company->company_name."</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> تاريخ بداية العقد </td>";
        echo "<td>".$contract->contract_start_date."</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> تاريخ نهاية العقد </td>";
        echo "<td>".$contract->contract_end_date."</td>";
        echo "</tr>";
        echo "</tbody>";
        echo "</table>";
    }
}
