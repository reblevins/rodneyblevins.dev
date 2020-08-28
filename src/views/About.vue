<template>
  <div class="about lg:w-4/6 lg:mx-auto">
	  <section class="section-2 mt-10">
          <aside>
              <h3 class="section-header">Skills</h3>
              <div class="skills">
                  <div class="skill" v-for="(skill, index) in skills">
                  	<div class="description">{{ skill.description }}</div>
					<div class="bar" :style="'width: ' + skill.percent + '%;'">
						{{ skill.percent }}%
					</div>
                  </div>
              </div>
          </aside>
          <article>
              <h3 class="section-header">Featured Work</h3>
              <div class="work-article">
                  <h4>Broadcast Cloud</h4>
                  <p>This was easily one of the most challenging projects on which I have ever worked. The objective of the client was to offer his clients the ability to stream video over the internet in continous live broadcasting and needed us to create the backend content, scheduling and deployment system.</p>
                  <p><img class="max-w-full mr-6 mb-4 md:max-w-sm md:float-left lg:-ml-16" src="../assets/img/broadcasttv.png" alt="Broadcast Cloud management system">The UI/UX was challenging on many levels. Not only was what we were trying to accomplish challenging, but the with the shear number of features that needed to be included in the interface the challenge was keeping it uncluttered and simple to use.</p>
				  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </article>
      </section>
  </div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			skills: [
				{
					description: 'JavaScript',
					percent: 79
				},
				{
					description: 'Vue.js',
					percent: 85
				}
			]
		}
	}
}
</script>
