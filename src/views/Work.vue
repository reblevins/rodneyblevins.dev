<template>
<section class="work ">
	<h3 class="section-header">A sampling of my work</h3>
	<article ref="colt-firearms" class="work-article">
		<h4>Colt Firearms</h4>
		<p>Whether you're a firearms enthusiast or not, there's no denying that Colt is an iconic brand and it was a privilege to be one of the engineers working on their new website.</p>
		<p><img src="../assets/img/colt.png" alt="Broadcast Cloud management system">This was the first major eCommerce website I helped build from scratch and I learned a lot about UI/UX and user flow. One of the things I spent a good amount of time architecting was the "Add to Watchlist" flow. One of the constraints was that a user has to be logged in to add a product to their watchlist, but one thing I was certain of, I didn't want the user to have to click the button twice. I'm not a designer, but I generally have a good feeling for good UI/UX, partly because when I'm using a website, I'm get annoyed when a process takes too many steps.
		</p>
		<p>In the end, we settled on this user flow:
			<ol>
				<li>User clicks "Add to Watchlist" button</li>
				<li>If the user is logged in, the item is added to the list</li>
				<li>If not, the user is redirected to the login page, and the information necessary to save the product to the list is included in the URL query</li>
				<li>Once the user logs in, they are redirected to a special route that then handles adding the product to the list</li>
			</ol>
		</p>
	</article>
	<article ref="broadcast-cloud" class="work-article">
		<h4>Broadcast Cloud</h4>
		<p>This was easily one of the most challenging projects on which I have ever worked. The objective of the client was to offer his clients the ability to stream video over the internet in continous live broadcasting and needed us to create the backend content, scheduling and deployment system.</p>
		<p><img src="../assets/img/broadcasttv.png" alt="Broadcast Cloud management system">The UI/UX was challenging on many levels. Not only was what we were trying to accomplish challenging, but with the shear number of features that needed to be included in the interface the challenge was keeping it uncluttered and simple to use. This was also my first time using drag-and-drop in a major project.</p>
		<p>And in keeping with my philosophy about transitions &amp; animations for complex UI/UX like this or a Point of Sale, they should generally be used sparingly and mostly to enhance the user's understanding of what is happening once they initiate an action. For example, they click the header in a list of accordion sections: a triangle bullet rotates downwards, the accordion section slides open, etc.</p>
	</article>
	<article ref="point-of-sale" class="work-article">
		<h4>Point of Sale</h4>
		<p>A <abbr title="Point of Sale">POS</abbr> is an interface in which a certain subset of users will be daily performing hundreds or even thousands of actions. It is therefore essential to get the UI/UX right, with as few speedbumps as possible, requiring a good feedback loop between the users and the developers.</p>
		<p><img src="../assets/img/cdspos.png" alt="Connected Data Solutions Point of Sale">One of the challenges a developer faces is that a user of a POS needs to perform a set of actions as quickly as possible with the least amount of potential for mistakes. After all, there’s usually a customer (possibly a line of customers) standing in front of your user, wanting to give them their money in exchange for a product as quickly as possible. Similarly to a checkout process (see below), the customer needs to have confidence in the process, allowing for very low fault tolerance.</p>
		<p>Many POS users will be accessing the interface on a touch-screen device, so the size of the controls should be optimized for touchscreen but balanced with the space allowed. <a href="https://vuejs.org/v2/guide/transitions.html">Animations &amp; transitions</a> can be used to give the user visual cues to help guide them through the process but any animations or transitions should be snappy, relevant, and not get in the user’s way.</p>
	</article>
	<article ref="point-of-sale" class="work-article">
		<h4>Node.js / Socket.io micro-api</h4>
		<p>When it came time to link our POS to our payment gateway, we were well aware that so much could go wrong between our web-based POS, the payment gateway API, their payment terminals and back. Anywhere along the line, if the connection is dropped, the payment either can't be recorded in our database, or the POS won't be alerted of a successful transaction and finish out the sale.</p>
		<p><img src="../assets/img/node-socket.png" alt="Connected Data Solutions Point of Sale">If you're a cashier in a store using our POS and you have customers waiting in line, this can be very frustrating and could potentially cause you to lose business.</p>
		<p>After some brainstorming, I came up with the idea for a <a href="https://nodejs.org/">Node.js</a> / <a href="https://socket.io/">Socket.io</a> micro-api. If the user's internet connection becomes unstable or goes away completely during the transaction, once they are back online the mirco-api could push payment information to the POS allowing the completion of the sale.</p>
		<p>This micro-api processes tens of thousands of transactions monthly.</p>
	</article>
	<article ref="website-builder" class="work-article">
		<h4>Website Builder</h4>
		<p>Connected Data Solutions already had a great suite of SaaS webapps to offer their clients, but one thing they knew they were lacking was a way for their clients to create their own websites.</p>
		<p><img src="../assets/img/cds-website-builder.png" alt="Connected Data Solutions Checkout Page">It was my turn to take the lead on this project and this is where my experience in drag-and-drop that I gained on the Broadcast Cloud project really came into it's own. This was definitely the most challenging project on which I have ever worked.</p>
		<p>I gained tons of experience in architecting the data as well as engineering reusable components for the different sections that a user would use to build their site. Allowing the users to modify things like font size, colors, backgrounds, etc was also a major challenge.</p>
		<p>All in all, this was a fun project to work on, challenging, but I also learned a lot from it.</p>
	</article>
	<article ref="checkout-page" class="work-article">
		<h4>Checkout</h4>
		<p>As we were developing the website builder and new Vue.js frontend, we quickly realized that we would also need a new checkout page. The current one had served us well, it was a bit long in the tooth dated and needed a complete overhaul.</p>
		<p><img src="../assets/img/cds-frontend-checkout.png" alt="Connected Data Solutions Checkout Page">One of the UI/UX decisions we made early on was that we should break the process up into steps. Taking inspiration from retailers such as Walmart, we broke the process up into four steps, which are clearly laid out from the get-go.</p>
		<p>In a complex process involving multiple steps, a user needs to have a roadmap that clearly delineates the steps and how far along they are in the process. According to The Baymard Institue, better checkout design can <a href="https://baymard.com/lists/cart-abandonment-rate">increase conversion rate by more than 35 percent</a>.</p>
		<p>Depending on the user’s comfort level, checking out online can be a daunting experience. Presenting a well organized checkout process can help put the user at ease, giving them confidence that their order (and their money) will be well-handled.</p>
	</article>
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
