// Vue.createApp({
//     data() {
//       return {
//         message: 'Hello Vue!'
//       }
//     }
//   }).mount('#app')

const app = Vue.createApp({
    data(){
        return{
            form : {
                name: ''
            },
            message: "Build a Scatter Plot"
        }
    }
})