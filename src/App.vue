<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view v-if="isRouterAlive"/>
    </div>
</template>

<script lang="ts">
import { Vue, Provide, Component } from 'vue-property-decorator';

@Component({
    name: 'App'
})
export default class App extends Vue {
    private isRouterAlive: boolean = true;
    @Provide() reload:Function = this.vreload;

    vreload () {
        this.isRouterAlive = false;
        this.$nextTick(() => {
            this.isRouterAlive = true;
        });
    }
}
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
