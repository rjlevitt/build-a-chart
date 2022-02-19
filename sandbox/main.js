const app = Vue.createApp({
    data(){
        return{
            info : {
                title: '',
                yxaxis: '',
                xaxis: ''
            },
            xvalue: "",
            yvalue: "",
            chartData: [{x: 16, y: 18}, {x: 6, y: 3}, {x: 15, y: 10}],
            message: "Build a Scatter Plot"
        }
    },
    methods: {
        addToData(){
            this.chartData.push( {x: this.xvalue, y: this.yvalue} )
        }
    }
})