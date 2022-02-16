app.component('scatter-plot', {
    props: {
        title : {
            type: String
        },
        yaxis : {
            type: String
        },
        xaxis : {
            type: String
        }
    },
    template:
    /*html*/
    `
    <div style="height: 300px; max-height: 70vw; width: 800px" class="mx-6 my-8">
        <canvas ref="chartcanvas"></canvas>
    </div>
    `,
    methods: {
        updateChart(){
            this.chart.options.plugins.title.text = this.title
            this.chart.options.scales.y.title.text = this.yaxis
            this.chart.options.scales.x.title.text = this.xaxis
            this.chart.update()
        }
    },
    watch: {
        title: 'updateChart',
        xaxis: 'updateChart',
        yaxis: 'updateChart',
    },
    mounted() {
        const data = {
            labels: "Test",
            datasets: [
              {
                label: 'Dataset 1',
                data: [{x: 16, y: 18}, {x: 6, y: 3}, {x: 15, y: 10}],
                radius: 10,
                borderColor: 'black',
                backgroundColor: '#5284b6',
              },
              {
                label: 'Dataset 2',
                data: [{x: 8, y: 22}, {x: 10, y: 2}, {x: 13, y: 20}],
                radius: 10,
                borderColor: 'black',
                backgroundColor: '#ed796c',
              }
            ]
          };

        const ctx = this.$refs.chartcanvas.getContext('2d')
        Chart.defaults.color='#e6e6e6'
        // Chart.defaults.font.family = "'Comic Sans MS', 'Arial', sans-serif"
        this.chart = new Chart(ctx, {
            type: 'scatter',
            data: data,
            options: {
                responsive: true,
                scales: {
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: '',
                            font: {
                                size: 16
                            }
                        }
                    },
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: '',
                            font: {
                                size: 16
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '',
                        font: {
                            size: 22
                        }
                    },
                    legend: {
                        position: 'top',
                        display: false,
                    }
                }
            }
        })
    }
})