import React, { ChangeEvent, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/store/store';
import { setIntroduction } from '@/store/features/adminCreatePost/inputPage/introductionReducer';
import { setIngredients } from '@/store/features/adminCreatePost/inputPage/ingredientsReducer';
import { setHowToMake } from '@/store/features/adminCreatePost/inputPage/howToMakeReducer';
import { setConclusion } from '@/store/features/adminCreatePost/inputPage/conclusionReducer';
import { setMainTitle } from '@/store/features/adminCreatePost/inputPage/mainTitleReducer';
import { setMainDescription } from '@/store/features/adminCreatePost/inputPage/mainDescription';

const Food = () => {

  const dispatch = useDispatch<AppDispatch>();
  const cookies = new Cookies();

  const [ingredinetsInput, setIngredientsInput] = useState('');
  const introduction = useAppSelector((state) => state.adminPostInputIntroductionReducer.introduction);
  const ingredientsArr = useAppSelector((state) => state.adminPostInputIngredientsReducer.ingredients);
  const howToMake = useAppSelector((state) => state.adminPostInputHowToMakeReducer.howtomake);
  const conclusion = useAppSelector((state) => state.adminPostInputConclusionReducer.conclusion);
  const mainTitle = useAppSelector((state) => state.adminPostInputMainTitleReducer.maintitle);
  const mainDescription = useAppSelector((state) => state.adminPostInputMainDescriptionReducer.maindescription);

  const handleMainTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMainTitle(e.target.value));
    cookies.set('setMainTitleAdminCreatinPost', e.target.value, { path: '/' });
  }

  const handleMainDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMainDescription(e.target.value));
    cookies.set('setMainDescriptionAdminCreatinPost', e.target.value, { path: '/' });
  }

  const handleIntroduction = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setIntroduction(e.target.value));
    cookies.set('setIntroductionAdminCreatinPost', e.target.value, { path: '/' });
  }

  const handleIngredients = (e: ChangeEvent<HTMLInputElement>) => {
    setIngredientsInput(e.target.value);
  }

  const handleAddIngredient = () => {
    dispatch(setIngredients([...ingredientsArr, ingredinetsInput]))
    cookies.set('setIngredientsAdminCreatingPost', [...ingredientsArr, ingredinetsInput], { path: '/' });
    setIngredientsInput('');
  }

  const handleRemoveKeyword = (ingredient: string) => {
    let filtered = ingredientsArr.filter((ingr) => ingr !== ingredient);
    dispatch(setIngredients(filtered));
    cookies.set('setIngredientsAdminCreatingPost', filtered, { path: '/' });
  }

  const handleHowToMake = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setHowToMake(e.target.value));
    cookies.set('setHowToMakeAdminCreatinPost', e.target.value, { path: '/' });
  }

  const handleConclusion = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setConclusion(e.target.value));
    cookies.set('setConclusionAdminCreatinPost', e.target.value, { path: '/' });
  }

  useEffect(() => {
    cookies.get('setIntroductionAdminCreatinPost') && dispatch(setIntroduction(cookies.get('setIntroductionAdminCreatinPost')));
    cookies.get('setIngredientsAdminCreatingPost') && dispatch(setIngredients(cookies.get('setIngredientsAdminCreatingPost')));
    cookies.get('setHowToMakeAdminCreatinPost') && dispatch(setHowToMake(cookies.get('setHowToMakeAdminCreatinPost')));
    cookies.get('setConclusionAdminCreatinPost') && dispatch(setConclusion(cookies.get('setConclusionAdminCreatinPost')));
    cookies.get('setMainTitleAdminCreatinPost') && dispatch(setMainTitle(cookies.get('setMainTitleAdminCreatinPost')));
    cookies.get('setMainDescriptionAdminCreatinPost') && dispatch(setMainDescription(cookies.get('setMainDescriptionAdminCreatinPost')));
  }, []);

  return (
    <div className="w-full min-h-[700px] flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col">
        <label className="text-xl text-gray-400 py-2" htmlFor="">Main Title</label>
        <input value={mainTitle} onChange={(e) => {handleMainTitle(e)}} className="w-[700px] p-4 outline-none text-lg rounded-lg border-2" placeholder="Pizza" type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-xl text-gray-400 py-2" htmlFor="">Description</label>
        <input value={mainDescription} onChange={(e) => {handleMainDescription(e)}} className="w-[700px] p-4 outline-none text-lg rounded-lg border-2" placeholder="Tasty pizza..." type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-xl text-gray-400 py-2" htmlFor="">Introduction</label>
        <input value={introduction} onChange={(e) => {handleIntroduction(e)}} className="w-[700px] p-4 outline-none text-lg rounded-lg border-2" placeholder="Once upon a time..." type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-xl text-gray-400 py-2" htmlFor="">Ingredients</label>
        <div className="flex">
          <input value={ingredinetsInput} onChange={(e) => {handleIngredients(e)}} className="w-[650px] p-4 outline-none text-lg rounded-l-lg border-l-2 border-t-2 border-b-2" placeholder="1 onion, 2 tomatoes..." type="text" />
          <div onClick={handleAddIngredient} className="w-[50px] cursor-pointer bg-white border-t-2 border-b-2 border-r-2 rounded-r-lg flex justify-center items-center">
            <AddIcon className="text-[#9CDAF3] bg-[#D9F1FB] rounded-full" />
          </div>
        </div>
        <div className="w-[700px] h-[350px] content-start border-2 rounded-lg mt-5 bg-white p-3 flex gap-3 flex-wrap overflow-y-scroll">
          {ingredientsArr.map((ingredient, index) => (
            <span key={index} className="text-sm bg-[#D7F1FB] h-fit py-1 px-2 w-fit flex justify-center items-center gap-2 rounded-xl">
              {ingredient}
              <CloseIcon onClick={() => {handleRemoveKeyword(ingredient)}} className="text-sm bg-white rounded-full cursor-pointer" />
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xl text-gray-400 py-2" htmlFor="">How to make</label>
        <textarea value={howToMake} onChange={(e) => {handleHowToMake(e)}} className="w-[700px] p-4 outline-none text-lg rounded-lg border-2" placeholder="How to make pizza? Kinda ez!..." name="" id="" cols={30} rows={10}></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-xl text-gray-400 py-2" htmlFor="">Conclusion</label>
        <input value={conclusion} onChange={(e) => {handleConclusion(e)}} className="w-[700px] p-4 outline-none text-lg rounded-lg border-2" placeholder="You've done a great job!..." type="text" />
      </div>
    </div>
  )
}

export default Food