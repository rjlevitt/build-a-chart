app.component('scatter-plot', {
    props: {
        test: {
            type: Array
        },
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
    <div>
        <button type="submit" v-on:click="updateChart" class="bg-steelblue p-2 rounded-lg hover:bg-salmon text-white">Plot</button>
        <div style="height: 300px; max-height: 70vw; width: 800px" class="mx-6 my-8">
            <canvas ref="chartcanvas"></canvas>
        </div>
    </div>
    `,
    methods: {
        updateChart(){
            this.chart.data.datasets[0].data = [...this.test] 
            this.chart.options.plugins.title.text = this.title
            this.chart.options.scales.y.title.text = this.yaxis
            this.chart.options.scales.x.title.text = this.xaxis
            this.chart.update()
        }
    },
    mounted() {
        const data = {
            labels: "Test",
            datasets: [
              {
                label: 'Dataset 1',
                data: [],
                radius: 10,
                borderColor: 'black',
                backgroundColor: '#5284b6',
              }
            ]
          };

        const ctx = this.$refs.chartcanvas.getContext('2d')
        Chart.defaults.color='#e6e6e6'
        Chart.defaults.font.family = "'Comic Sans MS', 'Arial', sans-serif"
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