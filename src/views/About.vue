<template>
<section class="about">
	<h3 class="section-header">About Me</h3>
	<article>
		<p><img class="right md:max-w-xs" src="../assets/img/rodneyblevins.jpg" alt="Rodney Blevins">I'm a full stack web developer with 10+ years experience building websites with PHP, 5+ years experience building Web apps and 3+ years experience building high volume SaaS web applications in Vue.js on the frontend, PHP / Node.js on the backend.</p>
		<p>I started writing PHP in 1997 and I was immediately hooked. Since then, I have made websites for various Youth With A Mission (YWAM) ministries around the world, mostly involving WordPress. I have created WordPress templates, customized them, and created plugins.</p>
	</article>
	<h3 class="section-header">Skills</span></h3>
	<article>
		<div class="skills">
			<skill-bar :skill="skill" v-for="(skill, index) in skills" :key="'skill-list-item-' + index"></skill-bar>
		</div>
	</article>
	<h3 class="section-header">Featured Work</h3>
	<article class="work-article">
		<h4>Broadcast Cloud</h4>
		<p>This was easily one of the most challenging projects on which I have ever worked. The objective of the client was to offer his clients the ability to stream video over the internet in continous live broadcasting and needed us to create the backend content, scheduling and deployment system.</p>
		<p><img src="../assets/img/broadcasttv.png" alt="Broadcast Cloud management system">The UI/UX was challenging on many levels. Not only was what we were trying to accomplish challenging, but with the shear number of features that needed to be included in the interface the challenge was keeping it uncluttered and simple to use. This was also my first time using drag-and-drop in a major project.</p>
		<p>And in keeping with my philosophy about transitions &amp; animations for complex UI/UX like this or a Point of Sale, they should generally be used sparingly and mostly to enhance the user's understanding of what is happening once they initiate an action. For example, they click the header in a list of accordion sections: a triangle bullet rotates downwards, the accordion section slides open, etc.</p>
	</article>
	<h3 class="section-header">Other Work</h3>
	<article>
		<ul class="work-list">
			<li><router-link to="/work">Colt Firearms Website and CMS</router-link></li>
			<li><router-link to="/work">Point of Sale</router-link></li>
			<li><router-link to="/work">Website Builder</router-link></li>
			<li><router-link to="/work">Checkout Page</router-link></li>
		</ul>
	</article>
</section>
</template>

<script>
import SkillBar from '../components/SkillBar'
export default {
	name: 'About',
    components: {
        'skill-bar': SkillBar
    },
	data() {
		return {
			skills: [
				{
                    description: 'PHP',
					length: '10+ years',
                    percent: 85
                },
				{
                    description: 'HTML5',
					length: '10+ years',
                    percent: 91
                },
				{
                    description: 'CSS',
					length: '10+ years',
                    percent: 80
                },
				{
					description: 'JavaScript',
					length: '5+ years',
					percent: 88
				},
				{
					description: 'Vue.js',
					length: '3+ years',
					percent: 85
				},
                {
                    description: 'NPM',
					length: '3+ years',
                    percent: 87
                },
				{
                    description: 'webpack',
					length: '3+ years',
                    percent: 65
                },
                {
                    description: 'AWS',
					length: '1 year',
                    percent: 79
                },

			]
		}
	}
}
</script>
