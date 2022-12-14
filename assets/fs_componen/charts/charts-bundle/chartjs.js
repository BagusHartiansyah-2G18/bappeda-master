(function(window, document, $, undefined) {
        "use strict";
        $(function() {

                if ($('#chartjs_line').length) {
                    var ctx = document.getElementById('chartjs_line').getContext('2d');

                    var myChart = new Chart(ctx, {
                            type: 'line',

                            data: {
                                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                datasets: [{
                                    label: 'Almonds',
                                    data: [12, 19, 3, 17, 6, 3, 7],

                                    backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                                    borderWidth: 2
                                }, {
                                    label: 'Cashew',
                                    data: [2, 29, 5, 5, 2, 3, 10],
                                    backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                                    borderWidth: 2
                                }]

                            },
                            options: {
                                legend: {
                                    display: true,
                                    position: 'bottom',

                                    labels: {
                                        fontColor: '#71748d',
                                        fontFamily: 'Circular Std Book',
                                        fontSize: 14,
                                    }
                                },

                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontSize: 14,
                                            fontFamily: 'Circular Std Book',
                                            fontColor: '#71748d',
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontSize: 14,
                                            fontFamily: 'Circular Std Book',
                                            fontColor: '#71748d',
                                        }
                                    }]
                                }
                            }
                        


                    });
            }


            if ($('#chartjs_bar').length) {
                var ctx = document.getElementById("chartjs_bar").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["BRANG REA", "BRANG ENE", "JEREWEH", "MALUK", "SEKONGKANG", "POTO TANO", "SETELUK","TALIWANG"],
                        datasets: [{
                            label: 'Kotak Kosong',
                            data:_kecamatanKs,
                           backgroundColor: "#212121",
                                    borderColor: "#212121",
                            borderWidth: 2
                        }, {
                            label: 'F3',
                            data:_kecamatanF3,
                           backgroundColor: "#ff6d00",
                                    borderColor: "#ff6d00",
                            borderWidth: 2
                        }, {
                            label: 'Tidak Sah',
                            data:_kecamatanTs,
                           backgroundColor: "#25d5f2",
                                    borderColor: "#25d5f2",
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{

                            }]
                        },
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontFamily: 'Circular Std Book',
                                fontColor: '#71748d',
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontFamily: 'Circular Std Book',
                                fontColor: '#71748d',
                            }
                        }]
                    }
                }

                    
                });
            }

            if ($('#desa').length) {
                var ctx = document.getElementById("desa").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: _namaDesa,
                        datasets: [{
                            label: 'Kotak Kosong',
                            data:_kecamatanKs,
                           backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                            borderWidth: 2
                        }, {
                            label: 'F3',
                            data:_kecamatanF3,
                           backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                            borderWidth: 2
                        }, {
                            label: 'Tidak Sah',
                            data:_kecamatanTs,
                           backgroundColor: "rgba(65, 64, 123,0.5)",
                                    borderColor: "rgba(65, 79, 123,0.7)",
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{

                            }]
                        },
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontFamily: 'Circular Std Book',
                                fontColor: '#71748d',
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontFamily: 'Circular Std Book',
                                fontColor: '#71748d',
                            }
                        }]
                    }
                }

                    
                });
            }

            if ($('#chartjs_radar').length) {
                var ctx = document.getElementById("chartjs_radar");
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        datasets: [{
                            label: 'Almonds',
                           backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                            data: [12, 19, 3, 17, 28, 24, 7],
                            borderWidth: 2
                        }, {
                            label: 'Cashew',
                             backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                            data: [30, 29, 5, 5, 20, 3, 10],
                            borderWidth: 2
                        }]
                    },
                    options: {
                       
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }

                });
            }

            if ($('#chartjs_polar').length) {
                var ctx = document.getElementById("chartjs_polar").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                        labels: ["kotak Kosong "+_$(_quickCount[0])+" suara ("+_persentase(_totalSuara,_quickCount[0])+"%)", "F3 "+_$(_quickCount[1])+" suara ("+_persentase(_totalSuara,_quickCount[1])+"%)", "Tidak Sah "+_$(_quickCount[2])+" suara ("+_persentase(_totalSuara,_quickCount[2])+"%)"],
                        datasets: [{
                            backgroundColor: [
                                "#212121",
                                "#ff6d00",
                                "#25d5f2",
                            ],
                            data: _quickCount
                        }]
                    },
                    options: {
                        
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }
                });
            }


            if ($('#chartjs_pie').length) {
                var ctx = document.getElementById("chartjs_pie").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels:_namaKeterangan,
                        datasets: [{
                            backgroundColor: [
                               "#5969ff",
                                "#ff407b"
                            ],
                            data: [_totalMasuk, _totalSisa]
                        }]
                    },
                    options: {
                           legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }
                });
            }


            if ($('#chartjs_doughnut').length) {
                var ctx = document.getElementById("chartjs_doughnut").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["Kotak Kosong / "+_realCount[0]+" Suara ( "+_persentase(_total,_realCount[0])+"%) ", "F3 / "+_realCount[1]+" Suara ("+_persentase(_total,_realCount[1])+"%)", "Tidak SAH / "+_realCount[2]+" Suara ("+_persentase(_total,_realCount[2])+"%)"],
                        datasets: [{
                            backgroundColor: [
                                "#212121",
                                "#ff6d00",
                                "#25d5f2"
                            ],
                            data:_realCount,
                            
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                    text:"saass"
                                }
                        }
                }

                });
                // this.myChart.ctx.fillText("text", "textX", "textY");
            }


        });

})(window, document, window.jQuery);

function _persentase(total,totalMasuk){
    return parseFloat((Number(totalMasuk)/Number(total))*100).toFixed(2);
}