$(document).ready(function() {
    $(".dataex-basic-initialisation").DataTable({
        scrollY: 300,
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: !0
    });
    var a = ($(".dataex-lr-fixedcolumns").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: {
            leftColumns: 1,
            rightColumns: 1
        }
    }), $(".dataex-multiple-fixed").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: {
            leftColumns: 2
        }
    }), $(".dataex-right-column").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: {
            leftColumns: 0,
            rightColumns: 1
        }
    }), $(".dataex-column-visibility").DataTable({
        dom: "Bfrtip",
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        buttons: ["colvis"],
        fixedColumns: {
            leftColumns: 2
        }
    }), $(".dataex-css-row").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: {
            heightMatch: "none"
        }
    }), $(".dataex-column-width").removeAttr("width").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        columnDefs: [{
            width: 200,
            targets: 0
        }],
        fixedColumns: !0
    }), $(".dataex-index-column").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        columnDefs: [{
            sortable: !1,
            "class": "index",
            targets: 0
        }],
        order: [
            [1, "asc"]
        ],
        fixedColumns: !0
    }));
    a.on("order.dt search.dt", function() {
        a.column(0, {
            search: "applied",
            order: "applied"
        }).nodes().each(function(a, b) {
            a.innerHTML = b + 1
        })
    }).draw(), $(".dataex-Select-row").DataTable({
        scrollY: 300,
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: !0,
        select: !0
    }), $(".dataex-checkboxes").DataTable({
        scrollY: 300,
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: !0,
        columnDefs: [{
            orderable: !1,
            className: "select-checkbox",
            targets: 0
        }],
        select: {
            style: "os",
            selector: "td:first-child"
        },
        order: [
            [1, "asc"]
        ]
    });
    $(".dataex-complex-headers").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: !0
    });
    $(".dataex-individual-filtering tfoot th").each(function(a) {
        var b = $(".dataex-individual-filtering thead th").eq($(this).index()).text();
        $(this).html('<input type="text" placeholder="Search ' + b + '" data-index="' + a + '" />')
    });
    var b = $(".dataex-individual-filtering").DataTable({
        scrollY: "300px",
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: !0
    });
    $(b.table().container()).on("keyup", "tfoot input", function() {
        b.column($(this).data("index")).search(this.value).draw()
    }), $(".DTFC_RightBodyLiner").css("overflow-y", "hidden")
});