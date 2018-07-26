export default (Vue, eventBus) => {
    Vue.mixin({
        created() {
            const callbacks = this.$options.eventBusCallbacks;
            for (let key in callbacks) {
                eventBus.$on(key, this[callbacks[key]]);
            }
        },

        destroyed() {
            const callbacks = this.$options.eventBusCallbacks;
            for (let key in callbacks) {
                eventBus.$off(key, this[callbacks[key]]);
            }
        }
    });
};
