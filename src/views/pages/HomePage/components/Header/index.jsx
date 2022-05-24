import { func } from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bannerPhone, logoIcon, mainBanner } from '../../../../../assets';
import useWindowDimensions from '../../../../../Hooks/useWindowDimensions';
import {
  Button,
  CollapseToggle,
  ContainerHeader,
  ContractButton,
  Divider,
  DividerButton,
  MenuDrawer,
  Navbar,
  NavbarImage,
  Opacity,
  Subtitle,
  Title,
  WrapperMainTitle,
} from './styles';

function Header({scroll, scrollCalc, scrollPlans}) {
  const navigate = useNavigate();
  const { isMobile } = useWindowDimensions();
  const [menuDrawer, setMenuDrawer] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  function animate() {
    setAnimateMenu(!animateMenu);
    setMenuDrawer(!menuDrawer)
  }

  function handleContractPage() {
    navigate('/contract');
  }

  function handleVantageButton() {
    scroll();
   animate();
  }

  function handleCalcButton() {
    scrollCalc();
    animate();
  }




  return (

      <ContainerHeader
        background={isMobile ? bannerPhone : mainBanner}
        alt='Mulher afro-americana falando no celular com um copo de café na mão'
      >
        <Opacity>
        <Navbar>
          <Divider>
            <NavbarImage
              NavImage={logoIcon}
              alt='logo em forma abstrata contendo o texto telzir'
             />
          </Divider>
          {!isMobile &&(
            <DividerButton>
              <Button onClick={()=>scroll()} type='button'>Vantagens</Button>
              <Button onClick={()=>scrollCalc()} type='button'>Cálculo</Button>
              <ContractButton onClick={()=> handleContractPage()} type='button'>Contratar</ContractButton>
            </DividerButton>
          )}

          {isMobile && (
            <CollapseToggle  onClick={() => animate() } >
              <span className={animateMenu ? 'one' : null}/>
              <span className={animateMenu ? 'two' : null}/>
              <span className={animateMenu ? 'three' : null}/>
            </CollapseToggle>
          )}
          {isMobile &&
          <MenuDrawer
          padding={menuDrawer ? '100px 30px' : '100px 0'}
          width={ menuDrawer ? '300px' : '0px'}>
            <DividerButton
            mobileVisible={!menuDrawer ? 'hidden' : 'visible' }
            isMobile>
              <Button onClick={()=>handleVantageButton()} type='button'>Vantagens</Button>
              <Button onClick={()=>handleCalcButton()} type='button'>Cálculo</Button>
              <ContractButton onClick={()=> handleContractPage()} type='button'>Contratar</ContractButton>
            </DividerButton>
            </MenuDrawer>}
        </Navbar>
        <WrapperMainTitle>
          <Title>
            Pague menos,<br/>
            <strong>Fale Mais</strong>
          </Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Subtitle>
          <button onClick={()=>scrollPlans()} type='button'>Saiba mais</button>
        </WrapperMainTitle>
        </Opacity>
      </ContainerHeader>

  );
}

export default Header;


Header.propTypes={
  scroll: func.isRequired,
  scrollCalc: func.isRequired,
  scrollPlans: func.isRequired
}
