import styled from 'styled-components';
// import { mainBanner2 } from '../../../../../assets';

export const ContainerHeader = styled.section`
  width: 100%;
  height: 685px;
  padding: ${({ isMobile }) =>
    isMobile ? '32px 0 0 32px' : '32px 98px 0 65px'};
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;




  @media (min-width: 1800px) {
    padding-bottom: 50%;
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 32px 38px 0 65px;
  }
  @media (max-width: 1000px) {
    width:100% ;
    height: 100%;
    background-color: #fcd49c;
    background:${({background})=>background};
    padding-right: 65px;
    height: 100%;

  }
  @media (max-width: 850px){
    width: calc(100% + 102px);
  }
  @media (max-width:750px){
    width: 100vw;
    padding: 0px;
  }
  @media (max-width: 600px){
    width: 100% ;
  }
`;

export const Opacity = styled.div`
  @media (max-width: 600px){
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: #fcd49ccc;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerButton = styled.div`
  visibility: ${({mobileVisible})=> mobileVisible };
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  align-items: center;
  justify-content: ${({ isMobile }) => (isMobile ? 'flex-start' : 'flex-end')};
  gap: 20px;
  left: 320px;
  transition-delay: 100ms ease;
`;

export const NavbarImage = styled.div`
  width: 59px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url(${({ NavImage }) => NavImage});
  background-repeat: no-repeat;
`;

export const Label = styled.label`
  width: 33px;
  color: #ffffff;
  font-weight: 600;
  padding-bottom: 5px;
`;

export const Button = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  background: none;
`;

export const ContractButton = styled.button`
  width: 143px;
  height: 40px;
  border-radius: 8px;
  background-color: #ab49ce;
  border: none;
  color: #ffffff;
  font-weight: 900;
  font-size: 1rem;
`;

export const WrapperMainTitle = styled.div`
  width: 50%;
  height: 500px;
  gap: 8px;
  display: flex;
  padding-left: 10%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  button {
    width: 143px;
    height: 40px;
    margin-top: 20px;
    border-radius: 8px;
    background: none;
    border: none;
    border: 2px solid #ab49ce;
    color: #ab49ce;
    font-weight: 900;
  }


  @media (max-width: 1200px) {
    padding-top: 20px;
    justify-content: flex-start;
    padding-left: 5%;
    width: 100%;
  }
   @media (max-width: 950px) {
    width: 100%;

  }

  @media (max-width: 600px) {
    padding-top: 50px;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 4.2rem;
  line-height: 82px;



  @media (min-width: 1800px) {
    font-size: 6rem;
    line-height: 114px;
    margin-top: 50px;
  }
  @media (max-width: 1000px){
    font-size: 5rem;
    line-height: 5rem;
  }

  @media (max-width: 750px){
    font-size: 5rem;
    line-height: 7rem;
     text-shadow: 2px 2px 5px #00000059;

  }
   @media (max-width: 420px) {
    padding-top: 30px;
    font-size: 3rem;
    line-height: 48px;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.1rem;
  max-width: 439px;


  @media (min-width: 1800px) {
    font-size: 2.2rem;
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 750px ){
     text-shadow: 2px 2px 5px #00000059;

  }

`;

export const CollapseToggle = styled.label`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: transparent;
  padding: 8px;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 6;

  span {
    width: 35px;
    height: 5px;
    background: #4a0e5f;
    border-radius: 5px;
    display: block;
    transition: 0.3s;
  }
  .one {
    width: 25px;
    animation: rotate1 0.5s ease;
     animation-fill-mode: forwards;
  }
  .two {
    animation: rotate2 0.5s ease;
     animation-fill-mode: forwards;
  }
  .three {
    width: 25px;
    animation: rotate3 0.5s ease;
     animation-fill-mode: forwards;
  }
  @keyframes rotate1 {
      0% {transform:rotate(0deg)}
      100% {
        transform:rotate(225deg ) ;
        margin-bottom:-18px;
        margin-left: 20px;
      }
    }
  @keyframes rotate2 {
      0% {transform:rotate(0deg)}
      100% {
        transform:rotate(360deg ) ;
      }
    }
  @keyframes rotate3 {
      0% {transform:rotate(0deg)}
      100% {
        transform:rotate(125deg ) ;
        margin-top:-18px;
        margin-left: 20px;
      }
    }
`;

export const MenuDrawer = styled.div`
  position: fixed;
  width: ${({width})=> width};
  height: 100%;
  background-color: #ffffff;
  z-index: 5;
  padding: ${({padding})=> padding};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition:  0.5s ;
`;
