import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;


    @media (max-width: 600px){
      width: 100%;
    }
`;

export const Header = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  border-bottom: 1px solid #cbb7a5;
`;

export const LinkBack = styled.div`
  width: 344px;
  padding-left: 88px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 17px;
  cursor: pointer;

    img {
      width: 12px;
      height: 12px;
    }

    span {
      color: #a23ddf;
      text-decoration-line: underline;
      letter-spacing: 0.005em;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    @media (max-width: 1000px){
       width: fit-content;
      justify-content: flex-start;
      padding-left: 120px;

      span{
        display: none;
      }
    }

    @media (max-width: 600px) {
      width: fit-content;
      justify-content: flex-start;
      padding-left: 20px;

      span {
        display: none;
      }
    }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20%;

  @media (max-width: 600px) {
    padding-right: 32px;
  }
`;

export const WrapperPersonalDataForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 56px 0 48px;

  h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
  }
  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 49px;
    margin-bottom: 74px;
  }

  @media (max-width: 1000px){
  }
`;

export const PersonalDataForm = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-bottom: 48px;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 1000px){
    gap: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding:  20px;
  }
`;

export const Box = styled.div`
  width: 396px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;

  div {
    display: flex;
    gap: 8px;
    flex-direction: column;
  }
  input {
    width: 394px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
  }

  @media (max-width: 1000px){
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    input{
      width: 295px;
    }
  }
  @media (max-width: 600px) {
    width: 340px;
    justify-content: center;

    input {
      width: 348px;
    }
  }
`;

export const WrapperAddressForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 54px;

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 41px;
  }

    @media (max-width: 600px){
    }
`;

export const AddressForm = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const WrapperCep = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  justify-content: center;

  div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    input {
      width: 202px;
      height: 40px;
    }
  }

  a {
    font-weight: 400;
    color: #a23ddf;
    font-size: 14px;
    padding-top: 20px;
  }

  @media (max-width: 1000px){
  }

  @media (max-width: 600px){
    justify-content: flex-start;
    gap: 40px;
  }
`;

export const WrapperComplement = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      width: 137px;
      height: 40px;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      width: 165px;
      height: 40px;
    }
  }
`;

export const WrapperBoxes = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;

    @media (max-width: 1000px){
      gap: 10px;
    }

    @media (max-width: 600px){
      flex-direction: column;
    }
`;

export const AddressBox = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 394px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
  }

  @media (max-width: 1000px){
    width: fit-content;
  }

  @media (max-width: 600px){
    width: 356px;
    justify-content: center;
    input{
      width: 356px;
    }
  }
`;

export const WrapperCityandState = styled.div`
  display: flex;
  gap: 23px;

    @media (max-width: 600px){
      width: 356px;
      justify-content: space-around;
      gap: 55px;
    }
`;

export const City = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: 8px;

  select{
  background-color: #ffffff;
  }

  #cidade {
    width: 306px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
  }

  @media (max-width: 600px){
    #cidade{
      width: 220px;

    }

  }
`;

export const State = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: 8px;

  select{
  background-color: #ffffff;
  }

  #estado {
    width: 57px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
  }
  @media (max-width: 600px){
    width: 100px;
    padding-left: 20px;
  }
`;

export const WrapperDetails = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;

  background-color: #ffe8d3;

`;

export const Details = styled.div`
  width: 807px;
  height: 172px;
  padding: 42px 91px 42px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;

  h2 {
    font-weight: 400;
    font-size: 24px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #666666;

      b {
        color: #000;
      }
    }

    @media (max-width: 600px){
      width: 290px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 600px){
          width: 356px;

    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding: 0 50px;


    h2{
      width:290px;
      text-align: center;
    }
  }
`;

export const WrapperPaymentForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 56px;

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 22px;
    margin-bottom: 56px;
  }
`;

export const Divider = styled.div`
  margin-bottom: 24px;
  div {
    width: 785px;
    height: fit-content;
    display: flex;
    gap: 8px;
    flex-direction: column;

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
    }
  }

  @media (max-width: 600px){
    div{
      width: 340px;
    }
  }
`;

export const NameCard = styled.div``;

export const WrapperCardData = styled.div`
  width: 785px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    margin-bottom: 8px;
  }
    @media (max-width: 600px){
      width: 340px;
    }


`;

export const NumberCard = styled.div`
  width: 784px;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #e5e5e5;

  img {
    padding: 12px 11px 11px;
  }
    @media (max-width: 600px){
      width: 340px;
    }
`;

export const NumberInput = styled.input`
  width: 704px;
  height: 40px;
  border: none;

    @media (max-width: 600px){
      width: 340px;
    }
`;

export const WrapperValidateAndCv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px){
      width: 340px;
    }
`;

export const ValidInput = styled.input`
  width: 394px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 0px 0px 0px 8px;

    @media (max-width: 600px){
      width: 240px;
    }
`;

export const WrapperCV = styled.div`
width: 390px;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #e5e5e5;
border-radius: 0px 0px 8px 0px;

 img{
   padding-right: 11px ;
 }

 @media (max-width: 600px){
      width: 240px;
    }
`;

export const CvInput = styled.input`
  width: 330px;
  height: 38px;
  border: none;

  @media (max-width: 600px){
      width: 100px;
    }
`;

export const WrapperContractButton = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 103px;
`;

export const Button = styled.button`
  width: 302px;
  height: 56px;
  border-radius: 8px;
  background-color: #ab49ce;
  border: none;
  color: #ffffff;
  font-weight: 900;
  font-size: 1rem;
`;
