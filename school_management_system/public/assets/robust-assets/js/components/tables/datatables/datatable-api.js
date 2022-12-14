$(document).ready(function() {
    function a(a) {
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;"><tr><td>Full name:</td><td>' + a.name + "</td></tr><tr><td>Extension number:</td><td>" + a.extn + "</td></tr><tr><td>Extra info:</td><td>And any further details here (images etc)...</td></tr></table>"
    }

    function b() {
        $(".search-api").DataTable().search($("#global_filter").val(), $("#global_regex").prop("checked"), $("#global_smart").prop("checked")).draw()
    }

    function c(a) {
        $(".search-api").DataTable().column(a).search($("#col" + a + "_filter").val(), $("#col" + a + "_regex").prop("checked"), $("#col" + a + "_smart").prop("checked")).draw()
    }
    var d = $(".add-rows").DataTable(),
        e = 1;
    $("#addRow").on("click", function() {
        d.row.add([e + ".1", e + ".2", e + ".3", e + ".4", e + ".5"]).draw(!1), e++
    }), $("#addRow").trigger("click"), $(".text-inputs-searching thead th").each(function() {
        var a = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + a + '" />')
    });
    var f = $(".text-inputs-searching").DataTable();
    f.columns().every(function() {
        var a = this;
        $("input", this.footer()).on("keyup change", function() {
            a.search() !== this.value && a.search(this.value).draw()
        })
    }), $(".datatable-select-inputs").DataTable({
        initComplete: function() {
            this.api().columns().every(function() {
                var a = this,
                    b = $('<select><option value="">Select option</option></select>').appendTo($(a.footer()).empty()).on("change", function() {
                        var b = $.fn.dataTable.util.escapeRegex($(this).val());
                        a.search(b ? "^" + b + "$" : "", !0, !1).draw()
                    });
                a.data().unique().sort().each(function(a, c) {
                    b.append('<option value="' + a + '">' + a + "</option>")
                })
            })
        }
    });
    var g = $(".show-child-rows").DataTable({
        ajax: "robust-assets/demo-data/datatables/ajax-child-rows.json",
        columns: [{
            className: "details-control",
            orderable: !1,
            data: null,
            defaultContent: ""
        }, {
            data: "name"
        }, {
            data: "position"
        }, {
            data: "office"
        }, {
            data: "salary"
        }],
        order: [
            [1, "asc"]
        ]
    });
    $(".show-child-rows tbody").on("click", "td.details-control", function() {
        var b = $(this).closest("tr"),
            c = g.row(b);
        c.child.isShown() ? (c.child.hide(), b.removeClass("shown")) : (c.child(a(c.data())).show(), b.addClass("shown"))
    });
    var h = $(".selection-multiple-rows").DataTable();
    $(".selection-multiple-rows tbody").on("click", "tr", function() {
        $(this).toggleClass("selected")
    }), $("#row-count").on("click", function() {
        alert(h.rows(".selected").data().length + " row(s) selected")
    });
    var i = $(".selection-deletion-row").DataTable();
    $(".selection-deletion-row tbody").on("click", "tr", function() {
        $(this).hasClass("selected") ? $(this).removeClass("selected") : (i.$("tr.selected").removeClass("selected"), $(this).addClass("selected"))
    }), $("#delete-row").on("click", function() {
        i.row(".selected").remove().draw(!1)
    });
    var j = $(".submit-form-inputs").DataTable();
    $(".inputs-submin").on("click", function() {
        var a = j.$("input, select").serialize();
        return alert("The following data would have been submitted to the server: \n\n" + a.substr(0, 120) + "..."), !1
    });
    var k = $(".hide-columns-dynamically").DataTable({
        scrollY: "200px",
        paging: !1
    });
    $("a.toggle-vis").on("click", function(a) {
        a.preventDefault();
        var b = k.column($(this).attr("data-column"));
        b.visible(!b.visible())
    }), $(".search-api").DataTable(), $("input.global_filter_search").on("keyup click", function() {
        b()
    }), $("input.column_filter_search").on("keyup click", function() {
        c($(this).parents("tr").attr("data-column"))
    })
});