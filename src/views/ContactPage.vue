<template>
  <transition name="main__parent__fade">
    <div class="contact__page">
      <div class="contact__box">
        <div class="detail" ref="detail">
          <h2>
            <!-- MAIL ME -->
            <span class="anim-typewriter">M</span>
            <span class="anim-typewriter">A</span>
            <span class="anim-typewriter">I</span>
            <span class="anim-typewriter">L</span>
            <span class="anim-typewriter"> </span>
            <span class="anim-typewriter">M</span>
            <span class="anim-typewriter">E</span>
          </h2>
          <h3>
            patelvivek2530@gmail.com
            <!-- “If I had asked people what they wanted, they would have said faster
            horses” -->
            <p v-if="false">
              <span class="anim-typewriter">- </span>
              <span class="anim-typewriter">H</span>
              <span class="anim-typewriter">e</span>
              <span class="anim-typewriter">n</span>
              <span class="anim-typewriter">r</span>
              <span class="anim-typewriter">y</span>
              <span class="anim-typewriter"> </span>
              <span class="anim-typewriter">F</span>
              <span class="anim-typewriter">o</span>
              <span class="anim-typewriter">r</span>
              <span class="anim-typewriter">d</span>
            </p>
          </h3>
          <div class="socail">
            <h4>
              <a href="tel:9033227334">
                <span class="anim-typewriter">9</span>
                <span class="anim-typewriter">0</span>
                <span class="anim-typewriter">3</span>
                <span class="anim-typewriter">3</span>
                <span class="anim-typewriter">2</span>
                <span class="anim-typewriter">2</span>
                <span class="anim-typewriter">7</span>
                <span class="anim-typewriter">3</span>
                <span class="anim-typewriter">3</span>
                <span class="anim-typewriter">4</span>
              </a>
            </h4>
            <a href="#" class="anim-typewriter">
              <img src="../assets/images/social/linkedin.png" alt="" />
            </a>
            <a href="#" class="anim-typewriter">
              <img src="../assets/images/social/behance.png" alt="" />
            </a>
            <a href="#" class="anim-typewriter">
              <img src="../assets/images/social/dribble.png" alt="" />
            </a>
            <a href="#" class="anim-typewriter">
              <img src="../assets/images/social/insta.png" alt="" />
            </a>
            <a href="#" class="anim-typewriter">
              <img src="../assets/images/social/email.png" alt="" />
            </a>
          </div>
        </div>
        <div class="image" ref="image">
          <!-- <img src="../assets/images/contact.png" alt=""> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { TweenLite, TimelineLite, Power0 } from "gsap/all";
export default {
  name: "ContactPage",
  mounted() {
    // TweenLite.fromTo(this.$refs.detail, 1, {opacity: 0, x: 80}, {opacity: 1, x: 0})
    // TweenLite.fromTo(this.$refs.image, 1, {opacity: 0, x: -250}, {opacity: 1, x: 0})

    var t1 = new TimelineLite();
    t1.add(
      TweenLite.fromTo(
        this.$refs.image,
        1,
        { opacity: 0, x: -250 },
        {
          opacity: 1,
          x: 0,
          ease: Power0.easeOut,
          onStart: this.onStart,
          onComplete: this.onComplete,
          onUpdate: this.onUpdate
        }
      )
    );
    // t1.add(TweenLite.fromTo(this.$refs.detail, 0.5, {opacity: 0, x: 80}, {opacity: 1, x: 0, ease:SteppedEase.config(20)}));
    // t1.add(TweenLite.fromTo(this.$refs.detail, 1, {opacity: 0, x: 80}, {opacity: 1, x: 0, ease:SlowMo.ease.config(0.7, 0.7, false)}));
    // tl.addLabel("spin", 3);
    // tl.play();
  },
  methods: {
    onStart() {
      // console.log("ANIMATION START");
    },
    onUpdate() {
      // console.log("ANIMATION UPDATE");
    },
    onComplete() {
      // console.log("ANIMATION COMPLETED");
    }
  }
};
</script>
