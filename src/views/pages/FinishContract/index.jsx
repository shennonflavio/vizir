import React, { useEffect, useState } from 'react';
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
import { fetchCitiesForStates, fetchStates } from '../../../services/getCityandStates';

function FinishContract() {

  const navigate = useNavigate();

  const [cities, setCities]=useState([]);
  const [states, setState]=useState([]);
  const [formValues, setFormValues] = useState({});


  const  handleInputChange=(e) =>{
    e.preventDefault()
    const {value, name} = e.nativeEvent.target;
    setFormValues({...formValues,[name]:value});
  }
   function checkCEP(e) {
  const cep = e.nativeEvent.target.value.replace(/\D/g,'');
  fetch(`https://viacep.com.br/ws/${cep}/json`)
  .then(res => res.json()).then(data =>{
    setFormValues({
      cep:data.cep,
      name:'',
      lastName:'',
      phone:'',
      email:'',
      number: '',
      complement: data.complemento,
      address: data.logradouro,
      city: data.localidade,
      state: data.uf
    })
  })
}

  useEffect(()=>{
    fetchStates().then((state)=>{
      setState(state);
    }) },[]);

  useEffect(()=>{
    fetchCitiesForStates(formValues.state).then((cities)=>{
      setCities(cities);
    })
  },[formValues.state]);



    return (
        <Container>
          <Header>
            <LinkBack onClick={()=>navigate('/')}>
            <img src={arrowBackIcon} alt="seta para voltar" />
            <span>Voltar para página inicial</span>
            </LinkBack>
            <Logo onClick={()=>navigate('/')}>
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
                <input
                type="text"
                name='name'
                value={formValues.name}
                onChange={handleInputChange}
                />
                </div>
                 <div>
                <span>Telefone</span>
                <input
                type="text"
                name='phone'
                value={formValues.phone}
                onChange={handleInputChange}
                />
                </div>
              </Box>
              <Box>
                <div>
                <span>Sobrenome</span>
                <input
                type="text"
                name='lastName'
                value={formValues.lastName}
                onChange={handleInputChange}
                />
                </div>
                 <div>
                <span>E-mail</span>
                <input
                type="text"
                name='email'
                value={formValues.email}
                onChange={handleInputChange}
                />
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
                  <input
                  type="text"
                  name='cep'
                  value={formValues.cep}
                  onChange={handleInputChange}
                  onBlur={checkCEP}
                  />
                </div>
                <a target="_blank" href= "https://buscacepinter.correios.com.br/app/endereco/index.php" rel="noreferrer" >Não sei meu cep</a>
              </WrapperCep>
              <WrapperComplement>
                <div>
                  <span>Número</span>
                  <input
                  type="text"
                  name='number'
                  value={formValues.number}
                  onChange={handleInputChange} />
                </div>
                <div>
                   <span>Complemento</span>
                   <input
                   type="text"
                   name='complement'
                   value={formValues.complement}
                   onChange={handleInputChange}
                   />
                </div>
              </WrapperComplement>

            </AddressBox>
            <AddressBox width='456px'>
                <span>Endereço</span>
                <input
                type="text"
                value={formValues.address}
                name='address'
                onChange={handleInputChange}
                />
              <WrapperCityandState>
                <City width='308px'>
                  <span>Cidade</span>
                  <select name="city" id="cidade" onChange={handleInputChange}>
                    <option value="">Selecione uma cidade...</option>
                    {cities.map((city, index)=>{
                      const {id,nome}= city;
                      return(<option key={index} value={id}>{nome}</option>)
                    })}
                  </select>
                </City>
                <State width='59px'>
                  <span>Estado</span>
                  <select name="state" id="estado" onChange={handleInputChange} >
                    <option>...</option>
                    {states.map((state, index)=>{
                      const {nome, sigla}  = state;
                      return(<option key={index} value={sigla}>{nome}</option>)
                    })}
                  </select>
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
              <Button onClick={()=>navigate('/thanks')}>Finalizar e contratar</Button>
          </WrapperContractButton>
        </Container>
    );
}

export default FinishContract;
