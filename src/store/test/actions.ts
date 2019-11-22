import { TestState } from '@/store/test/types';
import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';

export const actions: ActionTree<TestState, RootState> = {
    fetchData ({commit}): void {
        const testInfo: TestState = {
            firstName: 'Hello',
            lastName: 'World',
            mobile: '124523435'
        };
        commit('saveTestInfo', testInfo);
    }
};
