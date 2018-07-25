export default {
    data() {
        return {
            formErrors: {},
            error: null
        };
    },

    methods: {
        handleFormError(error) {
            const data = error.response.data;
            if (data.non_field_errors) {
                this.error = data.non_field_errors[0];
                delete data.non_field_errors;
            }

            for (let key in data) {
                this.$set(this.formErrors, key, data[key][0]);
            }
        },

        resetFormErrors() {
            this.formErrors = {};
            this.error = null;
        }
    }
};
