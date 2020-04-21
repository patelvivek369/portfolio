<template>
  <transition
    name="main__parent__fade"
    v-on:before-enter="beforeEnter"
    v-on:leave="leave"
    v-bind:css="false"
    appear
  >
    <div class="homepage">
      <!-- <img src="../assets/images/vivek2.png" alt="" class="myImg" /> -->
      <div class="home__text">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="150"
          height="150"
          class="home__heading__svg"
        >
          <g data-name="Layer 2">
            <path
              d="M10,100a90,90 0 1,0 180,0a90,90 0 1,0 -180,0"
              stroke="#434343"
              stroke-width="3"
              stroke-dasharray="1500"
              fill="none"
              id="round"
            ></path>
            <path
              d="M190,190 190,10 10,10 10,190 10,190 190,190"
              stroke="#272727"
              stroke-width="3"
              stroke-dasharray="1500"
              fill="none"
              id="square"
            ></path>
            <path
              d="M100,10 190,190 10,190 100,10"
              stroke="#5d5d5d"
              stroke-width="3"
              stroke-dasharray="1500"
              fill="none"
              id="triangle"
            ></path>
          </g>
        </svg> -->
        <svg width="110" height="150" class="home__heading__svg">
          <linearGradient id="grad">
            <stop stop-color="white" />
            <stop offset="100%" stop-color="#2a2a2a" />
          </linearGradient>
          <polygon points="30,10 0,140 110,110" class="home__heading__path">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 55 70"
              to="360 55 70"
              dur="40s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
        <h4 ref="home__heading_text" class="home__heading_text">
          <span
            v-for="(item, index) in textArray"
            :key="index"
            :class="item == ' ' ? 'anim-typewriter blank' : 'anim-typewriter'"
            >{{ item }}</span
          >
        </h4>
        <p>
          <span
            v-for="(item, index) in subHeader"
            :key="index"
            class="subheading"
            >{{ item }}</span
          >
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { TimelineMax, TweenMax, Power4 } from "gsap/all";
export default {
  name: "HomePage",
  components: {},
  computed: {
    pathname() {
      return this.$route.name;
    }
  },
  mounted() {
    // const tl = new TimelineMax({
    //   repeat: -1
    // });
    // var circle = document.getElementById("round");
    // tl.to(circle, 1, {morphSVG:circle, transformOrigin: "center", scale: 0.4, ease: Power4.easeInOut}, "+=0")
    //   .to(circle, 1, {morphSVG:"#square", transformOrigin: "center", scale: 1, ease: Power1.easeOut}, "+=0")
    //   .to(circle, 1.5, {morphSVG:"#square", transformOrigin: "center", scale: 1, strokeDasharray:"0,500"}, "+=0")
    //   .to(circle, 1.5, {morphSVG:"#square", transformOrigin: "center", scale: 1, strokeDasharray:"1500"}, "+=0")
    //   .to(circle, 1, {morphSVG:"#triangle", transformOrigin: "center", scale: 1, ease: Power1.easeOut}, "+=0")
    //   .to(circle, 1.5, {morphSVG:"#triangle", transformOrigin: "center", scale: 1, strokeDasharray:"0,500"}, "+=0")
    //   .to(circle, 1.5, {morphSVG:"#triangle", transformOrigin: "center", scale: 1, strokeDasharray:"1500"}, "+=0")
    //   .to(circle, 1, {morphSVG:circle, transformOrigin: "center", scale: 1}, "+=0")
    //   .to(circle, 1.5, {morphSVG:circle, transformOrigin: "center", scale: 1, strokeDasharray:"0,500"}, "+=0")
    //   .to(circle, 1.5, {morphSVG:circle, transformOrigin: "center", scale: 1, strokeDasharray:"1500"}, "+=0");
  },
  methods: {
    beforeEnter(el, done) {
      //console.log("VIVEK", el)
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.set(el, {
        x: window.innerWidth * 1.5,
        scale: 0,
        // transformOrigin: '50% 50%'
        opacity: 0
      });

      tl.to(el, 0, {
        x: 0,
        // scale: 0,
        opacity: 0
        // ease: Power4.easeOut
      });

      tl.to(el, 1, {
        scale: 1,
        opacity: 1
        // ease: Power4.easeOut
      });
    },
    leave(el, done) {
      TweenMax.fromTo(
        el,
        1,
        {
          autoAlpha: 1
        },
        {
          autoAlpha: 0,
          ease: Power4.easeOut,
          onComplete: done
        }
      );
    }
  },
  data() {
    return {
      msg: "",
      subHeader: ["V", "i", "v", "e", "k", " ", "P", "a", "t", "e", "l"],
      textArray: [
        "J",
        "a",
        "v",
        "a",
        "S",
        "c",
        "r",
        "i",
        "p",
        "t",
        " ",
        "D",
        "e",
        "v",
        "e",
        "l",
        "o",
        "p",
        "e",
        "r",
        " ",
        "&",
        " ",
        "U",
        "I",
        "/",
        " ",
        "U",
        "X",
        " ",
        "D",
        "e",
        "s",
        "i",
        "g",
        "n",
        "e",
        "r"
      ]
    };
  }
};
</script>
