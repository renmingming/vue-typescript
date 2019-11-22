<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>@Model - 组件上实现双向绑定</h2>
        <button @click="onAlterFoo">父组件改变foo</button>
        <ModelSub v-model="foo"></ModelSub>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator';
import ModelSub from '@/components/ModelSub.vue';

@Component({
    name: 'About',
    components: { ModelSub }
})
export default class About extends Vue {
    private foo: boolean = true;

    private onAlterFoo () {
        this.foo = !this.foo;
    }
}
</script>
