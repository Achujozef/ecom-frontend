import { configureStore } from '@reduxjs/toolkit';
import rootAction from '../actions/routeAction';

const store = configureStore({
  reducer: rootAction,
  
});

export default store;
