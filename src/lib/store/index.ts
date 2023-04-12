'use client'

import {configureStore} from '@reduxjs/toolkit';
import menuStateSlice from './menuStateSlice';

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    menuState: menuStateSlice,
  },
});

export default store;
