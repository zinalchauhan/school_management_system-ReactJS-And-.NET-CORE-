$(window).on("load", function() {
    var a = $("#column-chart"),
        b = {
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: "rgb(0, 255, 0)",
                    borderSkipped: "bottom"
                }
            },
            responsive: !0,
            maintainAspectRatio: !1,
            responsiveAnimationDuration: 500,
            legend: {
                position: "top"
            },
            scales: {
                xAxes: [{
                    display: !0,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: !1
                    },
                    scaleLabel: {
                        display: !0
                    }
                }],
                yAxes: [{
                    display: !0,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: !1
                    },
                    scaleLabel: {
                        display: !0
                    }
                }]
            },
            title: {
                display: !0,
                text: "Chart.js Bar Chart"
            }
        },
        c = {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [{
                label: "My First dataset",
                data: [65, 59, 80, 81, 56],
                backgroundColor: "#673AB7",
                hoverBackgroundColor: "rgba(103,58,183,.9)",
                borderColor: "transparent"
            }, {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 86],
                backgroundColor: "#E91E63",
                hoverBackgroundColor: "rgba(233,30,99,.9)",
                borderColor: "transparent"
            }, {
                label: "My Third dataset",
                data: [28, 48, 40, 19, 86],
                backgroundColor: "#E91E63",
                hoverBackgroundColor: "rgba(233,30,99,.9)",
                borderColor: "transparent"
            }]    
        },
        d = {
            type: "bar",
            options: b,
            data: c
        };
    new Chart(a, d)
});