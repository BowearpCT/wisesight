new Vue({
    el: "#app",
    data: {
        title: "hello",
        link: "google.com"
    },
    method: {
        sayHello: function(){
            return this.title
        }
    }
})