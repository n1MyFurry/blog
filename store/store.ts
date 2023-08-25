import { configureStore } from '@reduxjs/toolkit';
import adminPostTypeReducer from '@/store/features/adminCreatePost/postTypeReducer';
import adminPostNodeReducer from '@/store/features/adminCreatePost/nodeReducer';
import adminPostThemeReducer from '@/store/features/adminCreatePost/themeReducer';
import adminPostSeoReducer from '@/store/features/adminCreatePost/seoReducer';
import adminPostInputReducer from '@/store/features/adminCreatePost/inputReducer';
import adminPostCheckReducer from '@/store/features/adminCreatePost/checkReducer';
import adminPostTitleReducer from './features/adminCreatePost/seoPage/titleReducer';
import adminPostDescriptionReducer from './features/adminCreatePost/seoPage/descriptionReducer';
import adminPostKeywordsReducer from './features/adminCreatePost/seoPage/keywordsReducer';
import adminPostInputIntroductionReducer from './features/adminCreatePost/inputPage/introductionReducer';
import adminPostInputIngredientsReducer from './features/adminCreatePost/inputPage/ingredientsReducer';
import adminPostInputHowToMakeReducer from './features/adminCreatePost/inputPage/howToMakeReducer';
import adminPostInputConclusionReducer from './features/adminCreatePost/inputPage/conclusionReducer';
import adminPostStartReducer from './features/adminCreatePost/startReducer';
import adminPostInputMainTitleReducer from './features/adminCreatePost/inputPage/mainTitleReducer';
import adminPostInputMainDescriptionReducer from './features/adminCreatePost/inputPage/mainDescription';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        adminPostTypeReducer,
        adminPostNodeReducer,
        adminPostThemeReducer,
        adminPostSeoReducer,
        adminPostInputReducer,
        adminPostCheckReducer,
        adminPostTitleReducer,
        adminPostDescriptionReducer,
        adminPostKeywordsReducer,
        adminPostInputIntroductionReducer,
        adminPostInputIngredientsReducer,
        adminPostInputHowToMakeReducer,
        adminPostInputConclusionReducer,
        adminPostStartReducer,
        adminPostInputMainTitleReducer,
        adminPostInputMainDescriptionReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;