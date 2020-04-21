<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
  <!-- <div id="app" :class="pathname + '__body noselect nocursor'"> -->
  <div id="app" :class="pathname + '__body'">
    <!-- <div id="app" :class="pathname + '__body'"> -->
    <!-- <div class="wrap">
      <canvas id="nodes"></canvas>
    </div> -->
    <Header />
    <transition name="router-anim"><router-view /></transition>
    <!-- <router-view /> -->
    <!-- <div id="follower" class="follower">
      <div id="circle1"></div>
      <div id="circle2"></div>
    </div> -->
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    // var follower, init, mouseX, mouseY, positionElement, timer;
    // follower = document.getElementById("follower");
    // mouseX = event => {
    //   return event.clientX;
    // };

    // mouseY = event => {
    //   return event.clientY;
    // };
    // positionElement = event => {
    //   var mouse;
    //   mouse = {
    //     x: mouseX(event),
    //     y: mouseY(event)
    //   };
    //   follower.style.top = mouse.y + "px";
    //   return (follower.style.left = mouse.x + "px");
    // };

    // window.onmousemove = init = event => {
    //   var _event;
    //   _event = event;
    //   return (timer = setTimeout(() => {
    //     return positionElement(_event);
    //   }, 1));
    // };

    // var canvas = document.getElementById("nodes"),
    //   ctx = canvas.getContext("2d"),
    //   color = "rgba(255, 255, 255, 0.3)",
    //   width = window.innerWidth,
    //   height = window.innerHeight;

    // canvas.width = width;
    // canvas.height = height;
    // ctx.fillStyle = color;

    // var dots = {
    //   num: 120,
    //   distance: 200,
    //   d_radius: 200,
    //   velocity: -0.9,
    //   array: []
    // };

    // function Dot() {
    //   this.x = Math.random() * width;
    //   this.y = Math.random() * height;

    //   this.vx = dots.velocity + Math.random();
    //   this.vy = dots.velocity + Math.random();

    //   this.radius = Math.random() * 2;
    // }

    // Dot.prototype = {
    //   create: function() {
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //     ctx.fill();
    //   },
    //   animate: function() {
    //     for (var i = 0; i < dots.num; i++) {
    //       var dot = dots.array[i];

    //       if (dot.x < 0 || dot.x > width) {
    //         dot.vx = -dot.vx;
    //         dot.vy;
    //       } else if (dot.y < 0 || dot.y > height) {
    //         dot.vx;
    //         dot.vy = -dot.vy;
    //       }
    //       dot.x += dot.vx;
    //       dot.y += dot.vy;
    //     }
    //   }
    // };

    // function createDots() {
    //   ctx.clearRect(0, 0, width, height);
    //   for (var i = 0; i < dots.num; i++) {
    //     dots.array.push(new Dot());
    //     var dot = dots.array[i];
    //     dot.create();
    //   }
    //   dot.animate();
    // }
    // setInterval(createDots, 1000 / 30);
  },
  computed: {
    pathname() {
      return this.$route.name;
    }
  }
};
</script>
