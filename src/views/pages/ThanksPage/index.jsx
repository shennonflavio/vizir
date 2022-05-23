import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrowBackIcon, emojiIcon } from '../../../assets';
import logTelzir from '../../../assets/icons/logTelzir.svg';

import { Container, Content, Header, LinkBack, Logo, Title } from './styles';

function ThanksPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <LinkBack onClick={() => navigate('/')}>
          <img src={arrowBackIcon} alt='seta para voltar' />
          <span>Voltar para página inicial</span>
        </LinkBack>
        <Logo>
          <img src={logTelzir} alt='Logo' />
        </Logo>
      </Header>
      <Content>
        <Title>
          <h2>Contratação feita com sucesso!</h2>
          <img src={emojiIcon} alt='' />
        </Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </p>
      </Content>
    </Container>
  );
}

export default ThanksPage;
