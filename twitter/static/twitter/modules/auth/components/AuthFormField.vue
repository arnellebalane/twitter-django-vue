<template>
    <div class="auth-form-field">
        <label :for="id">{{ label }}</label>
        <input :id="id" v-model="inputValue" v-bind="$attrs" v-on="listeners">
        <slot></slot>
    </div>
</template>

<script>
    let counter = 0;

    export default {
        name: 'AuthFormField',

        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },

        computed: {
            id() {
                return `auth-form-field-${counter++}`;
            },

            listeners() {
                delete this.$listeners;
                return this.$listeners;
            },

            inputValue: {
                get() {
                    return this.value;
                },

                set(value) {
                    this.$emit('input', value);
                }
            }
        }
    };
</script>

<style scoped>
    label {
        display: block;
        margin-bottom: 0.4rem;
        color: #888;
    }

    input {
        width: 100%;
        padding: 0.5em;
        border: 1px solid var(--gray-3);
        border-radius: 3px;
    }
</style>
