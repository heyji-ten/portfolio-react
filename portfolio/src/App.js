import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './main.scss';
import Profile from './profile.png';

import Data from './project-data.js';

function App() {

  let [project, projectFix] = useState(Data);

  return (
    <div className="App">
      {/* 포트폴리오 사이트에 들어가야할 것
      1. 이력서 pdf 다운로드
      2. 자기소개 (연락처 등 포함)
      3. 기술 스택 
        3-1. 다룰 수 있는 기술 (HTML : 중, CSS : 중, JS : 하, REACT : 하)
      4. 교육 이력 (인터넷 강의 등)
      5. 프로젝트
        5-1. 깃허브 및 프리뷰 링크
        5-2. 작업하면서 막혔던 부분, 해결한 방법 간단하게 보기좋게 입력 */}

        {/* header */}
        <nav id="nav">
          <div className="navbar">
            <div className="logo"></div>
            <ul className="menu">
              <li className='menu-item active'>ABOUT</li>
              <li className='menu-item'>CAREER</li>
              <li className='menu-item'>SKILL</li>
              <li className='menu-item'>PROJECT</li>
              <li className='menu-item'>STUDY</li>
              <li className='menu-item'>CONTACT</li>
            </ul>
          </div>
        </nav>

        {/* about */}
        <section id="about">
          <div className="sec-box">

          </div>
        </section>

        {/* intro */}
        <section id="intro">
          <div className='sec-box'>
            <h2>Introduction</h2>
            <div className='flex-box'>
              <div className='profile-img'><img src={Profile}/></div>
              <div className='txt-box'>
                <h3>HYEJI NAMGUNG</h3>
                <p className='about-me'>안녕하세요. 주니어 프론트엔드 개발자 남궁혜지입니다. ~~~~~자기소개부분입니다.</p>
                <p>인천재능대학교</p>
                <p>컴퓨터정보과 졸업</p>
                <div className='but-box'>
                  <a href='이력서.pdf' download>이력서PDF</a>
                  <a href="https://github.com/heyji-ten" target="_blank">깃허브(아이콘)</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career">
          <div className='sec-box'>
            <h2>career</h2>
            <p className='title'><span className='company'>온라이프</span> - 인턴 6개월(2021. ~ 2022.02)</p>
            <p className='content'>
              워드프레스, HTML, CSS, JavaScript를 사용한 웹퍼블리싱
            </p>
          </div>
        </section>

        {/* skill */}
        <section id="skill">
          <div className='sec-box'>
            <h2>Skills</h2>
            <div className='skill'>
              <h3>HTML <span className='paercent'>60%</span></h3>
              <div className='skill-bar'>
                <div className="progress" data-percent="60">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* project */}
        <section id="project">
          <div className='sec-box'>
            <h2>Project</h2>
            <div className='slider'>
            {
              project.map((a,i)=>{
              return <Project project={project[i]} i={i} key={i} />
            })
            }

            {/* 1. < 클릭시 a.id값이 -1됨. > 클릭시 a.id값이 +1 됨
            2. 0에서 < 누르면 가장 높은 id값으로 이동
            3. 가장높은 id값에서 > 를 누르면 0으로 이동 */}

            </div>
          </div>
        </section>

        {/* study */}
        <section id="study">
          <div className='sec-box'>
            <h2>Study</h2>
            <div className='content'>
              <p className='title'><span className='name'>드림코딩엘리</span> - 기초 html...어쩌구</p>
              <p className='cont'>
                기초 HTML과 CSS JavaScript를 배웠다
              </p>
              </div>
              <div className='content'>
              <p className='title'><span className='name'>코딩애플</span> - React 리액트 기초부터 쇼핑몰 프로젝트까지!</p>
              <p className='cont'>
                기초 React 문법을 배우고, 간단한 쇼핑몰을 만들어보았다.
              </p>
              </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact">
          <div className='sec-box'>
            <h2>Contact Me</h2>
            <p>Email : ngni4856@gmail.com</p>
            <p>Phone : 010-2492-0798</p>
          </div>
        </section>

        {/* footer */}
        <footer id="footer">
          <div className='sec-box'>
            <p>ⓒ Hyeji Namgung 2021</p>
          </div>
        </footer>
    </div>
  );
}

function Project(props) {
  return (
    <div className='project-container'>
      <img src={'/preview/preview' + (props.i+1) + '.jpg'}></img>
      <h4>{props.project.title}</h4>
      <p>{props.project.content}</p>
      <p>{props.project.explain}</p>
      <p>{props.project.language}</p>
    </div>
  )
}

export default App;
