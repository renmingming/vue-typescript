import { MutationTree } from 'vuex';
import { TestState } from './types';

export const mutations: MutationTree<TestState> = {
    changeMobile (state, mobile: string) {
        state.mobile = mobile;
    },
    saveTestInfo (state, testInfo) {
        state = Object.assign(state, testInfo);
    }
};
