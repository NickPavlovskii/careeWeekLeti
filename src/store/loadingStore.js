import { reactive } from "vue";

export const loadingStore = reactive({
    isLoading: false,

    show() {
        this.isLoading = true;
    },

    hide() {
        this.isLoading = false;
    }
});
