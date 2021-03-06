import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './main.scss';
import Profile from './profile.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {Link} from "react-scroll";

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

        {/* header */}
        <nav id="nav">
          <div className="navbar">
            <div className="logo"></div>
            <ul className="menu">
              <li><Link className='menu-item' activeClass="active" to="about" spy={true} smooth={true}>ABOUT</Link></li>
              <li><Link className='menu-item' activeClass="active" to="intro" spy={true} smooth={true}>INTRODUCTION</Link></li>
              <li><Link className='menu-item' activeClass="active" to="career" spy={true} smooth={true}>CAREER</Link></li>
              <li><Link className='menu-item' activeClass="active" to="skill" spy={true} smooth={true}>SKILLS</Link></li>
              <li><Link className='menu-item' activeClass="active" to="project" spy={true} smooth={true}>PROJECT</Link></li>
              <li><Link className='menu-item' activeClass="active" to="study" spy={true} smooth={true}>STUDY</Link></li>
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
                <p className='about-me'>???????????????. ????????? ??????????????? ????????? ?????????????????????. ~~~~~???????????????????????????.</p>
                <p>?????????????????????<br/>
                ?????????????????? ??????</p>
                <div className='btn-box'>
                  <a className='pdf-btn' href='?????????.pdf' download>????????? ????????????</a>
                  <a className='git-btn' href="https://github.com/heyji-ten" target="_blank">GIT</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career">
          <div className='sec-box'>
            <h2>career</h2>
            <p className='title'><span className='company'>????????????</span> - ?????? 6?????? (2021. ~ 2022.02)</p>
            <p className='content'>
              ???????????????, HTML, CSS, JavaScript??? ????????? ???????????????
            </p>
            <p className='career-cont'>
              ?????????????????? ???????????? ??????????????? ???????????? ?????? ????????????, ???????????? HTML, CSS ????????? ???????????????.
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
                <ChangingProgressProvider values={[0, 55]}>
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
                <ChangingProgressProvider values={[0, 35]}>
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
                <ChangingProgressProvider values={[0, 25]}>
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
                <ChangingProgressProvider values={[0, 50]}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${50}%`}
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

            {/* 1. < ????????? a.id?????? -1???. > ????????? a.id?????? +1 ??? - ok
            2. 0?????? < ????????? ?????? ?????? id????????? ??????
            3. ???????????? id????????? > ??? ????????? 0?????? ?????? */}

            </div>
          </div>
        </section>

        {/* study */}
        <section id="study">
          <div className='sec-box'>
            <h2>Study</h2>
            <div className='content'>
              <p className='title'><span className='name'>??????????????????</span> - ?????? html...?????????</p>
              <p className='cont'>
                ?????? HTML??? CSS JavaScript??? ?????????
              </p>
              </div>
              <div className='content'>
              <p className='title'><span className='name'>????????????</span> - React ????????? ???????????? ????????? ??????????????????!</p>
              <p className='cont'>
                ?????? React ????????? ?????????, ????????? ???????????? ??????????????????.
              </p>
              </div>
          </div>
        </section>


        {/* footer */}
        <footer id="footer">
          <div className='sec-box'>
            <p>??? Hyeji Namgung 2022</p>
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
