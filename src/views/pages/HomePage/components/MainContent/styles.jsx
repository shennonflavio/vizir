import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 100px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  @media (max-width: 850px){
        width: calc(100% + 102px);
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }
  @media (max-width: 600px){
    width: 100% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 65px;

  @media (max-width: 1000px) {
    width: 100vw;
    align-items: center;
    justify-content: center;

  }
  @media (max-width: 750px) {
    max-width: 100vw;
    padding: 10px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  width: 218px;
  height: fit-content;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 1200px) {
    width: fit-content;
  }
  @media (max-width: 1000px) {
    width: fit-content;
  }
  @media (max-width: 750px) {
    max-width: fit-content;
    font-size: 30px;
  }
`;
export const DividerContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  /* border: 1px solid red; */

  /* .boxTwo {
    padding-right: 117px;

    @media (max-width: 750px) {
      width: 80%;
      flex-direction: column;
      padding: 25px 0;
      align-items: center;
      justify-content: center;
    }
  } */

  .dividerTwo {
    width: 100%;
    display: flex;
    border-top: 1px solid rgba(208, 208, 208, 1);
    border-bottom: 1px solid rgba(208, 208, 208, 1);

    @media (max-width: 600px) {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  @media (max-width: 1000px){
    width: calc(100% - 90px);
    /* gap: 50px; */

  }

  @media (max-width: 850px){
      width:100%;
    }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const DividerTopics = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding:0  5%;
  }
  @media (max-width: 1000px) {
    padding-left:  10%;
  }

  @media (max-width: 850px) {
    width: 90%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    margin: 3%;
    padding: 0 ;
  }
`;
export const BoxOne = styled.div`
  width: 50%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 8;

  h2 {
    width: 368px;
    font-size: 40px;
    font-weight: 400;
  }

  p {
    width: 359px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  @media (max-width: 1000px){
    gap: 8px;
    h2{
      width: 90%;
      font-size: 30px;
    }
    p{
      width: 50%;
      font-size: 14px;
    }
  }

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 18px;
    gap: 12px;

    h2 {
      text-align: center;
      width: 300px;
      font-size: 25px;
    }
    p {
      text-align: center;
      width: 300px;
      font-size: 12px;
    }
  }
`;
export const BoxTwo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;

  .table {
    width: 100%;
    display: flex;
  }

  .boxTwo{
    width: 100%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    img{

    }
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .boxTwo{
      gap: 30px;
    }
    .table{
      width: 100%;

    }
  }

  @media (max-width: 750px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;

    .boxTwo{
      flex-direction: column;
    }
  }
`;
export const Table = styled.table`
  display: block;
  height: 100%;
  width: 462px;
  height: 245px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 56px 98px 55px 0;

  @media (max-width: 1000px){
    margin-right: 0;
  }

  @media (max-width: 750px) {
    width: 330px;
    margin: 50px 12px;
  }

  @media (max-width: 600px) {
    width: 460px;
  }
`;

export const TableHead = styled.th`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ab49ce;
  width: 250px;
  height: auto;
  padding: 14px;
`;

export const TableRow = styled.tr``;

export const TableData = styled.td`
  padding: 14px;
  height: auto;
  border-top: 1px solid #d0d0d0;
  text-align: center;
`;
