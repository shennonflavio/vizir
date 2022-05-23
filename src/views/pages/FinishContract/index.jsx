import React from 'react';
import {  useNavigate } from 'react-router-dom';
import arrowBackIcon from '../../../assets/icons/purpleArrowBack.svg';
import cardsIcon from '../../../assets/icons/cards.svg';
import cvcardIcon from '../../../assets/icons/cvcard.svg';
import {
  AddressBox,
  AddressForm,
  Box, Button, City,
  Container,
  CvInput,
  Details,
  Divider,
  Header,
  LinkBack,
  Logo,
  NumberCard,
  NumberInput,
  PersonalDataForm,
  State,
  ValidInput,
  WrapperAddressForm,
  WrapperBoxes,
  WrapperCardData,
  WrapperCep,
  WrapperCityandState,
  WrapperComplement,
  WrapperContractButton,
  WrapperCV,
  WrapperDetails,
  WrapperPaymentForm,
  WrapperPersonalDataForm,
  WrapperValidateAndCv
} from './styles';
import logTelzir from '../../../assets/icons/logTelzir.svg';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

function FinishContract() {

  const navigate = useNavigate();

  const {isMobile} = useWindowDimensions();

    return (
        <Container>
          <Header>
            <LinkBack onClick={()=>navigate('/')}>
            <img src={arrowBackIcon} alt="seta para voltar" />
            <span>Voltar para página inicial</span>
            </LinkBack>
            <Logo >
              <img src={logTelzir} alt="Logo" />
            </Logo>
          </Header>
          <WrapperPersonalDataForm>
            <h1>Finalizar contratação</h1>
            <h2>Dados pessoais</h2>
            <PersonalDataForm>
              <Box>
                <div>
                <span>Nome</span>
                <input type="text" />
                </div>
                 <div>
                <span>Telefone</span>
                <input type="text" />
                </div>
              </Box>
              <Box>
                <div>
                <span>Sobrenome</span>
                <input type="text" />
                </div>
                 <div>
                <span>E-mail</span>
                <input type="text" />
                </div>
              </Box>
            </PersonalDataForm>
          </WrapperPersonalDataForm>
          <WrapperAddressForm>
            <h2>Endereço de cobrança</h2>
            <AddressForm>
            <WrapperBoxes>
            <AddressBox width='330px'>
              <WrapperCep>
                <div>
                  <span>CEP</span>
                  <input type="text" />
                </div>
                <a target="_blank" href= "https://buscacepinter.correios.com.br/app/endereco/index.php" rel="noreferrer" >Não sei meu cep</a>
              </WrapperCep>
              <WrapperComplement>
                <div>
                  <span>Número</span>
                  <input type="text" />
                </div>
                <div>
                   <span>Complemento</span>
                   <input type="text" />
                </div>
              </WrapperComplement>

            </AddressBox>
            <AddressBox width='456px'>
                <span>Endereço</span>
                <input type="text" />
              <WrapperCityandState>
                <City width='308px'>
                  <span>Cidade</span>
                  <select name="cidade" id="cidade" >
                    <option value="">Cidade</option>
                  </select>
                </City>
                <State width='59px'>
                  <span>Estado</span>
                  <select name="estado" id="estado" >estado</select>
                </State>
              </WrapperCityandState>
            </AddressBox>
            </WrapperBoxes>
            </AddressForm>
          </WrapperAddressForm>
          <WrapperDetails>
            <Details>
                <h2>Detalhes da contratação</h2>
                <div>
                  <span>Plano 120 - lorem ipsum sit amet</span>
                  <span> <b>R$ 00,00</b>/ mês</span>
                </div>
            </Details>
          </WrapperDetails>
          <WrapperPaymentForm>
            <h2>Pagamento</h2>
            <Divider>
            <div>
              <span>Nome no cartão</span>
              <input type="text" />
            </div>
            </Divider>
            <WrapperCardData>
                  <span>Número do cartão</span>
                <NumberCard>
                  <NumberInput type="text" placeholder="1234 1234 1234 1234"/>
                  <img src={cardsIcon} alt="" />
                </NumberCard>
                <WrapperValidateAndCv>
                  <ValidInput type="text" placeholder="MM / YY"/>
                <WrapperCV>
                  <CvInput type="text"  placeholder="CV"/>
                  <img src={cvcardIcon} alt="" />
                </WrapperCV>
                </WrapperValidateAndCv>
            </WrapperCardData>
          </WrapperPaymentForm>
          <WrapperContractButton>
              <Button>Finalizar e contratar</Button>
          </WrapperContractButton>
        </Container>
    );
}

export default FinishContract;
