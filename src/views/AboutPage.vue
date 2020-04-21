<template>
  <transition name="main__parent__fade">
    <div class="about__page">
      <div class="section__part">
        <div class="first_section">
          <h4>
            <span
              v-for="(item, index) in ['H', 'U']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
          <h4>
            <span
              v-for="(item, index) in ['M', 'A', 'N']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
        </div>
        <div class="second_section">
          <h4>
            <span
              v-for="(item, index) in ['U', 'I']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
          <h4>
            <span
              v-for="(item, index) in [
                'D',
                'E',
                'V',
                'E',
                'L',
                'O',
                'P',
                'E',
                'R'
              ]"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
        </div>
        <div class="third_section">
          <h4>
            <span
              v-for="(item, index) in ['D', 'E']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
          <h4>
            <span
              v-for="(item, index) in ['S', 'I', 'G', 'N', 'E', 'R']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
        </div>
      </div>
      <router-link :to="{ path: '/about-detail' }" class="more_btn">
        <img src="../assets/images/btn.png" alt="" />
        <span>Press & Explore</span>
      </router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>
