"use client";

import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import CheckIcon from '@mui/icons-material/Check';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AdminPostsOne from '@/components/ui/adminPostsCreate/AdminPostsOne';
import AdminPostsTwo from '@/components/ui/adminPostsCreate/AdminPostsTwo';
import AdminPostsThree from '@/components/ui/adminPostsCreate/AdminPostsThree';
import AdminPostsFour from '@/components/ui/adminPostsCreate/AdminPostsFour';
import AdminPostsFive from '@/components/ui/adminPostsCreate/AdminPostsFive';

import { adminCreatePostStatus } from '@/constants';
import { AppDispatch, useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';
import { setNode } from '@/store/features/adminCreatePost/nodeReducer';
import { setTheme } from '@/store/features/adminCreatePost/themeReducer';
import { setSeo } from '@/store/features/adminCreatePost/seoReducer';
import { setInput } from '@/store/features/adminCreatePost/inputReducer';
import { setCheck } from '@/store/features/adminCreatePost/checkReducer';
import { setStart } from '@/store/features/adminCreatePost/startReducer';
import { setTitle } from '@/store/features/adminCreatePost/seoPage/titleReducer';
import { setDescription } from '@/store/features/adminCreatePost/seoPage/descriptionReducer';
import { setKeywords } from '@/store/features/adminCreatePost/seoPage/keywordsReducer';
import { setIntroduction } from '@/store/features/adminCreatePost/inputPage/introductionReducer';
import { setIngredients } from '@/store/features/adminCreatePost/inputPage/ingredientsReducer';
import { setHowToMake } from '@/store/features/adminCreatePost/inputPage/howToMakeReducer';
import { setConclusion } from '@/store/features/adminCreatePost/inputPage/conclusionReducer';

const AdminCreatePost = () => {

  const dispatch = useDispatch<AppDispatch>();
  const cookies = new Cookies();

  const start = useAppSelector((state) => state.adminPostStartReducer.start);
  const activeNode = useAppSelector((state) => state.adminPostNodeReducer.node);
  const theme = useAppSelector((state) => state.adminPostThemeReducer.theme);
  const seo = useAppSelector((state) => state.adminPostSeoReducer.seo);
  const input = useAppSelector((state) => state.adminPostInputReducer.input);
  const check = useAppSelector((state) => state.adminPostCheckReducer.check);

  useEffect(() => {
    if (cookies.get('startCreatingPost')) {
      dispatch(setStart(true));
      dispatch(setNode(cookies.get('setNode') ? cookies.get('setNode') : activeNode));
      dispatch(setTheme(cookies.get('setTheme') ? cookies.get('setTheme') : theme));
      dispatch(setSeo(cookies.get('setSeo') ? cookies.get('setSeo') : seo));
      dispatch(setInput(cookies.get('setInput') ? cookies.get('setInput') : input));
      dispatch(setCheck(cookies.get('setCheck') ? cookies.get('setCheck') : check));
    }

  }, []);

  const setStartOptions = () => {
    dispatch(setStart(true));
    dispatch(setTheme("editing"));
    cookies.set('startCreatingPost', 'true', { path: '/' });
  }

  const handleNextBtn = () => {
    switch(activeNode) {
      case "type":
        dispatch(setTheme("editing"));
        dispatch(setNode("seo"));
        cookies.set('setTheme', "editing", { path: '/' });
        cookies.set('setNode', "seo", { path: '/' });
        break;
      case "seo":
        dispatch(setSeo("completed"));
        dispatch(setInput("editing"));
        dispatch(setNode("input"));
        cookies.set('setSeo', "completed", { path: '/' });
        cookies.set('setInput', "editing", { path: '/' });
        cookies.set('setNode', "input", { path: '/' });
        break;
      case "input":
        dispatch(setInput("completed"));
        dispatch(setCheck("editing"));
        dispatch(setNode("check"));
        cookies.set('setInput', "completed", { path: '/' });
        cookies.set('setCheck', "editing", { path: '/' });
        cookies.set('setNode', "check", { path: '/' });
        break;
      case "check":
        dispatch(setCheck("completed"));
        dispatch(setNode("confirm"));
        cookies.set('setCheck', "completed", { path: '/' });
        cookies.set('setNode', "confirm", { path: '/' });
        break;
      case "confirm":
        dispatch(setCheck("completed"));
        dispatch(setTheme("new"));
        dispatch(setSeo("new"));
        dispatch(setInput("new"));
        dispatch(setCheck("new"));
        dispatch(setNode("type"));
        dispatch(setStart(false));
        cookies.remove('startCreatingPost', { path: '/' });
        cookies.remove('setTheme', { path: '/' });
        cookies.remove('setSeo', { path: '/' });
        cookies.remove('setInput', { path: '/' });
        cookies.remove('setCheck', { path: '/' });
        cookies.remove('setNode', { path: '/' });
        break;
      default:
        dispatch(setNode("type"));
        cookies.set('setNode', "type", { path: '/' });
        break;
    }
  }

  const handlePrevBtn = () => {
    switch(activeNode) {
      case "type":
        dispatch(setNode("type"));
        cookies.set('setNode', "type", { path: '/' });
        break;
      case "seo":
        dispatch(setSeo("editing"));
        dispatch(setTheme("editing"));
        dispatch(setNode("type"));
        cookies.set('setSeo', "editing", { path: '/' });
        cookies.set('setTheme', "editing", { path: '/' });
        cookies.set('setNode', "type", { path: '/' });
        break;
      case "input":
        dispatch(setSeo("editing"));
        dispatch(setInput("editing"));
        dispatch(setNode("seo"));
        cookies.set('setSeo', "editing", { path: '/' });
        cookies.set('setInput', "editing", { path: '/' });
        cookies.set('setNode', "seo", { path: '/' });
        break;
      case "check":
        dispatch(setInput("editing"));
        dispatch(setCheck("editing"));
        dispatch(setNode("input"));
        cookies.set('setInput', "editing", { path: '/' });
        cookies.set('setCheck', "editing", { path: '/' });
        cookies.set('setNode', "input", { path: '/' });
        break;
      case "confirm":
        dispatch(setCheck("editing"));
        dispatch(setNode("check"));
        cookies.set('setCheck', "editing", { path: '/' });
        cookies.set('setNode', "check", { path: '/' });
        break;
      default:
        dispatch(setNode("type"));
        cookies.set('setNode', "type", { path: '/' });
        break;
    }
  }

  const cancelEditingBtn = () => {
    dispatch(setStart(false));
    dispatch(setCheck("completed"));
    dispatch(setTheme("new"));
    dispatch(setSeo("new"));
    dispatch(setInput("new"));
    dispatch(setCheck("new"));
    dispatch(setNode("type"));
    dispatch(setTitle(''));
    dispatch(setDescription(''));
    dispatch(setKeywords([]));
    dispatch(setIntroduction(''));
    dispatch(setIngredients([]));
    dispatch(setHowToMake(''));
    dispatch(setConclusion(''));
    cookies.remove('startCreatingPost', { path: '/' });
    cookies.remove('setTheme', { path: '/' });
    cookies.remove('setSeo', { path: '/' });
    cookies.remove('setInput', { path: '/' });
    cookies.remove('setCheck', { path: '/' });
    cookies.remove('setNode', { path: '/' });
    cookies.remove('titleCreateingPost', { path: '/' });
    cookies.remove('descriptionCreateingPost', { path: '/' });
    cookies.remove('keyWordsArrayCreateingPost', { path: '/' });
    cookies.remove('setIntroductionAdminCreatinPost', { path: '/' })
    cookies.remove('setIngredientsAdminCreatingPost', { path: '/' })
    cookies.remove('setHowToMakeAdminCreatinPost', { path: '/' })
    cookies.remove('setConclusionAdminCreatinPost', { path: '/' })
  }

  return (
    <div className="flex items-center flex-row w-full h-full">
      {!start && (
        <div className="w-full h-full flex justify-center items-center">
          <div onClick={setStartOptions} className="p-6 cursor-pointer w-[300px] rounded-xl bg-[#91D8F4] flex justify-center items-center gap-3 text-white text-xl">
            Create post
            <AddBoxIcon className="mt-1" />
          </div>
        </div>
      )}
      {start && (
      <>
        <div className="w-[500px] h-[600px] flex-1 flex items-center ml-[100px] -mt-[100px]">
          <Timeline>
            {adminCreatePostStatus.map((timelineItem, index) => (
              <TimelineItem key={index} className={`flex justify-between gap-5 items-start ${index !== 0 && 'mt-5'}`}>
                <TimelineOppositeContent
                  color="text.secondary"
                >
                  <div className="w-[90px] h-[40px] capitalize text-sm text-[#CACDC9] font-semibold -mt-[5px] flex justify-center items-center">
                    {index === 0 && <span className={`${theme === 'new' ? 'text-[#CACDC9]' : theme === 'editing' ? 'text-[#fcc309]' : 'text-[#24DF3C]'}`}>{theme}</span>}
                    {index === 1 && <span className={`${seo === 'new' ? 'text-[#CACDC9]' : seo === 'editing' ? 'text-[#fcc309]' : 'text-[#24DF3C]'}`}>{seo}</span>}
                    {index === 2 && <span className={`${input === 'new' ? 'text-[#CACDC9]' : input === 'editing' ? 'text-[#fcc309]' : 'text-[#24DF3C]'}`}>{input}</span>}
                    {index === 3 && <span className={`${check === 'new' ? 'text-[#CACDC9]' : check === 'editing' ? 'text-[#fcc309]' : 'text-[#24DF3C]'}`}>{check}</span>}
                  </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {index === 0 && (
                    <>
                      <div className={`mb-5 flex justify-center items-center text-white ${theme === 'new' ? 'new_post-timelineitem' : theme === 'editing' ? 'editing_post-timelineitem' : 'completed_post-timelineitem'}`}>
                        {theme === 'new' ? <AddIcon /> : theme === 'editing' ? <AutoFixHighIcon /> : <CheckIcon />}
                      </div>
                      <TimelineConnector className={`h-[80px] ${theme === 'new' ? 'new_timeline-stick' : theme === 'editing' ? 'editing_timeline-stick' : 'completed_timeline-stick'}`} />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className={`mb-5 flex justify-center items-center text-white ${seo === 'new' ? 'new_post-timelineitem' : seo === 'editing' ? 'editing_post-timelineitem': 'completed_post-timelineitem'}`}>
                        {seo === 'new' ? <AddIcon /> : seo === 'editing' ? <AutoFixHighIcon /> : <CheckIcon />}
                      </div>
                      <TimelineConnector className={`h-[80px] ${seo === 'new' ? 'new_timeline-stick' : seo === 'editing' ? 'editing_timeline-stick' : 'completed_timeline-stick'}`} />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className={`mb-5 flex justify-center items-center text-white ${input === 'new' ? 'new_post-timelineitem' : input === 'editing' ? 'editing_post-timelineitem': 'completed_post-timelineitem'}`}>
                        {input === 'new' ? <AddIcon /> : input === 'editing' ? <AutoFixHighIcon /> : <CheckIcon />}
                      </div>
                      <TimelineConnector className={`h-[80px] ${input === 'new' ? 'new_timeline-stick' : input === 'editing' ? 'editing_timeline-stick' : 'completed_timeline-stick'}`} />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className={`mb-5 flex justify-center items-center text-white ${check === 'new' ? 'new_post-timelineitem' : check === 'editing' ? 'editing_post-timelineitem': 'completed_post-timelineitem'}`}>
                        {check === 'new' ? <AddIcon /> : check === 'editing' ? <AutoFixHighIcon /> : <CheckIcon />}
                      </div>
                    </>
                  )}
                </TimelineSeparator>
                <TimelineContent className="mt-[2px]">
                  <div className="w-[150px] h-[40px] text-lg text-[#CACDC9] font-semibold -mt-[5px] flex justify-center items-center">
                    {timelineItem.theme}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        <div className="w-[500px] flex-[6] ml-[120px] relative">
          {activeNode === "type" && <AdminPostsOne handleClick={() => {handleNextBtn()}} />}
          {activeNode === "seo" && <AdminPostsTwo />}
          {activeNode === "input" && <AdminPostsThree />}
          {activeNode === "check" && <AdminPostsFour />}
          {activeNode === "confirm" && <AdminPostsFive />}
          { activeNode !== "type" && <div onClick={() => {handlePrevBtn()}} className="absolute top-[300px] left-[40px] p-5 flex justify-center items-center border bg-[#91D8F3] rounded-full text-white cursor-pointer">
            <ArrowBackIcon />
          </div> }
          { activeNode !== "type" && <div onClick={() => {handleNextBtn()}} className="absolute top-[300px] right-[50px] p-5 flex justify-center items-center border bg-[#91D8F3] rounded-full text-white cursor-pointer">
            <ArrowForwardIcon />
          </div> }
        </div>
        <div onClick={cancelEditingBtn} className="absolute left-20 bottom-10 font-semibold text-lg cursor-pointer w-[200px] flex justify-center items-center h-[50px] bg-[#ED4145] text-white rounded-xl">Cancel creating post</div>
      </>
      )}
    </div>
  )
}

export default AdminCreatePost