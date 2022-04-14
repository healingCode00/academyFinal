import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'

//Page
//지훈 작업 page
// import Home from "./pages/Home"
import BoardList from "./pages/board/BoardList"
import BoardListSearch from "./pages/board/BoardListSearch"
import BoardInsert from "./pages/board/BoardInsert"
import BoardDetail from './pages/board/BoardDetail'
import BoardUpdate from './pages/board/BoardUpdate'
import BoardUpdateDetail from './pages/board/BoardUpdateDetail';
import Certification from './pages/join/Certification'
import TermsConditions from './pages/join/TermsConditions'
import PersonalInfo from './pages/join/PersonalInfo'

//로한님 작업 page
import Biz_info from "./pages/join_business/Biz_info";
import Home from "./pages/Home";
import JoinCompl from "./pages/join_business/JoinCompl";
import SignIn from "./pages/signin/SignIn";
import FindAcct from "./pages/lostInfo/FindAcct";
import NavBar from "./components/nav/NavBar";
import PromoList from "./pages/promo/PromoBoard";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import PromoBoard from "./pages/promo/PromoBoard";

function App() {

  return (
    <RecoilRoot>
      <NavBar />
    <Routes>
      {/* ------------ 지훈 작업 -------------*/}
      {/* 메인 페이지 */}
      {/* <Route path='/' element={<Home />} /> */}

      {/* 자유 게시판 */}
      <Route path='/BoardList' element={<BoardList />} />
      <Route path='/BoardListSearch/:state' element={<BoardListSearch />} />
      <Route path='/BoardInsert' element={<BoardInsert />} />
      <Route path='/BoardDetail/:id' element={<BoardDetail />} />
      <Route path='/BoardUpdate/:boardNum' element={<BoardUpdate />} />
      <Route path='/BoardUpdateDetail/:boardNum' element={<BoardUpdateDetail />} />

      {/* 약관 */}
      <Route path='/TermsConditions' element={<TermsConditions />} />
      {/* 개인 회원가입 */}
      <Route path='/Certification' element={<Certification />} />
      <Route path='/PersonalInfo' element={<PersonalInfo />} />
      {/* ------------ 지훈 작업 end-------------*/}


      {/*------------ 로한 작업 ------------*/}
        {/* 메인 페이지 */}
        <Route path="/" element={<Home />} />

        {/* 로그인 및 회원정보 찾기 */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/findacct" element={<FindAcct />} />

        {/* 가입 */}
        <Route path="/biz_info" element={<Biz_info />} />
        <Route path="/joincompl" element={<JoinCompl />} />

        {/* 홍보 게시판 */}
        <Route path="/promoboard" element={<PromoBoard />} />
        <Route path="/promolist" element={<PromoList />} />
      {/*------------ 로한 End------------*/}

    </Routes>
    </RecoilRoot>
  );
};

export default App;