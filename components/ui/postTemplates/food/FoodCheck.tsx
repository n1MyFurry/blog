"use client";

import React, { ChangeEvent, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/store/store';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { myVar } from '@/styles/fonts/fonts';
import img1 from "@/public/images/bg.jpg";
import img2 from "@/public/images/lemon.jpg";
import img3 from "@/public/images/apple.jpg";
import logo from "@/public/logo.svg";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ImageIcon from '@mui/icons-material/Image';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';

import ScrollDownMouse from '../../ScrollDownMouse';
import ReciepteCards from '../../ReciepteCards';

import { setStart } from '@/store/features/adminCreatePost/startReducer';
import { setCheck } from '@/store/features/adminCreatePost/checkReducer';
import { setTitle } from '@/store/features/adminCreatePost/seoPage/titleReducer';
import { setDescription } from '@/store/features/adminCreatePost/seoPage/descriptionReducer';
import { setKeywords } from '@/store/features/adminCreatePost/seoPage/keywordsReducer';
import { setIntroduction } from '@/store/features/adminCreatePost/inputPage/introductionReducer';
import { setIngredients } from '@/store/features/adminCreatePost/inputPage/ingredientsReducer';
import { setHowToMake } from '@/store/features/adminCreatePost/inputPage/howToMakeReducer';
import { setConclusion } from '@/store/features/adminCreatePost/inputPage/conclusionReducer';
import { setNode } from '@/store/features/adminCreatePost/nodeReducer';
import { setTheme } from '@/store/features/adminCreatePost/themeReducer';
import { setSeo } from '@/store/features/adminCreatePost/seoReducer';
import { setInput } from '@/store/features/adminCreatePost/inputReducer';
import { setMainTitle } from '@/store/features/adminCreatePost/inputPage/mainTitleReducer';
import { setMainDescription } from '@/store/features/adminCreatePost/inputPage/mainDescription';
import { ingredTest } from '@/constants';
import SwiperButtons from '../../SwiperButtons';

const FoodCheck = () => {

  const cookies = new Cookies();
  const dispatch = useDispatch<AppDispatch>();
  const swiper = useSwiper();

  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');

  const mainTitle = useAppSelector((state) => state.adminPostInputMainTitleReducer.maintitle);
  const mainDescription = useAppSelector((state) => state.adminPostInputMainDescriptionReducer.maindescription);
  const introduction = useAppSelector((state) => state.adminPostInputIntroductionReducer.introduction);
  const ingredientsArr = useAppSelector((state) => state.adminPostInputIngredientsReducer.ingredients);
  const howToMake = useAppSelector((state) => state.adminPostInputHowToMakeReducer.howtomake);
  const conclusion = useAppSelector((state) => state.adminPostInputConclusionReducer.conclusion);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const dataType = e.currentTarget.getAttribute('data-img');

    const file = e.target.files?.[0];

    if(!file) return;

    if(!file.type.includes('image')) {
        return alert('Please upload an image file');
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        const result = reader.result as string;

        switch(dataType) {
          case "1":
            setImg1(result);
            break;
          case "2":
            setImg2(result);
            break;
          case "3":
            setImg3(result);
            break;
          default:
            break;
        }
    }
  }

  const getBack = () => {
    dispatch(setNode("input"));
    dispatch(setInput("editing"));
    cookies.set('setInput', 'editing', { path: '/' });
    cookies.set('setNode', 'input', { path: '/' });
  }

  const removeCreating = () => {
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

  useEffect(() => {
    cookies.get('setMainTitleAdminCreatinPost') && dispatch(setMainTitle(cookies.get('setMainTitleAdminCreatinPost')));
    cookies.get('setMainDescriptionAdminCreatinPost') && dispatch(setMainDescription(cookies.get('setMainDescriptionAdminCreatinPost')));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[999] bg-white overflow-hidden ctnx">
      <div className="floating-menu_addpost border-2 border-[#333] overflow-hidden py-2">
          <div className="flex flex-col items-center h-[80%] gap-3 pb-2">
            <div className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <ImageIcon />
            </div>
            <div className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <FormatColorTextIcon />
            </div>
            <div className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <ImageIcon />
            </div>
            <div className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <FormatColorTextIcon />
            </div>
            <div className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <ImageIcon />
            </div>
            <div className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <FormatColorTextIcon />
            </div>
          </div>
          <div className="h-[20%] w-ful flex flex-col items-center gap-3">
            <span className="h-[1px] w-full bg-[#333]"></span>
            <div onClick={getBack} className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowBackIcon />
            </div>
            <div onClick={removeCreating} className="bg-dark-blue p-2 rounded-full flex justify-center items-center cursor-pointer">
              <HighlightOffIcon />
            </div>
          </div>
        </div>
      <div className="mContainer">

        <section className="parrlx relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
          <div className="absolute top-0 left-0 text-white">
            <div className={`mt-32 ml-32 text-[70px] max-w-6xl`}>{mainTitle}</div>
            <div className="flex flex-row gap-4 ml-32 mt-10 items-center">
              <div className={`${myVar.className} text-4xl text-primary-blue`}>
                Versatility
              </div>
              <div className="h-full flex justify-center items-center">
                <span className="w-[5px] h-[5px] bg-slate-100 rounded-full"></span>
              </div>
              <span className="flex items-center gap-2 text-lg">
                <EventNoteIcon />
                August 5, 2023
              </span>
              <div className="h-full flex justify-center items-center">
                <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
              </div>
              <span className="px-4 py-3 text-xl bg-[#F7637F] text-white">DESSERTS</span>
              <span className="px-4 py-3 text-xl bg-[#6DB6F5] text-white">FRAPPE</span>
              <span className="px-4 py-3 text-xl bg-[#5BD1E1] text-white">SNACK</span>
            </div>
            <div className="max-w-xl ml-32 mt-10 text-lg text-left">{mainDescription}</div>
            <ul className="ml-32 mt-32 flex flex-col gap-5">
              <li className="main-food-list text-2xl tracking-wide ml-[35px] flex items-center gap-2">
                <AccessTimeIcon className="h-full mt-1" />
                15 min
              </li>
              <li className="main-food-list text-2xl tracking-wide ml-[35px]">Ingredients serves 6</li>
              <li className="main-food-list text-2xl tracking-wide ml-[35px]">It's kinda tasty!</li>
            </ul>
            <div className="absolute z-[999999] top-[90%] left-[71%] flex flex-col items-center w-[100px] gap-2">
              <ScrollDownMouse />
              Scroll down
            </div>
          </div>
          {img1.length > 1 ? (
            <div className="bgnd bg-1 absolute top-0 left-0" style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ) : (
            <div className="w-full absolute top-0 left-0 h-full flex justify-center items-center text-[100px] text-[#333]">Choose First Image</div>
          )}
          <input type="file" data-img="1" accept="image/*" onChange={handleFile} className="w-full h-full opacity-0" />
        </section>

        <section className="relative normall bg-[#D1E1F1]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[1100px] h-[600px] flex flex-row">
              <div className="w-1/2 h-full flex flex-col justify-center items-start gap-6 pr-10">
                <h3 className="text-[20px] text-[#6F8AA6]">Ingredients</h3>
                <h1 className="text-[70px] text-[#333]">Ingredients for 1 serve</h1>
                <div className="flex gap-3">
                  <span className="px-4 py-3 text-xl bg-[#F7637F] text-white">DESSERTS</span>
                  <span className="px-4 py-3 text-xl bg-[#6DB6F5] text-white">FRAPPE</span>
                  <span className="px-4 py-3 text-xl bg-[#5BD1E1] text-white">SNACK</span>
                </div>
              </div>
              <div className="w-1/2 h-[90%] bg-[#C9CBFF] rounded-[40px] px-7 flex justify-center items-center">
                <Swiper pagination={false} loop={false} spaceBetween={-90} autoplay={false} modules={[Pagination, Autoplay, Navigation]} className="w-full h-[250px] bg-[#010000] rounded-[30px] flex justify-center items-center relative items-list-shadow">
                  <SwiperButtons />
                  {ingredTest.map((ingred, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[80%] h-[70%] rounded-[100px] flex justify-center items-start flex-col px-20 gap-4" style={{background: `${ingred.color}`}}>
                          <span className="text-[30px] max-w-lg leading-8 text-white">{ingred.name}</span>
                          <span className="bg-[#010000] p-3 text-white rounded-full">{ingred.amount}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="parrlx relative" id="test1">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        <div className="absolute left-0 top-0 w-[50%] h-full">
          
        </div>
        <div className="absolute right-0 top-0 w-[50%] h-full z-20 flex flex-col justify-start items-end p-20 text-xl text-white">
          <h1 className="text-[80px] h-[200px] leading-[100px] w-[900px] text-right">Secret Ingredient French Toast Recipe</h1>
          <ul className="flex flex-row justify-center items-center gap-5 w-fit h-[60px] mt-20">
            <li className="text-[#F7637F] text-[30px]">Calories, 302kcal</li>
            <li className="bg-white rounded-full w-[5px] h-[5px] mt-1"></li>
            <li className="text-[#75B7F4]">Carbohydrates, 30g </li>
            <li className="bg-white rounded-full w-[5px] h-[5px] mt-1"></li>
            <li className="text-[#67D2E1]">Protein, 13g</li>
            <li className="bg-white rounded-full w-[5px] h-[5px] mt-1"></li>
            <li className="text-[#AF4CFB]">Fat, 14g</li>
          </ul>
          <p className="mt-32 text-md text-right max-w-[800px]">Surprisingly, French toast is not from France. Historians say it is originally from a Roman recipe. It is thought that the Roman recipe soaked the bread in milk and then fried it . In France, they call French toast Pain Perdu. It means lost bread. They take stale bread that is dipped and then cooked. Since it is not known to be French and no one really knows how itgot its name, I think we can all say we are just happy to have a good French toast recipe.</p>
        </div>
          {img2.length > 1 ? (
            <div className="bgnd bg-1 absolute top-0 left-0" style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ) : (
            <div className="w-full absolute top-0 left-0 h-full flex justify-center items-center text-[100px] text-[#333]">Choose Second Image</div>
          )}
          <input type="file" data-img="2" accept="image/*" onChange={handleFile} className="w-full h-full opacity-0" />
        </section>

        <section className="normall bg-[#0E0E0C] relative overflow-hidden">
          <ReciepteCards />
        </section>

        <section className="parrlx relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          {img3.length > 1 ? (
            <div className="bgnd bg-1 absolute top-0 left-0" style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ) : (
            <div className="w-full absolute top-0 left-0 h-full flex justify-center items-center text-[100px] text-[#333]">Choose Third Image</div>
          )}
          <input type="file" data-img="3" accept="image/*" onChange={handleFile} className="w-full h-full opacity-0" />
        </section>

        <section className="normall">
          <h1 className="flex justify-center items-center w-full h-full ">GHJGJKGHJK</h1>
        </section>

      </div>
    </div>
  )
}

export default FoodCheck