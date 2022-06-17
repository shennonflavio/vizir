import styled from 'styled-components';

export const Container = styled.div`
 width: fit-content;
 height: fit-content;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: 600px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;

export const PricePlan = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

