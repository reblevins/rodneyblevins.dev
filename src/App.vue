<template>
<div id="app" class="container mx-auto" @keyup="handleKeyUp">
    <header class="py-8 px-12 border-dotted border-b-4">
        <p>Hi, I'm</p>
        <h1>Rodney Blevins</h1>
        <h3 class="text-xl py-4">Please select an option from the following menu:</h3>
        <ul id="nav" @keyup="handleKeyUp" tabindex="-1" class="max-w-none sm:max-w-xs">
            <menu-item v-for="(item, index) in menuItems" :key="'menu-item-' + index" :selectedMenuItemIndex="selectedMenuItemIndex" :item="item" :index="index" @input="selectedMenuItemIndex = $event" :tabindex="index + 1"></menu-item>
        </ul>
    </header>
    <div class="content lg:container lg:mx-auto text-l py-8 px-12 mb-6">
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
