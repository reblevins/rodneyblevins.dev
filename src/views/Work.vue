<template>
<section class="work ">
	<h3 class="section-header">My Work</h3>
	<ul class="work-list mb-10">
		<li><router-link to="/work?article=colt-firearms">Colt Firearms Website and CMS</router-link></li>
		<li><router-link to="/work?article=point-of-sale">Point of Sale</router-link></li>
		<li><router-link to="/work?article=website-builder">Website Builder</router-link></li>
		<li><router-link to="/work?article=checkout-page">Checkout Page</router-link></li>
	</ul>
	<article ref="colt-firearms" class="work-article">
		<h4>Colt Firearms</h4>
		<p>Whether you're a firearms enthusiast or not, there's no denying that Colt is an iconic brand and it was a privilege to be one of the engineers working on their new website.</p>
		<p><img src="../assets/img/colt.png" alt="Broadcast Cloud management system">This was the first major eCommerce website I helped build from scratch and I learned a lot about UI/UX and user flow. One of the things I spent a good amount of time architecting was the "Add to Watchlist" flow. One of the constraints was that a user has to be logged in to add a product to their watchlist, but one thing I was certain of, I didn't want the user to have to click the button twice. I'm not a designer, but I generally have a good feeling for good UI/UX, partly because when I'm using a website, I'm get annoyed when a process takes too many steps.
		</p>
		<p>In the end, we settled on this user flow:
			<ol>
				<li>User clicks "Add to Watchlist" button</li>
				<li>If the user is logged in, the item is added to the list</li>
				<li>If not, the user is redirected to the login page, and the informatio necessary to save the product to the list is included in the URL query</li>
				<li>Once the user logs in, they are redirected to a special route that then handles adding the product to the list</li>
			</ol>
		</p>
	</article>
	<article ref="broadcast-cloud" class="work-article">
		<h4>Broadcast Cloud</h4>
		<p>This was easily one of the most challenging projects on which I have ever worked. The objective of the client was to offer his clients the ability to stream video over the internet in continous live broadcasting and needed us to create the backend content, scheduling and deployment system.</p>
		<p><img src="../assets/img/broadcasttv.png" alt="Broadcast Cloud management system">The UI/UX was challenging on many levels. Not only was what we were trying to accomplish challenging, but the with the shear number of features that needed to be included in the interface the challenge was keeping it uncluttered and simple to use.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
	<article ref="point-of-sale" class="work-article">
		<h4>Point of Sale</h4>
		<p>A <abbr title="Point of Sale">POS</abbr> is an interface in which a certain subset of users will be daily performing hundreds or even thousands of actions. It is therefore essential to get the UI/UX right, with as few speedbumps as possible, requiring a good feedback loop between the users and the developers.</p>
		<p><img src="../assets/img/cdspos.png" alt="Connected Data Solutions Point of Sale">One of the challenges a developer faces is that a user of a POS needs to perform a set of actions as quickly as possible with the least amount of potential for mistakes. After all, there’s usually a customer (possibly a line of customers) standing in front of your user, wanting to give them their money in exchange for a product as quickly as possible. Similarly to a checkout process (see below), the customer needs to have confidence in the process, allowing for very low fault tolerance.</p>
		<p>Many POS users will be accessing the interface on a touch-screen device, so the size of the controls should be optimized for touchscreen but balanced with the space allowed. <a href="https://vuejs.org/v2/guide/transitions.html">Animations &amp; transitions</a> can be used to give the user visual cues to help guide them through the process but any animations or transitions should be snappy, relevant, and not get in the user’s way.</p>
	</article>
	<article ref="website-builder" class="work-article">
		<h4>Website Builder</h4>
		<p>As we were developing the website builder and new Vue.js frontend, we quickly realized that we would also need a new checkout page. The current one had served us well, it was a bit long in the tooth dated and needed a complete overhaul.</p>
		<p><img src="../assets/img/cds-website-builder.png" alt="Connected Data Solutions Checkout Page">One of the UI/UX decisions we made early on was that we should break the process up into steps. Taking inspiration from retailers such as Walmart, I broke the process up into four steps, which are clearly laid out from the get-go.</p>
		<p>In a complex process involving multiple steps, a user needs to have a roadmap that clearly delineates the steps and how far along they are in the process. According to The Baymard Institue, better checkout design can <a href="https://baymard.com/lists/cart-abandonment-rate">increase conversion rate by more than 35 percent</a>.</p>
		<p>Depending on the user’s comfort level, checking out online can be a daunting experience. Presenting a well organized checkout process can help put the user at ease, giving them confidence that their order (and their money) will be well-handled.</p>
	</article>
	<article ref="checkout-page" class="work-article">
		<h4>Checkout Page</h4>
		<p>As we were developing the website builder and new Vue.js frontend, we quickly realized that we would also need a new checkout page. The current one had served us well, it was a bit long in the tooth dated and needed a complete overhaul.</p>
		<p><img src="../assets/img/cds-frontend-checkout.png" alt="Connected Data Solutions Checkout Page">One of the UI/UX decisions we made early on was that we should break the process up into steps. Taking inspiration from retailers such as Walmart, we broke the process up into four steps, which are clearly laid out from the get-go.</p>
		<p>In a complex process involving multiple steps, a user needs to have a roadmap that clearly delineates the steps and how far along they are in the process. According to The Baymard Institue, better checkout design can <a href="https://baymard.com/lists/cart-abandonment-rate">increase conversion rate by more than 35 percent</a>.</p>
		<p>Depending on the user’s comfort level, checking out online can be a daunting experience. Presenting a well organized checkout process can help put the user at ease, giving them confidence that their order (and their money) will be well-handled.</p>
	</article>
	<router-link to="/">Home</router-link>
</section>
</template>

<script>
export default {
	mounted() {
		if (this.$route.query.article) {
			window.scrollTo({
				top: this.$refs[this.$route.query.article].offsetTop + 400,
				behavior: "smooth"
			})
		}
	},
	watch: {
		'$route.query.article'(value) {
			if (this.$route.query.article) {
				window.scrollTo({
					top: this.$refs[this.$route.query.article].offsetTop + 400,
					behavior: "smooth"
				})
			}
		}
	}
}
</script>

<style>

</style>
