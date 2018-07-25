/*APP 1.0*/
var App = function() {
    var app =function () {

        $(".yun-box .list-li").on("click","li",function (event) {
            let target = $(event.target);
            let popup = $(".popup");
            // console.log();
            if(target.hasClass("list-li-1")){
                /*酒店*/
                let html ;
                // $(".popup-min").remove();
                html = 	'<div class="popup-min">'+
                '<h2>酒店 <em>-大理途家海景客栈</em></h2>'+
                '<div class="map">'+
                '<p class="popup-title">1.路线:</p>'+
                '<ul>'+
                '<li>a.机场路线: <br/>大理荒草坝机场下机 -- 机场路徒步出发 -- 到大西路直行 -- 乘坐7路 华营站上车(华营-大理公交小花园车场) -- 石屏村一站下车 -- 到达大理途家海景客栈 (全线需要步行4.1公里 建议坐的士)</li>'+
                '<li>b.火车站: <br/> 大理站 -- 大理站徒步穿过巍山路直行 -- 到大转盘(大转盘附近有祥和大酒店)右转 -- 龙山酒店站上车通勤4号线 -- 云龙路口站下车 -- 沿着应海庙行至海滨大道右转 -- 海滨大道直行到达大理途家海景客栈(步行1.5公里)<br/></li>'+
                '</ul>'+
                '<p class="popup-title">2.酒店地址:</p>'+
                '<div id="container1" class="container"></div>'+
                '<p class="popup-title">3.酒店图片:</p>'+
                '<div class="swiper-container">'+
                '<div class="swiper-wrapper">'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_1.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_2.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_3.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_406_1.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_406_2.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_406_3.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_406_4.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_406_5.jpg" alt=""></div>'+
                '<div class="swiper-slide"><img src="img/dali/dali_hotel_406_6.jpg" alt=""></div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'

                $(".modal-popup").after(html);

                setTimeout(function(){
                    /*轮播*/
                    var swiper = new Swiper('.swiper-container', {});
                    /*轮播end*/
                    /*地图*/
                    new BaiduMap({
                        id: "container1",
                        title: {
                            text: "大理途家海景客栈",
                            className: "title"
                        },
                        content: {
                            className: "content",
                            text: ["地址：开发区石坪村滨海大道112号", "电话：15125219990"]
                        },
                        point: {
                            lng: 100.267507,
                            lat: 25.613224
                        },
                        level: 15,
                        zoom: true,
                        type: ["地图", "卫星", "三维"],
                        width: 320,
                        height: 70
                    });
                    /*地图end*/
                }, 650);




            }else if(target.hasClass("list-li-2")){
                 /*路程*/
                let html ;
                html =	'<div class="popup-min">'+
                '<h2>行程</h2>'+
                '<div class="map">'+
                '<p class="popup-title">第一天 -- 大理古城</p>'+
                '<ul>'+
                '<li>a.路线 <br/> 从酒店出发 -- 云龙路口 -- 云龙路口站乘坐通勤2号线 -- 到世纪中学站换乘8路 -- 风花雪月酒店下车(到达大理古城) <span class="text-note">(一个小时路程)</span></li>'+
                '<li>b.古城攻略 <br/> 洱海门进入 -- 面前就是网红人民路 人民路上有一家飘香酒馆和段公子还可以 在古城 逛的时候遇到这几个店可以进去看看 尝尝：JoJo‘s BBQ , 熊猫家酸奶,再回首凉鸡米线<br> 而在复兴路上有文献楼、南城门楼、五华楼，北城门 还有被誉为云南最美书店的“海豚阿德书店”<br> 洋人街和红龙井工艺品较多 </li>'+
                '</ul>'+
                '<p class="popup-title">第二天 -- 沧海</p>'+
                '<p>选择有两种:</p>'+
                '<ul>'+
                '<li>1.酒店包车直接去双廊</li>'+
                '<li>2.环洱海骑行 或者 租小电驴环海  <span class="text-note">(小电驴的话要注意电量 充电十分麻烦)</span></li>'+
                '<li>方案二比较轻松自由</li>'+
                '</ul>'+
                '<p class="popup-title">第三天 -- 苍山</p>'+
                '<ul>'+
                '<li>a.路线 <br> 从酒店出发 -- 逸龙滨海酒店站乘坐通勤1号线 -- 到小车加油站下车过马路 -- 到小车加油站换乘三塔专 -- 水碓村站下车 -- 过马路直行 -- 到达苍山 <span class="text-note">(需要一个小时左右的路程)</span></li>'+
                '<li>b.苍山攻略 <br> 上苍山有两个途径：乘坐索道、步行走登山步道。索道互不相通，分别可达山腰玉带路上的清碧溪、中和寺和洗马潭。<span class="text-note">(时间原因:建议坐索道)</span> 苍山的山腰间修有一条长18公里的游山步道，称为玉带云游路，可俯瞰大理坝子和洱海风光。<span class="text-note">游览时千万不要偏离玉带云游路</span> </li>'+
                '</ul>'+
                '</div>'+
                '</div>'
                $(".modal-popup").after(html);

            }else if(target.hasClass("list-li-3")){
                /*美食*/
                let html ;
                html = '<div class="popup-min">'+
                    '<h2>美食</h2>'+
                    '<div class="map">'+
                    '<p class="popup-title">大理十大美食</p>'+
                    '<ul>'+
                    '<li>NO1.永平黄焖鸡</li>'+
                    '<li>NO2.大理砂锅鱼</li>'+
                    '<li>NO3.大理生皮</li>'+
                    '<li>NO4.喜洲粑粑</li>'+
                    '<li>NO5.土八碗</li>'+
                    '<li>NO6.雕梅</li>'+
                    '<li>NO7.烧饵块</li>'+
                    '<li>NO8.乳扇</li>'+
                    '<li>NO9.大理三道茶</li>'+
                    '<li>NO10.大理凉米线</li>'+
                    '<li>大多数小吃在大理古城都可以吃到,所以在古城可以少吃多餐</li>'+
                    '</ul>'+
                    '</div>'+
                    '</div>';
                $(".modal-popup").after(html);

            }
            popup.show(600)
        });
        $(".modal-popup").on("click",function () {
            $(this).parent().hide(400)
            $(".popup-min").remove();
        })
    };

    var canvas = function () {
        var canvas = document.createElement('canvas')
        document.getElementsByTagName('body')[0].appendChild(canvas)
        var ctx = canvas.getContext('2d')

        var numParticles = 140

        var bg = [255, 255, 255]
        var cols = ['#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff9900', '#ffffff', '#990000']
// var cols = ['#FF5722', '#FF9800', '#FF9800', '#FF9800', '#FF9800', '#B71C1C', '#00BCD4', '#00BCD4', '#009688']

        setup()
        window.addEventListener('resize', setup)

        function setup() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${1})`
            ctx.fill()
        }

        var step = 0

        var mouse = {
            x: canvas.width/2,
            y: canvas.height/2
        }
        document.onmousemove = function(e){
            mouse = {x:e.pageX, y:e.pageY}
        }

        setInterval(animate, 1000/30)
// window.requestAnimationFrame(animate);
        function animate() {
            fade(0.34)
            draw()
            // window.requestAnimationFrame(function(){animate()})
        }

        function fade(amt) {
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height)
            // ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${amt})`
            // console.log(`rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${amt})`)
            ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${amt})`
            ctx.fill()
        }

        function Particle () {
            this.pos = {
                x: Math.random() * canvas.width * 0.1 + canvas.width * 0.45,
                y: Math.random() * canvas.height * 0.1 + canvas.height * 0.45
            }
            this.r = 1
            this.speed = 22
            this.hue = [44, 36, 36, 24, 14, 4, 24, 24][Math.floor(Math.random()*7)]
            this.step = Math.random() * 400
            this.vx = Math.random() * this.speed/4 - this.speed/8
            this.vy = Math.random() * this.speed/4 - this.speed/8
            this.colIndex = Math.floor(Math.random()*cols.length)
            this.history = []
            this.update = function () {
                //////////////////////////////////////
                this.step ++
                this.step %= 400
                if (this.history.length > 5){
                    this.history.shift()
                }
                this.pos.x += this.vx
                this.pos.y += this.vy
                this.vx = this.vx * 0.8 + (Math.random() * this.speed * 2 - this.speed) * 0.2
                this.vy = this.vy * 0.8 + (Math.random() * this.speed * 2 - this.speed) * 0.2

                // mouse dist
                // var dx = mouse.x - this.pos.x
                // var dy = mouse.y - this.pos.y
                if(this.step > 325 || (this.step > 100 && this.step < 190) ) {
                    var m = Math.min(canvas.height, canvas.width) * 0.3
                    var p = Math.PI * 2 * (step + this.step * 0.01) / 180
                    this.vx = (Math.cos(p) * m - this.pos.x + canvas.width/2) * 0.016 + this.vx * 0.97
                    this.vy = (Math.sin(p) * m - this.pos.y + canvas.height/2) * 0.016 + this.vy * 0.97
                    //mouse
                    // this.vx = this.vx * 0.9 + dx * 0.02
                    // this.vy = this.vy * 0.9 + dy * 0.02
                    // this.vx = Math.min(this.vx,  4.0)
                    // this.vx = Math.max(this.vx, -4.0)
                    // this.vy = Math.min(this.vy,  4.0)
                    // this.vy = Math.max(this.vy, -4.0)
                    // center
                    // this.vx = this.vx * 0.9 + (canvas.width/2 - this.pos.x ) * 0.002
                    // this.vy = this.vy * 0.9 + (canvas.height/2 - this.pos.y ) * 0.002
                }

//     if(this.step > 100 && this.step < 140) {
//       //mouse
//       var d = dx * dx + dy * dy
//       if (d < (canvas.height/8 * canvas.height/8)){
//         this.vx = this.vx * 0.9 - (mouse.x - this.pos.x ) * 0.01
//         this.vy = this.vy * 0.9 - (mouse.y - this.pos.y ) * 0.01
//       }
//       // center
//       // this.vx = this.vx * 0.9 + (canvas.width/2 - this.pos.x ) * 0.002
//       // this.vy = this.vy * 0.9 + (canvas.height/2 - this.pos.y ) * 0.002
//     }

                var speed = Math.min(Math.abs(this.vx) + Math.abs(this.vy), 50) / 50
                //////////////////////////////////////
                if (this.history.length > 4){
                    ctx.beginPath()
                    // ctx.arc(this.pos.x ,this.pos.y , this.r, 0, 2 * Math.PI)
                    ctx.moveTo(this.pos.x ,this.pos.y)
                    for (var i = this.history.length-1; i >= 0;  i--){
                        ctx.lineTo(this.history[i].x ,this.history[i].y)
                    }
                    ctx.fillStyle = `hsla(${this.hue},${99}%,${speed*70 + 30}%,${speed*0.3+0.7})`
                    // ctx.strokeStyle = `hsla(${Math.sin( this.step / 300) * 70 + 70},${99}%,${50}%,0.5)`
                    // ctx.fillStyle = cols[this.colIndex]
                    // ctx.strokeStyle = cols[this.colIndex]
                    ctx.fill()
                    ctx.lineWidth = 1
                    ctx.lineJoin = "round"
                    // ctx.closePath()
                    // ctx.stroke()
                }
                //////////////////////////////////////
                if (this.pos.x > canvas.width || this.pos.x < 0 || this.pos.y > canvas.height || this.pos.y < 0) {
                    delete this.pos
                    delete this.history
                    return false;
                }
                this.history.push({
                    x: this.pos.x,
                    y: this.pos.y
                })
                return true;
            }
        }

        var particles = [new Particle()]


        function draw() {
            step ++
            step %= 180

            if (particles.length < numParticles) {
                particles.push(new Particle())
            }

            particles = particles.filter(function (p){
                return p.update()
            })

        }
    };

    return{
        init:function () {
            app();
            canvas();
        }
    }
}();

jQuery(document).ready(function(){
    App.init();
});