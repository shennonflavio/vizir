import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 703px;
  padding: 56px 64px 59px 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

    @media (max-width: 1000px){
      width: 100% ;
      height: fit-content;
    }
    @media (max-width: 850px){
       width: calc(100% + 102px);

  }

    @media (max-width: 600px){
      width:100%;
      height: fit-content;
      align-items: center;
      justify-content: center;
    }
`;

export const WrapperPlanTitles = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const PlanTitle = styled.h1``;

export const PlanSubtitle = styled.div`
  width: 543px;
  height: 42px;

  p {
    color: #666666;
    font-size: 1.1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const WrapperPlans = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 462px;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
    max-height: fit-content;
    padding: 50px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    margin-top: 38px;
  }
`;

export const BoxPlans = styled.div`
  width: 350px;
  height: 462px;
  max-width: 310px;

  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px 40px 36px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 8px;

  :hover{
    width: 380px;
    height: 472px;
    box-shadow: 0 0 25px 5px #66666670;
    transition: 0.5s ease-in-out;
  }

  .imgPrice {
    margin: 0px 0 8px 0;
    height: 47px;
  }

  b {
    text-align: center;
    font-size: 14px;
    padding: 8px 0;
  }
  p {
    width: 180px;
    text-align: center;
    font-size: 14px;
    b{
      font-size: 16px;
      margin: 8px 0;
    }
  }
  strong {
    font-size: 14px;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ul > li {
    list-style: none;
    display: flex;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #666666;
  }
`;

export const ContractButton = styled.button`
  width: 143px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ab49ce;
  color: #ab49ce;
  background-color: transparent;
  font-weight: 900;
  font-size: 1rem;
  margin-top: 16px;
`;
