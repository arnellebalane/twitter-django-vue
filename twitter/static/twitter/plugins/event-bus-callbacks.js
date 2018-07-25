export default (Vue, {eventBus}) => {
    Vue.mixin({
        created() {
            for (let key in this.eventBusCallbacks) {
                eventBus.$on(key, this.eventBusCallbacks[key]);
            }
        },

        destroyed() {
            for (let key in this.eventBusCallbacks) {
                eventBus.$off(key, this.eventBusCallbacks[key]);
            }
        }
    });
};
