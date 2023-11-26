import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './RtkSlices/authSlice';
import { curriculumSlice } from './RtkSlices/curriculumSlice';
import { coursesSlice } from './RtkSlices/coursesSlice';
import { adminSlice } from './RtkSlices/adminSlice';
import { achievementsSlice } from './RtkSlices/achievementSlice';
import { articlesSlice } from './RtkSlices/articles';
import { quirySlice } from './RtkSlices/quirySlice';
import { employ } from './RtkSlices/employSlice';
import { studentSlice } from './RtkSlices/studentSlice';
import { workShopSlice } from './RtkSlices/workShopSlice';

const store = configureStore({
    reducer:{
        [authSlice.reducerPath]:authSlice.reducer,
        [curriculumSlice.reducerPath]:curriculumSlice.reducer,
        [adminSlice.reducerPath]:adminSlice.reducer,
        [coursesSlice.reducerPath]:coursesSlice.reducer,
        [ articlesSlice.reducerPath ]: articlesSlice.reducer,
        [ achievementsSlice.reducerPath ]: achievementsSlice.reducer,
        [ quirySlice.reducerPath ]: quirySlice.reducer,
        [ employ.reducerPath ]: employ.reducer,
        [ studentSlice.reducerPath ]: studentSlice.reducer,
        [ workShopSlice.reducerPath ]: workShopSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(
        authSlice.middleware,
        curriculumSlice.middleware,
        coursesSlice.middleware,
        studentSlice.middleware,
        adminSlice.middleware,
        articlesSlice.middleware,
        achievementsSlice.middleware,
        adminSlice.middleware,
        workShopSlice.middleware,
        quirySlice.middleware,
        employ.middleware,
  ),
})

export default store