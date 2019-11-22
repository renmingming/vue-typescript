<template>
    <div>
        <input type="checkbox" :checked="checked" v-on:change="$emit('balabala', $event.target.checked)">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Prop } from 'vue-property-decorator';

@Component
export default class ModelSub extends Vue {
    @Model('balabala', { type: Boolean }) private checked!: boolean;
}
</script>

<style scoped>

</style>
