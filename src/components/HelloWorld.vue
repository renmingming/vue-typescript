<template>
    <div class="hello">
        <input v-model="msg">
        <p>prop: {{ propMessage }}</p>
        <p>msg: {{ msg }}</p>
        <p>helloMsg: {{ helloMsg }}</p>
        <p id="msg">computed msg: {{ computedMsg }}</p>
        <p>test add: {{ countNum }}</p>
        <my-test ref="myTest" v-on:add-to-count="addCount"></my-test>
        <button @click="greet">Greet</button>
        <div v-for="(item, key) in selectData" :key="key">
            <span :class="item.status ? 'active' : '' " @click="changeColor(key)">{{ item.nametext }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import Test from '@/components/Test.vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

interface Data {
    [key: string] : {
        name: string,
        nametext: string,
        status: boolean
    }
}

@Component({
    name: 'HelloWorld',
    components: {
        'my-test': Test
    }
})
export default class HelloWorld extends Vue {
    @Prop()
    private propMessage!: string;
    private msg: number = 123;
    private helloMsg: string = 'Hello, ' + this.propMessage;
    private countNum: number = 0;
    private selectData: Data = {
        'big': {
            name: 'big',
            nametext: '大',
            status: true
        },
        'middle': {
            name: 'middle',
            nametext: '中',
            status: true
        },
        'small': {
            name: 'small',
            nametext: '小',
            status: false
        }
    };

    @Watch('msg')
    onMsgchanged (val: string, oldVal: string) {
        if (val === 'renmingming') {
            alert(this.msg);
        }
    }

    mounted () {
        (this.$refs.myTest as any).init();
        (document.getElementById('msg') as HTMLElement).style.color = 'red';
    }

    get computedMsg (): string {
        return 'computed ' + this.msg;
    }

    greet (): void {
        alert('greeting: ' + this.msg);
    }

    addCount (n: number) {
        this.countNum += n;
    }

    changeColor (key: string) {
        // 当前点击的数据
        let selectData = this.selectData;
        let obj = selectData[key];
        for (let item in selectData) {
            if (key === item) {
                // 如果是当前的key则不改变状态
                continue;
            }
            // 点击关闭除当前以外的状态 ，相当于关闭其他的拉下
            selectData[item].status = false;
        }
        // 相当于点击当前下拉，如过下拉是关闭的则会打开，打开的则会关闭
        obj.status = !obj.status;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .active {
        color: red;
    }
</style>
