<template>
  <transition name="main__parent__fade">
    <div class="about__detail__page">
      <div class="section__part">
        <div
          class="first_section"
          :style="{
            'background-image':
              'url(' + require('../assets/images/about_detail_bg.png') + ')'
          }"
        >
          <h4>
            <span
              v-for="(item, index) in ['A', 'B', 'O', 'U', 'T']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
          <h4>
            <span
              v-for="(item, index) in ['M', 'E']"
              :key="index"
              class="anim-typewriter"
              >{{ item }}</span
            >
          </h4>
        </div>
        <div class="second_section">
          <div class="heading">
            <h4>
              <span
                v-for="(item, index) in ['H', 'I']"
                :key="index"
                class="anim-typewriter"
                >{{ item }}</span
              >
            </h4>
            <h4>
              <span
                v-for="(item, index) in ['G', 'U', 'Y', 'S']"
                :key="index"
                class="anim-typewriter"
                >{{ item }}</span
              >
            </h4>
          </div>
          <div class="partition__section">
            <h4>About</h4>
            <div class="section__detail">
              <p>
                My name is Vivek. i’ve been a ui designer and allround web
                developer for almost 3 years. i specialize mainly in WEB design
                as well as web & mobile apps development. I’m really keen on
                getting to know my clients’ expectations and to translate into
                my projects. also i like working in a team, you’ll learn faster
                and much more. as the saying goes:
                <span>“two heads are better than one”</span>.
              </p>
            </div>
          </div>
          <div class="partition__section">
            <h4>TAGS</h4>
            <div class="section__detail">
              <p># Front End Lead</p>
              <p># JavaScript Developer</p>
              <p># UI/UX Designer</p>
              <p># Full stack DEV</p>
              <p># SPIRITUAL PERSON</p>
            </div>
          </div>
          <div class="partition__section">
            <h4>SKILLS</h4>
            <div class="section__detail">
              <p>
                <span>Primary</span>: JavaScript (ES6), HTML5, CSS3, UI design
              </p>
              <p>
                <span>Framework</span>: Vue JS, React, React-Native, Laravel,
                Node JS, npm, jQuery, AngularJS, Bootstrap, SCSS, Django
              </p>
              <p><span>Secondary</span>: Python, PHP</p>
              <p>
                <span>Project Management</span>: Agile Development, Change
                Control Board Member
              </p>
              <p><span>Project Management Tool</span>: JIRA, Trello</p>
              <p>
                <span>Tools</span>: Sketch, Adobe Photoshop, Visual Studio Code,
                PyCharm, Android Studio
              </p>
              <p><span>Databases</span>: MongoDB, MySQL, Firebase</p>
              <p><span>Version Control</span> : Git, Bit bucket</p>
              <p>
                <span>DevOps Practices/Tools</span> : Amazon Web Services,
                Docker, Jenkins, Gitlab CI
              </p>
              <p><span>Operating System</span> : Mac</p>
            </div>
          </div>
          <div class="partition__section">
            <h4>Educations</h4>
            <div class="section__detail">
              <h3>
                Master of coumputer application (2015-2017)<span
                  >CHARUSAT UNIVERCITY</span
                >
              </h3>
              <p>
                Successfully passed MCA’ WITH scoring CGPA 8.20 out of 10.00.
                The study fields were Software Architecture, Advanced knowledge
                of Programming Language. CHARUSAT University of GUJARAT.
              </p>
              <h3>
                BACHELOR OF COMPUTER APPLICATION (2012-2015)<span
                  >GUJARAT UNIVERSITY</span
                >
              </h3>
              <p>
                The education was mainly Java-based programming, but I also
                learned about SQL, PHP, MVC, UML and more. During my time in
                college, I specialized in multimedia. Here I learned about
                gaming -the importance of OOP-, web- and user experience and
                design.
              </p>
              <h3>
                HIGHER SECONDRY EDUCATION (2010-2012)<span
                  >GUJARAT HIGHER EDUCATION BOARD GUJARAT</span
                >
              </h3>
              <p>
                I graduated highschool, where I enjoyed doing science, math,
                biology and arts. I realized in my third year of school that I
                wanted to do something with websites, and so I started making
                small flash/actionscript applications.
              </p>
              <h3>
                HIGH SCHOOL DEGREE (2008-2010)
                <span>GUJARAT EDUCATION BOARD GUJARAT</span>
              </h3>
              <p>
                Successfully passed SSC’ WITH scoring 74%. The study fields were
                Basic Science, Mathematics, Socail Science and natural language.
              </p>
            </div>
          </div>
          <div class="partition__section careers__section">
            <h4>Careers</h4>
            <div class="section__detail">
              <h3>
                Senior Web Developer(Jan – 2018 to Present)<span
                  ><a href="http://www.avdevs.com/" target="_blank"
                    >AV DEVS Solutions Pvt. Ltd</a
                  ></span
                >
              </h3>
              <li>
                Develop product and creating new features which require by
                client using React Js, Vue Js and backend in PHP Laravel
              </li>
              <li>
                Worked on web and mobile team to create and develop new
                solutions to increase conversion rate.
              </li>
              <li>Helped established good coding standards and practices.</li>
              <li>
                Developed in-depth understanding of the role/influence of the
                front-end lead on the development team, plus front-end
                development and community building for technology professionals.
              </li>
              <li>
                Developed, designed layout mockups, coded, tested and maintained
                internal/external company projects.
              </li>
              <li>
                As part of change control board my key responsibilities were to
                handle the agile development in team by doing sprint planning,
                managing Jira board, and this is sync by doing daily scrum
                meeting and retrospective meetings.
              </li>
              <h3>
                FRONT END DEVELOPER (Jun – 2017 to Des– 2017)
                <span
                  ><a href="http://www.leo9studio.com/" target="_blank"
                    >LEO9 STUDIO MUMBAI</a
                  ></span
                >
              </h3>
              <li>Develop new user-facing features</li>
              <li>Ensure the technical feasibility of UI/UX designs</li>
              <li>Optimize application for maximum speed and scalability</li>
              <li>Collaborate with other team members.</li>
            </div>
          </div>
          <div class="partition__section careers__section">
            <h4>EXTRA</h4>
            <div class="section__detail">
              <h3>CURRICULAR ACTIVITIES</h3>
              <p>
                Trainer at Collabera for Android, Java. <br />
                Presented on Android in many collages. <br />
                Volunteer of Yogi Devine Society (YDS - NGO) till date. <br />
                Runner up in Cricket Tournament (AVD Cricket League).
              </p>
              <h3>ACHIEVEMENTS & CERTIFICATIONS</h3>
              <p>
                Java Certification - Rajesh Patkar Institute of Software
                Engineering.<br />
                Certificate for Outstanding Performance in Atmiya Vidya Dham.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      imgUrl: "https://via.placeholder.com/350x150" // String
    };
  }
};
</script>
