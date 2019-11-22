<template>
    <div class="test">
        <h3 @click="addCount">Test</h3>
        <p>{{ count }}</p>
        <p>firstName: {{ firstName }}</p>
        <p>fullName: {{ fullName }}</p>
        <p>mobile: {{ mobile }}</p>
        <p @click="reload">刷新（provide-inject）</p>
    </div>
</template>

<script lang="ts">
// import { namespace } from 'vuex-class';
import { Action, Mutation, Getter, State } from 'vuex-class';
import { Component, Vue, Emit, Inject } from 'vue-property-decorator';

// const testModule = namespace('user');
const namespace = 'test';

@Component({
    name: 'test'
})
export default class Test extends Vue {
    // @testModule.Action('fetchData')
    // public fetchData!: Function;
    // @testModule.Mutaton('changeMobile') public changeMobile!: Function;
    // @testModule.Getter('fullName') public fullName!: string;
    // @testModule.State('firstName') public firstName!: string;
    // @testModule.State('mobile') public mobile!: string;
    @Action('test/fetchData') public fetchData!: Function;
    @Mutation('test/changeMobile') public changeMobile!: Function;
    @Getter('test/fullName') public fullName!: string;
    @State('firstName', { namespace }) public firstName!: string;
    @State('mobile', { namespace }) public mobile!: string;
    @Inject() reload!: Function;

    public created () {
        this.fetchData();
        setTimeout(() => {
            this.changeMobile('123456');
        }, 4000);
    }

    count: number = 0;
    numArr: number[] = [1, 2, 3, 4];

    getNum (num: number) {
        return new Promise(resolve => setTimeout(() => {
            resolve(num);
        }, 500));
    }

    async forLoop () {
        console.log('start');
        for (let i = 0; i < this.numArr.length; i++) {
            const num = await this.getNum(this.numArr[i]);
            console.log(num);
        }
        console.log('end');
        // this.reload();  刷新
    }

    foreachLoop () {
        console.log('start');
        this.numArr.forEach(async (item: number) => {
            const num = await this.getNum(item);
            console.log(num);
        });
        console.log('end');
    }

    @Emit()
    addToCount (n: number) {
        console.log(n);
        this.count += 1;
    }

    mounted () {
        // this.forLoop();
        this.forLoop();
        this.identity('renmingming');
    }

    addCount () {
        this.addToCount(this.count);
    }

    identity<T> (arg: T): T {
        console.log(typeof arg);
        return arg;
    }

    init () {
        this.count = 1;
    }
}
</script>

<style scoped>

</style>
