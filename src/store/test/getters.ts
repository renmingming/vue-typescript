import { GetterTree } from 'vuex';
import { TestState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<TestState, RootState> = {
    fullName (state): string {
        return `${ state.firstName } ${ state.lastName }`;
    }
};
