<template>
<div id="app" class="container mx-auto" ref="app">
    <header class="px-8 py-8 lg:px-12 border-dotted border-b-4">
        <div>
			<p>Hi, I'm</p>
	        <h1>Rodney Blevins</h1>
			<h3 class="text-2xl">I guess you can tell that I'm a coder geek.</h3>
			<h4 class="text-lg">And I'm always ready to tackle a new challenge using my current skillset or to learn something completely new when the occasion rises.</h4>
        </div>
        <!-- <h3 class="text-xl py-4">Please select an option from the following menu:</h3> -->
        <ul id="nav" tabindex="-1" class="max-w-none sm:max-w-xs">
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
export default {
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
    created() {
        document.execCommand("defaultParagraphSeparator", false, "p");
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
