<template>
    <button
        class="app-button"
        :class="{loading}"
        :disabled="loading"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',

        props: {
            loading: Boolean
        }
    };
</script>

<style scoped>
    .app-button {
        padding: 0.5em 2em;
        border: 1px solid var(--primary-color);
        border-radius: 2em;
        color: #fff;
        background-color: var(--primary-color);
        cursor: pointer;
    }

    .app-button.loading {
        position: relative;
        color: transparent;
        opacity: 0.5;
        cursor: auto;
    }

    .app-button.loading::before {
        --spinner-size: 1em;

        content: "";
        width: var(--spinner-size);
        height: var(--spinner-size);
        border: 1px solid #fff;
        border-top-color: transparent;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - var(--spinner-size) / 2);
        left: calc(50% - var(--spinner-size) / 2);
        transform-origin: center center;
        animation: rotate 500ms linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>
