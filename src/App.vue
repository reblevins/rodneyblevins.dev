<template>
<div id="app" class="container mx-auto" @keyup="handleKeyUp" ref="app">
    <header class="px-8 py-8 lg:px-12 border-dotted border-b-4">
        <div>
			<p>Hi, I'm</p>
	        <h1>Rodney Blevins</h1>
			<h3>I guess you can tell that I'm a coder geek.</h3>
        </div>
        <!-- <h3 class="text-xl py-4">Please select an option from the following menu:</h3> -->
        <ul id="nav" @keyup="handleKeyUp" tabindex="-1" class="max-w-none sm:max-w-xs">
			<router-link tag="li" :to="item.to" class="menu-item" v-for="(item, index) in menuItems" :key="'menu-item-' + index">{{ item.label }}</router-link>
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
					top: 0,
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
