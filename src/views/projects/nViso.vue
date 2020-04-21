<template>
  <div class="nviso__detail__page">
    <div class="section__part">
      <div
        class="second_section"
        v-on:scroll="scrollFunction"
        ref="second_section"
      >
        <div class="partition__section">
          <div class="title__section">
            <div class="heading">
              <h4>
                <span
                  v-for="(item, index) in ['n', 'V', 'i', 's', 'o']"
                  :key="index"
                  class="anim-typewriter"
                  >{{ item }}</span
                >
              </h4>
              <h4>
                <span
                  v-for="(item, index) in [
                    'W',
                    'E',
                    'B',
                    ' ',
                    'A',
                    'P',
                    'P',
                    '/',
                    'U',
                    'I',
                    '/',
                    'U',
                    'X'
                  ]"
                  :key="index"
                  class="anim-typewriter"
                  >{{ item }}</span
                >
              </h4>
            </div>
            <a
              href="https://www.nviso-insights.com/en"
              target="_blank"
              class="project__link"
              >https://www.nviso-insights.com/en</a
            >
          </div>
          <div class="section__detail">
            <p>
              NVISO are leading experts in artificial intelligence and deep
              learning to accurately detect and predict human behaviors using
              <span>“visual intelligence”</span>.
            </p>
          </div>
        </div>
        <p>
          <img
            src="../../assets/images/projects/nViso1.png"
            alt=""
            ref="image1"
          />
        </p>
        <p>
          <img
            src="../../assets/images/projects/nViso2.png"
            alt=""
            ref="image2"
          />
        </p>
        <p>
          <img
            src="../../assets/images/projects/nViso3.png"
            alt=""
            ref="image3"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, TimelineLite, Power0 } from "gsap/all";
export default {
  name: "AboutPage",
  mounted() {
    var t1 = new TimelineLite();
    t1.add(
      TweenLite.fromTo(
        this.$refs.image1,
        1,
        { opacity: 0, x: -250 },
        { opacity: 1, x: 0, ease: Power0.easeOut }
      )
    );
    t1.add(
      TweenLite.fromTo(
        this.$refs.image2,
        1,
        { opacity: 0, x: 250 },
        { opacity: 1, x: 0, ease: Power0.easeOut }
      )
    );
    t1.add(
      TweenLite.fromTo(
        this.$refs.image3,
        1,
        { opacity: 0, x: -250 },
        { opacity: 1, x: 0, ease: Power0.easeOut }
      )
    );
  },
  methods: {
    scrollFunction() {
      //   console.log("scrolling", this.$refs.second_section.scrollTop);
      //   if(this.$refs.second_section.scrollTop == 266 ){
      //       TweenLite.fromTo( this.$refs.image2, 1, { opacity: 0, x: 250 }, { opacity: 1, x: 0, ease: Power0.easeOut } )
      //   }else if(this.$refs.second_section.scrollTop == 950){
      //       TweenLite.fromTo( this.$refs.image3, 2, { opacity: 0, x: -250 }, { opacity: 1, x: 0, ease: Power0.easeOut } )
      //   }
    }
  }
  //   created() {
  //     window.addEventListener("scroll", this.handleScroll);
  //   },
  //   destroyed() {
  //     window.removeEventListener("scroll", this.handleScroll);
  //   }
};
</script>
