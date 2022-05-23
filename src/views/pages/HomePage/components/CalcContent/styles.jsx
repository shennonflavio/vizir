import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: rgba(255, 232, 211, 1);

    @media (max-width: 1250px){

    }

    @media (max-width: 1000px){
      width: 100%  ;
      height: fit-content;
      flex-direction: column;
    }
    @media (max-width: 850px){
        width: calc(100% + 102px);

  }
    @media (max-width: 600px){
      width: 100% ;
      height: fit-content;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
    }
`;

export const WrapperTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 55px 0 75px 65px;
  gap: 16px;

   @media (max-width: 1250px){
     width: 50%;

    }

   @media (max-width: 1000px){
     width: 100%;
     align-items: center;
     justify-content: center;
     text-align: center;
     padding-left: 0;
     padding: 35px 0 0;
   }

   @media (max-width: 600px){
     align-items: center;
     justify-content: center;
     height: fit-content;
     padding: 5% 0 10%;
    }
`;

export const Title = styled.h1`
  width: 268px;
  height: 94px;
  font-size: clamp(1rem, 2.5rem, 4.5rem);

    @media (max-width: 1000px){
      width: 100%;
      height: fit-content;
    }

    @media (max-width:600px){
      text-align: center;
    }
`;

export const Subtitle = styled.p`
  width: 298px;
  height: 63px;
  color: rgba(102, 102, 102, 1);
  font-size: clamp(0.8rem, 10vw, 1.1rem);

    @media (max-width: 1000px){
      width: 60%;
    }

    @media(max-width: 600px){
      width:100%;
      padding: 0 15px;
      text-align: center;
    }
`;

export const WrapperCalc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 0 56px 0;

   @media (max-width: 600px){
      padding: 10px 0;
      height: fit-content;
      padding: 40px 0;
    }
`;

export const Calc = styled.div`
  width: 516px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 8px;

    @media (max-width: 1000px){
      width: 80%;
      height: fit-content;
    }

    @media (max-width: 600px){
      width: 350px;
      height: fit-content;
    }
`;

export const Selects = styled.div`
  width: 100%;
  height: 71px;
  display: flex;
  border-bottom: 1px solid rgba(229, 229, 229, 1);

    @media (max-width: 600px){
      height: fit-content;
      flex-direction: column;
      padding-bottom: 10px;
    }
`;

export const Select = styled.div`
  width:33.3%;
  height:100%;
  padding: 16px 16px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  /* :active{
    border: 1px solid rgba(102, 102, 102, 1);
    border-radius: 8px;
  } */
   @media (max-width: 600px){
      width: 100%;
      padding: 16px 24px ;
    }
`;

export const SelectTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
`;
export const SelectSubtitle = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: rgba(168, 168, 168, 1);
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
    option{
      width: 172px;
      background-color: red;
    }

      img{
        width: 28px;
        height: 12px;
        transform: rotate(${({ opened }) => (opened ? '180deg' : '0deg')});
      transition: 0.5s;
      }

    @media (max-width:600px){
      justify-content: space-between;
    }
`;


export const Plan = styled.div`
  width: 100%;
  height: 71px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  padding: 16px 16px 0 24px ;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

   @media (max-width: 600px){
      width: 100%;
      padding: 16px 24px ;
    }
`;

// export const WrapperTotal = styled.div`
//   width: 100%;
//   /* height: 100%; */
//   display: flex;
//   flex-direction: column;
// `;
export const Total = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px  24px;


    b{
      font-size: 14px;
    }
`;

export const Dropdown = styled.ul`
  width: 172px;
  height: fit-content;
  margin-left: -23px;
  margin-top: 10px;
  background-color: #FFFFFF;
  z-index: 50;
  border: 1px solid rgba(229, 229, 229, 1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 13px 26px 16px 26px ;

  @media (max-width: 1000px){
    width: calc(100% + 39px);
    border: 1px solid #e2e2e2;
  }

  @media (max-width: 600px){
    width: calc(100% + 46px);
    border: 1px solid #e2e2e2;
  }
`;

export const DropdownPlan = styled.div`
  width:516px;
  height: fit-content;
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-left: -24px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  z-index: 100;
  border: 1px solid rgba(229, 229, 229, 1);
  padding: 16px 19px;

  @media (max-width: 1000px){
      width: calc(100% + 40px);

    }
  @media (max-width: 600px){
      width: 349px;
      display: flex;
      flex-direction: column;
    }
`;

export const ListItem = styled.li`
width: 172px;
  list-style: none;
  font-weight: 400;
font-size: 12px;
line-height: 26px;
cursor: pointer;

    :hover{
      background-color: rgba(168, 168, 168, 0.2);
      margin-left: -27px;
      padding-left: 27px;
    }
`;

export const WrapperCheckbox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

    @media (max-width: 600px){
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
`;

export const PlanButton = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
`;

export const CheckboxItem = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

    input{
      width: auto;
    }
`;

export const Button = styled.button`
  width: 143px;
  height: 40px;
  border-radius: 8px;
  background-color: transparent;
  border:2px solid #ab49ce;
  color: #ab49ce;
  font-weight: 900;
  font-size: 1rem;
`;

export const PlanOptionSelected = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2px 6px;
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

    span{
     display: flex;
  align-items: center;
  justify-content: center;
    }
`;

export const WrapperContractButton = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px 0;
  border-top: 1px solid #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContract = styled.button`
  width: 302px;
  height: 48px;
  font-size: 18px;
  color: #FFFFFF;
   border-radius: 8px;
  background-color: #ab49ce;
  border: none;
`;
