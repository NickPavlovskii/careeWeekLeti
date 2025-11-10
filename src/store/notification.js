import { reactive } from "vue";

let idCounter = 0;

export const notificationStore = reactive({
    messages: [],

    add(type, text) {
        const id = idCounter++;
        this.messages.push({ id, type, text });
        console.log(type)
        setTimeout(() => {
            this.remove(id);
        }, 3000);
    },

    remove(id) {
        const index = this.messages.findIndex(msg => msg.id === id);
        if (index !== -1) this.messages.splice(index, 1);
    },
});
