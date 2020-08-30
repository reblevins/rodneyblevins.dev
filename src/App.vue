<template>
<div id="app" class="container mx-auto" @keyup="handleKeyUp" ref="app">
    <header class="px-8 py-8 lg:px-12 border-dotted border-b-4">
        <p>Hi, I'm</p>
        <h1>Rodney Blevins</h1>
		<h3>I guess you can tell that I'm a coder geek.</h3>
        <!-- <p>I'm a full stack web developer with 10+ years experience building websites with PHP, 5+ years experience building Web apps and 3+ years experience building high volume SaaS web applications in Vue.js on the frontend, PHP / Node.js on the backend. Currently focusing more on the frontend.</p> -->
		<h4>And I'm passionate about writing clean, elegant code.</h4>
        <h3 class="text-xl py-4">Please select an option from the following menu:</h3>
        <ul id="nav" @keyup="handleKeyUp" tabindex="-1" class="max-w-none sm:max-w-xs">
            <menu-item v-for="(item, index) in menuItems" :key="'menu-item-' + index" :selectedMenuItemIndex="selectedMenuItemIndex" :item="item" :index="index" @input="selectedMenuItemIndex = $event" :tabindex="index + 1"></menu-item>
        </ul>
    </header>
    <div class="content lg:container lg:mx-auto text-l px-8 py-8 lg:px-12 mb-6">
        <router-view />
    </div>
</div>
</template>

<script>
import './styles.scss';
import MenuItem from './components/MenuItem'
export default {
    components: {
        'menu-item': MenuItem
    },
    data() {
        return {
            selectedMenuItemIndex: 0,
            menuItems: [
                {
                    to: '/',
                    label: 'About'
                },
                {
                    to: '/work',
                    label: 'Work'
                }
            ]
        }
    },
    mounted() {
        document.getElementById('nav').focus();
    },
	watch: {
		'$route'(value) {
			if (!this.$route.query.article) {
				window.scrollTo({
					top: this.$refs.app.offsetTop,
					behavior: "smooth"
				})
			}
		}
	},
    methods: {
        handleKeyUp(event) {
            switch (event.code) {
                case "ArrowUp":
                    this.selectedMenuItemIndex = (this.selectedMenuItemIndex == this.menuItems.length - 1) ? 0 : this.selectedMenuItemIndex + 1
                    break;
                case "ArrowDown":
                    this.selectedMenuItemIndex = (this.selectedMenuItemIndex == 0) ? this.menuItems.length - 1 : this.selectedMenuItemIndex - 1
                    break;
                case "Enter":
                    this.$router.push(this.menuItems[this.selectedMenuItemIndex].to)
            }
        },
        handleMenuItemFocus(index) {
            this.selectedMenuItemIndex = index
        }
    }
}
</script>
