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
});

// 定義元件
// ("元件名稱" , {樣板:"元件內容"})
Vue.component("test-a", {
    template: "<h2>測試元件</h2>"
});

var vue7 = new Vue({
    el:"#vue7"
});


Vue.component("vue-content",{
    template:`<div>
    <h3>標題3</h3>
    <p>文字</p>
    <hr>
    </div>
    `
});

var vue8 = new Vue({
    el:"#vue8"
});


Vue.component("navbar" , {
    template:`
    <nav>
        <a href="./about.html">關於</a>
        <a href="#">作品集</a>
        <a href="./indx.html">首頁</a>
        <a href="#">最新消息</a>
        <a href="#">聯絡我</a>
    </nav>
    `
})

var navbar = new Vue({
    el:"#navbar"
})