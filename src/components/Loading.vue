<template>
<!-- <div class="loading" v-if="saving"><font-awesome-icon :icon="[ 'fas', 'cloud-upload-alt']" pulse /></div> -->
<div class="loading"><font-awesome-icon icon="spinner" spin /></div>
</template>

<script>
export default {
    name: 'loading',
    props: {
        loading: {
            required: false,
            default: true
        },
        saving: {
            required: false,
            default: false
        }
    }
}
</script>
