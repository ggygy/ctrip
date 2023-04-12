import {createSlice} from '@reduxjs/toolkit';

export interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {isOpen: true};

// 创建一个 Slice
export const MenuStateSlice = createSlice({
  name: 'MenuState',

  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    // 添加新的shopItem
    setIsopen: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

// 导出的方法
export const {setIsopen} = MenuStateSlice.actions;

// 默认导出
export default MenuStateSlice.reducer;
