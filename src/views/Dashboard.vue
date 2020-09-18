<template>

<div class="dashboard">
    <amplify-authenticator>
        <router-view />
        <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
</div>

</template>

<script>

export default {
    name: 'dashboard',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>

</style>
