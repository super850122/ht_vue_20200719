console.log("raygoodgood");

var vue1 = new Vue({
    el:"#vue1",
    data:{
        text:"raygoodraygood",
        a:999,
        b:3
    }
}); 

var vue2 = new Vue({
    el: "#vue2",
    data:{
        aligment: "center",
        unsplash:"https://unsplash.com/"
    }
});

var vue3 = new Vue({
    el:"#vue3",
    data:{
        test: true,
        activity: false
    }
});

var vue4 = new Vue({
    el:"#vue4",
    data:{
        products:[
            {name:"good", price: 100},
            {name:"happy", price: 200},
            {name:"great", price: 300},
            {name:"unhappy", price: 10}
        ]
    }
});

var vue5 = new Vue({
    el:"#vue5",
    data:{
        p: "",
        count:0,
    },
    methods:{
        show: function() {
            this.p = "pp"
        },
        add:function(){
            this.count++;
        },
        sub:function(){
            this.count--;
        }
    }
});

var vue6 = new Vue({
    el:"#vue6",
    data:{
        name:""
    }
})
