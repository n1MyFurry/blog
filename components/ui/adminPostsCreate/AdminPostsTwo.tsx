"use client";

import React, { ChangeEvent, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/store/store';
import { setTitle } from '@/store/features/adminCreatePost/seoPage/titleReducer';
import { setDescription } from '@/store/features/adminCreatePost/seoPage/descriptionReducer';
import { setKeywords } from '@/store/features/adminCreatePost/seoPage/keywordsReducer';

const AdminPostsTwo = () => {

  const dispatch = useDispatch<AppDispatch>();
  const cookies = new Cookies();
  
  const title = useAppSelector((state) => state.adminPostTitleReducer.title);
  const description = useAppSelector((state) => state.adminPostDescriptionReducer.description);
  const keywordsArray = useAppSelector((state) => state.adminPostKeywordsReducer.keywords);
  const start = useAppSelector((state) => state.adminPostStartReducer.start);
  const [keyword, setKeyword] = useState('');

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
    cookies.set('titleCreateingPost', e.target.value, { path: '/' });
  }

  const handleDesc = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
    cookies.set('descriptionCreateingPost', e.target.value, { path: '/' });
  }

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const handleAddKeyword = () => {
    dispatch(setKeywords([...keywordsArray, keyword]));
    cookies.set('keyWordsArrayCreateingPost', [...keywordsArray, keyword], { path: '/' });
    setKeyword('');
  }

  const handleRemoveKeyword = (elem: String) => {
    let filtered = keywordsArray.filter(keyword => keyword != elem)
    dispatch(setKeywords(filtered));
    cookies.set('keyWordsArrayCreateingPost', filtered, { path: '/' });
    
  }

  useEffect(() => {
    cookies.get('titleCreateingPost') && dispatch(setTitle(cookies.get('titleCreateingPost')));
    cookies.get('descriptionCreateingPost') && dispatch(setDescription(cookies.get('descriptionCreateingPost')));
    cookies.get('keyWordsArrayCreateingPost') && dispatch(setKeywords(cookies.get('keyWordsArrayCreateingPost')));
  }, [start])

  return (
    <div className="h-[700px] w-[1000px] flex flex-col gap-[10%] items-center">
        <div className="flex flex-col">
          <label className="py-3 text-[20px]" htmlFor="">Set Title(top of the page)</label>
          <input value={title} onChange={(e) => {handleTitle(e)}} className="w-[350px] p-4 rounded-xl outline-none tracking-wide border" id="title" placeholder="Title" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="py-3 text-[20px]" htmlFor="">Set Description(search desc)</label>
          <input value={description} onChange={(e) => {handleDesc(e)}} className="w-[350px] p-4 rounded-xl outline-none tracking-wide border" placeholder="Description" id="desc" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="py-3 text-[20px]" htmlFor="">Set keywords</label>
          <div className="flex flex-row">
            <input value={keyword} onChange={(e) => {handleKeyword(e)}} placeholder="Keywords" className="w-[300px] p-4 rounded-l-xl outline-none tracking-wide border-l border-t border-b" type="text" />
            <div onClick={() => {handleAddKeyword()}} className="w-[50px] bg-white border-t border-r border-b rounded-r-xl flex justify-center items-center cursor-pointer text-[#97D9F3] hover:text-[]">
              <AddIcon className="bg-[#D7F1FB] rounded-full" />
            </div>
          </div>
          <div className="p-3 bg-white mt-7 flex flex-wrap w-[350px] gap-3 overflow-y-scroll h-[100px] border">
            {keywordsArray.map((keyword, index) => (
              <span key={index} className="text-sm bg-[#D7F1FB] h-fit py-1 px-2 w-fit flex justify-center items-center gap-2 rounded-xl">
                {keyword}
                <CloseIcon onClick={() => {handleRemoveKeyword(keyword)}} className="text-sm bg-white rounded-full cursor-pointer" />
              </span>
            ))}
          </div>
        </div>
    </div>
  )
}

export default AdminPostsTwo