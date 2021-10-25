function drawColumnStacked() {
    var a = google.visualization.arrayToDataTable([
            ["Genre", "Fantasy & Sci Fi", "Romance", "Mystery/Crime", "General", "Western", {
                role: "annotation"
            }],
            ["2000", 10, 15, 25, 35, 45, ""],
            ["2010", 12, 20, 25, 32, 36, ""],
            ["2020", 5, 24, 20, 34, 17, ""],
            ["2030", 18, 25, 30, 25, 24, ""],
            ["2040", 16, 22, 23, 28, 15, ""],
            ["2050", 8, 26, 20, 42, 30, ""],
            ["2060", 24, 17, 24, 35, 14, ""]
        ]),
        b = {
            height: 400,
            fontSize: 12,
            colors: ["#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#474747"],
            chartArea: {
                left: "5%",
                width: "90%",
                height: 350
            },
            vAxis: {
                gridlines: {
                    color: "#e9e9e9",
                    count: 10
                },
                minValue: 0
            },
            legend: {
                position: "top",
                alignment: "center",
                textStyle: {
                    fontSize: 12
                }
            }
        },
        c = new google.visualization.ColumnChart(document.getElementById("stacked-column-chart"));
    c.draw(a, b)
}
google.load("visualization", "1.0", {
    packages: ["corechart"]
}), google.setOnLoadCallback(drawColumnStacked), $(function() {
    function a() {
        drawColumnStacked()
    }
    $(window).on("resize", a), $(".menu-toggle").on("click", a)
});