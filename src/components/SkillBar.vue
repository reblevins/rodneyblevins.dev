<template>
<div class="skill" v-waypoint="{ active: active, callback: inView, options: intersectionOptions }">
    <div class="description">{{ skill.description }}</div>
    <div class="bar" :style="'width: ' + width + '%;'">
        {{ width }}%
    </div>
</div>
</template>

<script>
export default {
    name: 'skill-bar',
    props: [ 'skill' ],
    data() {
        return {
            width: 0,
            active: true,
            intersectionOptions: {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: [0, 0]
            }
        }
    },computed: {
        style() {
            return {
                width: this.width
            }
        }
    },
    methods: {
        inView({ going, direction }) {
            if (going === this.$waypointMap.GOING_IN) {
                this.calculateWidth()
            }
        },
        calculateWidth() {
            this.active = false
            if (this.width < this.skill.percent) {
                setTimeout(() => {
                    this.width++
                    this.calculateWidth()
                }, 5)
            } else {
            }
        },
    }
}
</script>
