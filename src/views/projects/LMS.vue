<template>
  <div class="lms__detail__page">
    <div class="section__part">
      <div class="second_section">
        <div class="partition__section">
          <div class="title__section">
            <div class="heading">
              <h4>
                <span
                  v-for="(item, index) in [
                    'L',
                    'o',
                    'v',
                    'e',
                    ' ',
                    'M',
                    'y',
                    ' ',
                    'S',
                    'k',
                    'o',
                    'o',
                    'l'
                  ]"
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
          <img src="../../assets/images/projects/nviso.png" alt="" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>
