import { Module } from 'vuex';
import { TestState } from '@/store/test/types';
import { RootState } from '../types';
import { getters } from './getters';
import { actions } from '@/store/test/actions';
import { mutations } from '@/store/test/mutations';

const state: TestState = {
    firstName: '',
    lastName: '',
    mobile: ''
};

const namespaced = true;
export const test: Module<TestState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
export default state;
