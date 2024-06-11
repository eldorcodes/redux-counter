import { configureStore } from '@reduxjs/toolkit';
import Counter from './Counter';

export const Store = configureStore({
    reducer:{
        count:Counter
    }
})

Store.subscribe(() => console.log(`Store state`,Store.getState()));