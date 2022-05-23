import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 320px;
  background-color: #FFE8D3;
  padding: 60px 60px 28px;

    @media (max-width: 1200px){
      height: fit-content;
    }

    @media (max-width: 1000px){
      width: 100%;
      height: fit-content;
      padding: 60px 0px;
    }
    @media (max-width: 850px){
        width: calc(100% + 102px);

  }

    @media (max-width: 600px){
      width: 100% ;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 60px;
    }
    `;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 130px;
  padding-bottom: 34px;
  margin-bottom: 29px;
  border-bottom: 1px solid #CBB7A5;

  @media (max-width: 1000px){
    width: 100%;
    display: grid;
    gap: 20px;
    padding-left: 30px;
    grid-template-columns: repeat(5,  1fr);

  }

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-bottom: none;
    padding: 0;
  }
  `;

export const WrapperOptions = styled.div`
  height: 100%;
  display: flex;
  flex-direction:column;
  gap: 16px;
  justify-content: space-between;


    @media (max-width: 600px){
      padding-bottom: 5px;
      border-bottom: 1px solid #CBB7A5;
    }
`;

export const Title = styled.h3`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

   img{
      width: 20px;
      height: 20px;
      margin-top: 5px;
    }
`;

export const WrapperLinks = styled.div`
  height: ${({opened})=> opened ? '95px' : 'fit-content'};
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px){
    display:${({opened})=> opened ? 'flex': 'none'};
      transition: 0.5s;
    }

`;

export const Links = styled.span``;

export const LogoFooter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

    img{
      width: 40px;
      height: 35px;
    }
`;
