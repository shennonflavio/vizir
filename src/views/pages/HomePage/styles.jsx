import styled from 'styled-components';

export const WrapperHomePage = styled.div`
position: relative;
width: 100%;
height: 100%;
@media (max-width: 1000px){

}
@media (max-width: 850px){
}
@media (max-width: 600px){

  }
`;

export const ButtonToTop = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  width:60px;
  height:60px;
  margin-right: 20px;
  margin-bottom: 15px;
  border-radius: 50px;
  border: none;
  background-color: transparent;
  display: ${({view})=> view};
  justify-content: center;
  align-items: center;

   img{
     width: 90px;
     height: 90px;

   }
`;
