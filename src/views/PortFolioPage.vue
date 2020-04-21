<template>
  <transition name="main__parent__fade">
    <div class="portfolio__page">
      <div class="project__list">
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
      </div>
      <div class="project__list">
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
      </div>
      <div class="project__list">
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
      </div>
      <div class="project__list">
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
        <div class="project__box">
          <img :src="projectList[0].image" alt="" ref="imageofProject" />
        </div>
      </div>
      <!-- <swiper
        :options="swiperOption"
        ref="mySwiper"
        @slideChange="slideChanged"
        class="projects__slide"
      >
        <swiper-slide v-for="(item, index) in projectList" :key="index">
          <h2 ref="projectTitle">{{ item.name }}</h2>
          <router-link :to="{ path: '/' + item.key }" class="project__list">
            <img :src="item.image" alt="" ref="imageofProject" />
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper> -->
      <!-- <div class="navigation__btn__group">
        <div class="navigation__btns">
          <div 
              v-for="(navButton, index) in navButtonSet" 
              type="button" @click="currentSelect = navButton.id, currentIndex = navButton.number, sendLog()" 
              :class="['navigation__bullets', { 'navigation__bullets': navButton.number === currentIndex, 'navigation__bullets__active': navButton.number !== currentIndex }]"
              :key="index"
              >
          </div>
        </div>
      </div> 
      <transition
        v-on:enter="enter"
        v-on:after-enter="afterEnter"					
        v-on:leave="leave"
        v-bind:css="false"
      >
        <component v-bind:is="currentSelect" class="current-slide">
        </component>
      </transition> -->
    </div>
  </transition>
</template>

<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import { TweenLite } from "gsap/all";
export default {
  name: "PortFolioPage",
  components: {
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      projectList: [
        {
          key: "nviso",
          name: "Avdevs",
          image: require("../assets/images/work-showcase-6.jpg")
        },
        {
          key: "nviso",
          name: "nViso",
          image: require("../assets/images/work-showcase-6.jpg")
        }
        // { key: 'lms', name: 'Love My Skool', image : require('../assets/images/projects/lms1.png'), },
        // { key: 'pepipost', name: 'PepiPost', image : require('../assets/images/projects/lms1.png'), },
        // { key: 'scante', name: 'Scante', image : require('../assets/images/projects/lms1.png'), },
        // { key: '', name: 'mFin', image : require('../assets/images/projects/lms1.png'), },
        // { key: '', name: 'High Furtados', image : require('../assets/images/projects/lms1.png'), }
      ],
      // scrolled: false,
      swiperOption: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // TweenLite.fromTo(
    //   this.$refs.imageofProject,
    //   1,
    //   { opacity: 0, x: 0, scale: 0.5 },
    //   { opacity: 1, x: 0, scale: 1 }
    // );
    // TweenLite.fromTo(
    //   this.$refs.projectTitle,
    //   1,
    //   { opacity: 0, x: 0, scale: 0.5 },
    //   { opacity: 1, x: 0, scale: 1 }
    // );
  },
  methods: {
    slideChanged() {
      // TweenLite.fromTo(
      //   this.$refs.imageofProject,
      //   1,
      //   { opacity: 0, x: 0, scale: 0.5 },
      //   { opacity: 1, x: 0, scale: 1 }
      // );
      // TweenLite.fromTo(
      //   this.$refs.projectTitle,
      //   1,
      //   { opacity: 0, x: 0, scale: 0.5 },
      //   { opacity: 1, x: 0, scale: 1 }
      // );
      // console.log("VIEK", this.projectList[this.swiper.activeIndex].name)
    },
    scrollFunction() {
      // console.log("scrolling");
    }
  },
  created() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
