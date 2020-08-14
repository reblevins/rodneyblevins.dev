<template>

<!-- <li class="py-2" @focus.native="handleMenuItemFocus(index)"> -->
    <!-- <span>{{ index + 1 }}</span> -->
    <router-link :to="item.to" class="menu-item" :class="{ selected: selectedMenuItemIndexLocal == index }" @focus.native="handleMenuItemFocus(index)"><span>{{ index + 1 }}.</span>{{ item.label }}</router-link>
<!-- </li> -->

</template>

<script>
export default {
    name: 'menu-item',
    props: [ 'selectedMenuItemIndex', 'item', 'index' ],
    data() {
        return {
            selectedMenuItemIndexLocal: 0
        }
    },
    watch: {
        selectedMenuItemIndex(newVal) {
            this.selectedMenuItemIndexLocal = newVal
        }
    },
    methods: {
        handleMenuItemFocus(index) {
            this.$emit("input", index)
        }
    }
}
</script>

<style lang="scss" coped>
a.menu-item {
    display: grid;
    grid-template-columns: 25px 1fr;
}
</style>
