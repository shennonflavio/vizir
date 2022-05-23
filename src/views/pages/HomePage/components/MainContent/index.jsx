import React from 'react';
import { locationPhone, priceLogo, smartphones } from '../../../../../assets';

import {
  BoxOne,
  BoxTwo,
  Container,
  Divider,
  DividerContent,
  DividerTopics,
  Table,
  TableData,
  TableHead,
  TableRow,
  Title,
} from './styles';

function MainContent() {
  return (
    <Container>
      <Divider>
        <Title>Vantagens do FaleMais</Title>
      </Divider>
      <DividerTopics>
        <DividerContent >
          <BoxOne>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </BoxOne>
          <BoxTwo>
            <img src={smartphones} alt='Foto de smartphone' />
          </BoxTwo>
        </DividerContent>
        <DividerContent >
          <div className='dividerTwo'>
          <BoxOne>
            <h2>Duis aute irure dolor in reprehenderit</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </BoxOne>
          <BoxTwo >
            <div className='boxTwo'>

            <img
              src={locationPhone}
              alt='Simbolo de localização mais icone de telefone'
              />
            <img src={priceLogo} alt='Valor de preço em 0 reais' />
              </div>
          </BoxTwo>
          </div>
        </DividerContent>
        <DividerContent>
          <BoxOne>
            <h2>Excepteur sint occa ecat cupidatat</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </BoxOne>
          <BoxTwo >
            <div className='table'>

            <Table>
              <tbody>
              <TableRow>
                <TableHead>Origem</TableHead>
                <TableHead>Destino</TableHead>
                <TableHead>$/min</TableHead>
              </TableRow>
              <TableRow>
                <TableData>011</TableData>
                <TableData>016</TableData>
                <TableData>1,90</TableData>
              </TableRow>
              <TableRow>
                <TableData>016</TableData>
                <TableData>011</TableData>
                <TableData>2,90</TableData>
              </TableRow>
              <TableRow>
                <TableData>011</TableData>
                <TableData>017</TableData>
                <TableData>1,70</TableData>
              </TableRow>
              <TableRow>
                <TableData>017</TableData>
                <TableData>011</TableData>
                <TableData>2,70</TableData>
              </TableRow>
              </tbody>
            </Table>
            </div>
          </BoxTwo>
        </DividerContent>
      </DividerTopics>
    </Container>
  );
}

export default MainContent;
