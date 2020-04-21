<template>
  <header class="header header--home">
    <nav :class="'navigation navigation--' + pathname" v-if="windowWidth > 800">
      <router-link
        :to="{ path: '/' }"
        class="navigation__link--logo curserhover"
        id="testdiv"
      >
        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 50 52">
          <g>
            <text transform="translate(1 53) scale(0.11 0.11)" class="cls-1">
              <tspan stroke="black" stroke-width="4" class="cls-2">V</tspan>
            </text>
            <text transform="translate(29 39)  scale(0.11 0.11)" class="cls-3">
              <tspan class="cls-4">P</tspan>
            </text>
          </g>
        </svg>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535 404">
          <g data-name="Layer 2">
            <path
              d="M510.2 91L329.1 390h-92.3L417.9 91h92.3M535 77H410L212 404h125L535 77z"
              stroke="#FFF"
              stroke-width="10"
              stroke-dasharray="1500"
              fill="#FFF"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="1500"
                to="0"
                dur="2s"
                fill="freeze"
              />
            </path>
            <path
              d="M290.2 314.8l-8.5 14 32.1 61.2h-93.3L23.2 14h93.3l150.6 287 8.6-13.8L125 0H0l212 404h125l-46.8-89.2z"
              stroke="#FFF"
              stroke-width="10"
              stroke-dasharray="2200"
              fill="#FFF"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="1500"
                to="0"
                dur="2s"
                fill="freeze"
              />
            </path>
          </g>
        </svg> -->
      </router-link>
      <router-link
        :to="{ path: '/portfolio' }"
        class="navigation__link navigation__link--contact"
        v-if="pathname == 'nviso' || pathname == 'lms'"
        ><span>Close</span></router-link
      >
      <router-link
        :to="{ path: '/contact' }"
        class="navigation__link navigation__link--contact"
        v-if="pathname != 'nviso' && pathname != 'lms'"
        ><span>Contact</span></router-link
      >
      <router-link
        :to="{ path: '/about' }"
        class="navigation__link navigation__link--about"
        v-if="pathname != 'nviso' && pathname != 'lms'"
        ><span>about</span></router-link
      >
      <router-link
        :to="{ path: '/portfolio' }"
        class="navigation__link navigation__link--portfolio"
        v-if="pathname != 'nviso' && pathname != 'lms'"
        ><span>Portfolio</span></router-link
      >
    </nav>
    <nav
      :class="
        'mobile-navigation navigation--' +
          pathname +
          (isMobileMenuOpen ? ' open' : ' close')
      "
      v-if="windowWidth <= 800"
    >
      <router-link
        :to="{ path: '/' }"
        class="navigation__link--logo curserhover"
      >
        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 50 52">
          <g>
            <text transform="translate(1 52) scale(0.11 0.11)" class="cls-1">
              <tspan class="cls-2">V</tspan>
            </text>
            <text transform="translate(29 39)  scale(0.11 0.11)" class="cls-3">
              <tspan class="cls-4">P</tspan>
            </text>
          </g>
        </svg>
      </router-link>
      <div class="navigation__link--close curserhover" @click="demo">
        <span :class="'menu-trigger' + (isMobileMenuOpen ? ' open' : ' close')">
          <i class="menu-trigger-bar top"></i>
          <i class="menu-trigger-bar middle"></i>
          <i class="menu-trigger-bar bottom"></i>
        </span>
      </div>
      <router-link
        :to="{ path: '/portfolio' }"
        class="navigation__link navigation__link--contact"
        v-if="pathname == 'nviso' || pathname == 'lms'"
        ><span>Close</span></router-link
      >
      <div class="nav__links">
        <a
          :to="{ path: '/' }"
          v-if="pathname != 'nviso' && pathname != 'lms'"
          @click="mobileLinkRedirect('/')"
          ><span>Home</span></a
        >
        <a
          :to="{ path: '/contact' }"
          v-if="pathname != 'nviso' && pathname != 'lms'"
          @click="mobileLinkRedirect('/contact')"
          ><span>Contact</span></a
        >
        <a
          :to="{ path: '/about' }"
          v-if="pathname != 'nviso' && pathname != 'lms'"
          @click="mobileLinkRedirect('/about')"
          ><span>about</span></a
        >
        <a
          :to="{ path: '/portfolio' }"
          v-if="pathname != 'nviso' && pathname != 'lms'"
          @click="mobileLinkRedirect('/portfolio')"
          ><span>Portfolio</span></a
        >
      </div>
      <div class="social__icon"></div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      isMobileMenuOpen: false
    };
  },
  computed: {
    pathname() {
      return this.$route.name;
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);

      //Init
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
    },
    demo() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    mobileLinkRedirect(event) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.$router.push({ path: event });
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>
<style lang="css" scoped>
/* .path {
  stroke: white;
  stroke-width: 20px;
  stroke-dasharray: 3000;
  stroke-dashoffset: 0;
  animation: dash 3s linear alternate;
} */

/* @keyframes dash {
  from {
    stroke: black;
    stroke-dashoffset: 3000;
  }
  to {
    stroke: white;
    stroke-dashoffset: 0;
  }
} */
</style>
