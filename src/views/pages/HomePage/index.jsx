import React from 'react';
import CalcContent from './components/CalcContent';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Plans from './components/Plans';
import { WrapperHomePage } from './styles';


function HomePage() {
  return (
    <WrapperHomePage>
    <Header />
    <MainContent/>
    <CalcContent/>
    <Plans/>
    <Footer/>
    </WrapperHomePage>
  );
}

export default HomePage;
