import React, {  useRef, useState } from 'react';
import { toTopIcon } from '../../../assets';
import CalcContent from './components/CalcContent';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Plans from './components/Plans';
import { ButtonToTop, WrapperHomePage } from './styles';


function HomePage() {
  const [visible, setVisible] = useState(false)


  const TopRef = useRef();
  const VantageRef = useRef();
  const CalcRef = useRef();
  const MoreRef = useRef();


  const scrollToTop =()=>{
    TopRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const scroll =()=>{
    VantageRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const scrollCalc =()=>{
    CalcRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const scrollPlans =()=>{
    MoreRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };


  window.addEventListener('scroll', toggleVisible);


  return (
    <WrapperHomePage>
    <div ref={TopRef}>
    <Header scroll={scroll} scrollCalc={scrollCalc} scrollPlans={scrollPlans}/>
    </div>
    <div ref={VantageRef}>
    <MainContent />
    </div>
    <div ref={CalcRef}>
    <CalcContent/>
    </div>
    <div ref={MoreRef}>
    <Plans scrollCalc={scrollCalc}/>
    </div>
    <Footer/>
    <ButtonToTop visible={visible ? 'flex' : 'none'}  onClick={()=>scrollToTop()}>
      <img src={toTopIcon} alt="Botao voltar" />
    </ButtonToTop>
    </WrapperHomePage>
  );
}

export default HomePage;
