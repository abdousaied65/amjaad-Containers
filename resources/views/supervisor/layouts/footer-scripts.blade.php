<script src="{{asset('admin-assets/bundles/libscripts.bundle.js')}}"></script>
<script src="{{asset('admin-assets/js/template.js')}}"></script>
<script src="{{asset('admin-assets/js/page/index.js')}}"></script>
<script src="{{asset('admin-assets/js-rtl/dataTables.bundle.js')}}"></script>
<script src="{{asset('admin-assets/js/select2.min.js')}}"></script>
<script src="{{asset('admin-assets/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('admin-assets/js/bootstrap-select.js')}}"></script>
<script>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $('.data-table').select2({
        placeholder: "اختر مما يلى"
    });
</script>

