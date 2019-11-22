import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { test } from './test/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        test
    }
};

export default new Vuex.Store<RootState>(store);
