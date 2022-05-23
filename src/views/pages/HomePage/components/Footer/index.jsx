import React, { useState } from 'react';
import { arrowDownIcon, logoIcon } from '../../../../../assets';
import useWindowDimensions from '../../../../../Hooks/useWindowDimensions';
import { Container, Content, Links, LogoFooter, Title, WrapperLinks, WrapperOptions } from './styles';

function Footer() {

    const { isMobile } = useWindowDimensions();
    const [openFirstDropdown, setOpenFirstDropdown] = useState(null);
    const [openSecondDropdown, setOpenSecondDropdown] = useState(null);
    const [openThirdDropdown, setOpenThirdDropdown] = useState(null);
    const [openFourthDropdown, setOpenFourthDropdown] = useState(null);
    const [openFifthDropdown, setOpenFifthDropdown] = useState(null);



  return (
    <Container>
      <Content>
      <WrapperOptions isMobile={isMobile ? 'row' : 'column'}>
        <Title onClick={()=> setOpenFirstDropdown(prev => !prev)}>
          Combo
          {isMobile &&  <img src={arrowDownIcon} alt="seta para baixo" />}
        </Title>
        <WrapperLinks opened={openFirstDropdown}>
          <Links >Planos</Links>
          <Links>Atendimentos</Links>
          <Links>Serviços adicionais</Links>
        </WrapperLinks>
      </WrapperOptions>

    <WrapperOptions isMobile={isMobile ? 'row' : 'column'}>
        <Title onClick={()=> setOpenSecondDropdown(prev => !prev)}>Celular
        {isMobile && <img src={arrowDownIcon} alt="seta para baixo" />}
        </Title>
      <WrapperLinks opened={openSecondDropdown}>
        <Links>Planos</Links>
        <Links>Atendimentos</Links>
        <Links>Serviços adicionais</Links>
      </WrapperLinks>
    </WrapperOptions>

    <WrapperOptions isMobile={isMobile ? 'row' : 'column'}>
        <Title onClick={()=> setOpenThirdDropdown(prev => !prev)}>Fixo
        {isMobile && <img src={arrowDownIcon} alt="seta para baixo" />}
        </Title>
      <WrapperLinks  opened={openThirdDropdown}>
        <Links>Planos</Links>
        <Links>Atendimentos</Links>
        <Links>Serviços adicionais</Links>
      </WrapperLinks>
    </WrapperOptions>

    <WrapperOptions isMobile={isMobile ? 'row' : 'column'}>
        <Title onClick={()=> setOpenFourthDropdown(prev => !prev)}>Sobre
        {isMobile && <img src={arrowDownIcon} alt="seta para baixo" />}
        </Title>
      <WrapperLinks  opened={openFourthDropdown}>
        <Links>A empresa</Links>
        <Links>Franquia</Links>
        <Links>Sobre nós</Links>
      </WrapperLinks>
    </WrapperOptions>

    <WrapperOptions isMobile={isMobile ? 'row' : 'column'}>
        <Title onClick={()=> setOpenFifthDropdown(prev => !prev)}>Comunidade
        {isMobile && <img src={arrowDownIcon} alt="seta para baixo" />}
        </Title>
      <WrapperLinks  opened={openFifthDropdown}>
        <Links>Acessibilidade</Links>
        <Links>Diversidade e pertencimento</Links>
        <Links>telzir.org</Links>
      </WrapperLinks>
    </WrapperOptions>
    </Content>
      <LogoFooter>
        <img src={logoIcon} alt="" />
        <span>2022</span>
      </LogoFooter>

    </Container>
    );
}

export default Footer;
