<template>
    <time class="app-timeago" :datetime="datetime">{{ timeago }}</time>
</template>

<script>
    import distanceInWords from 'date-fns/distance_in_words';

    let instances = [];

    setInterval(() => {
        instances.forEach(instance => instance.computeTimeago());
    }, 1000 * 10);

    export default {
        name: 'AppTimeago',

        props: {
            date: {
                type: [Date, String, Number],
                required: true
            }
        },

        data() {
            return {
                timeago: null
            };
        },

        computed: {
            datetime() {
                const date = new Date(this.date);
                return date.toString();
            }
        },

        created() {
            this.computeTimeago();
            instances.push(this);
        },

        destroyed() {
            instances = instances.filter(instance => instance !== this);
        },

        methods: {
            computeTimeago() {
                const date = new Date(this.date);
                const now = new Date();
                this.timeago = distanceInWords(date, now);
            }
        }
    };
</script>
