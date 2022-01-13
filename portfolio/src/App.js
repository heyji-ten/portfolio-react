import logo from './logo.svg';
import './App.css';

function App() {
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
              <li className='menu-item'>SKILL</li>
              <li className='menu-item'>PROJECT</li>
              <li className='menu-item'>STUDY</li>
              <li className='menu-item'>CONTACT</li>
            </ul>
          </div>
        </nav>
        
    </div>
  );
}

export default App;
