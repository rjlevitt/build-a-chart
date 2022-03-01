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
            chartData: []
        }
    },
    methods: {
        addToData(){
            this.chartData.push( {x: this.xvalue, y: this.yvalue} )
        }
    }
})