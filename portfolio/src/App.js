import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './main.scss';
import Profile from './profile.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import Data from './project-data.js';

// Animation
import ChangingProgressProvider from "./ChangingProgressProvider";


function App() {

  let [project, setProject] = useState(Data);

  let [slider, setSlider] = useState(0);

  let count = Object.keys(project).length;

  const right = <FontAwesomeIcon icon={faChevronRight} />
  const left = <FontAwesomeIcon icon={faChevronLeft} />


  function leftBtn() {

    if (slider > 0) {
      var projectCopy = (project[slider].id-1);
      setSlider(projectCopy);
    } else {
      setSlider((count-1));
    }
  }

  function rightBtn() {

    if (slider < (count-1)){
    var projectCopy = (project[slider].id+1);
    setSlider(projectCopy);
  } else {
    setSlider(0);
  }
}


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
            <div style={{height:'600px'}}></div>
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
                <p>인천재능대학교<br/>
                컴퓨터정보과 졸업</p>
                <div className='btn-box'>
                  <a className='pdf-btn' href='이력서.pdf' download>이력서 다운로드</a>
                  <a className='git-btn' href="https://github.com/heyji-ten" target="_blank">GIT</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career">
          <div className='sec-box'>
            <h2>career</h2>
            <p className='title'><span className='company'>온라이프</span> - 인턴 6개월 (2021. ~ 2022.02)</p>
            <p className='content'>
              워드프레스, HTML, CSS, JavaScript를 사용한 웹퍼블리싱
            </p>
            <p className='career-cont'>
              워드프레스를 사용하여 홈페이지를 세팅, 제작하는 법을 배웠으며, 그로인한 HTML, CSS 능력이 향상되었다.
            </p>
          </div>
        </section>

        {/* skill */}
        <section id="skill">
          <div className='sec-box'>
            <h2>Skills</h2>
              <div className='skill-bar'>
                <div className="progress">
                <ChangingProgressProvider values={[0, 60]}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${60}%`}
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
              <h3>HTML</h3>
                </div>
                <div className="progress">
                <ChangingProgressProvider values={[0, 60]}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${55}%`}
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
              <h3>CSS </h3>
                </div>
                <div className="progress">
                <ChangingProgressProvider values={[0, 60]}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${35}%`}
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
              <h3>JavaScript</h3>
                </div>
                <div className="progress">
                <ChangingProgressProvider values={[0, 60]}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${25}%`}
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
              <h3>React</h3>
                </div>
                <div className="progress">
                <ChangingProgressProvider values={[0, 60]}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${60}%`}
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
              <h3>WordPress</h3>
                </div>
              </div>
          </div>
        </section>

        {/* project */}
        <section id="project">
          <div className='sec-box'>
            <h2>Project</h2>
            <div className='slider'>

              <button className='left-btn' onClick={leftBtn}>{left}</button>
              

              <Project slider={slider} project={project}/>

              <button className='right-btn' onClick={rightBtn}>{right}</button>

            {/* 1. < 클릭시 a.id값이 -1됨. > 클릭시 a.id값이 +1 됨 - ok
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


        {/* footer */}
        <footer id="footer">
          <div className='sec-box'>
            <p>ⓒ Hyeji Namgung 2022</p>
          </div>
        </footer>
    </div>
  );
}

function Project(props) {
  return (
    <div className='project-container'>
      <img src={'/preview/preview' + (props.slider+1) + '.jpg'}></img>
      <div className='txt-box'>
      <h4>{props.project[props.slider].title}</h4>
        <p className='content-txt'>{props.project[props.slider].content}</p>
        <p>{props.project[props.slider].explain}</p>
        <p className='use-txt'>{props.project[props.slider].language}</p>
      </div>
    </div>
  )
}


export default App;
