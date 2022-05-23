import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  border-bottom: 1px solid #cbb7a5;

  @media (max-width: 600px){
  }
`;

export const LinkBack = styled.div`
  width: 344px;
  padding-left: 88px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 17px;
  cursor: pointer;

  @media (max-width: 1000px){
    width: 300px;
    padding-left: 0px;
  }

  @media (max-width: 600px) {
    width: fit-content;
    justify-content: flex-start;
    padding-left: 20px;

    span {
      display: none;
    }
  }

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

export const Content = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 32px;
  }
  p {
    width: 749px;
    text-align: center;
  }

  @media (max-width: 600px){

    p{
      width: fit-content;
      padding: 20px;
      font-size: 20px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 36px;
    height: 36px;
    margin-bottom: 32px;
  }
  @media (max-width: 600px){
    flex-direction: column;

    h2{
      text-align: center;
      width: fit-content;
    }
  }
`;
