//import { ajax } from "jquery";

var dataTable;
$(document).ready(function () {
    loadDataTable();
});
function loadDataTable() {
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/api/book",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "name", "width": "30%" },
            { "data": "author", "width": "30%" },
            { "data": "isbn", "width": "30%" },
            {
                "data": "id",
                "render": function (data) {
                    return <div class="text-centre"><a href='/BookList/Edit?id=${data}' class="btn btn-success text-white" style='cursor:pointer;width:100px;'>Edit </a>
                    </div>;
                       // &nbsp;

                }, "width": "30%"
            }

        ],
        "language": {
            "emptyTable": "No data found"
        },
        "width": "100%"
    });
}

function Delete(url) {
    swal({
        title: "Are u sure? ",
        text: "Once deleted,you will not able to recover",
        icon: "Warning",
        buttons:true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(data.message);

                    }
                }
            });
        }
    });
}



                //<a class="btn btn-danger text-white" style='cursor:pointer;width:70px;' onclick=Delete('api/book?id=' + ${ data })>Delete </a>
