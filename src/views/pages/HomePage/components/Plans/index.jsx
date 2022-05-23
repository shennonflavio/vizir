import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkIcon} from '../../../../../assets';
import { planData } from './planData';
import { BoxPlans, Container, ContractButton, PlanSubtitle, PlanTitle, WrapperPlans, WrapperPlanTitles } from './styles';

function Plans() {

  const navigate = useNavigate()

  return (
    <Container>
      <WrapperPlanTitles>
        <PlanTitle>Planos</PlanTitle>
        <PlanSubtitle>
          <p>Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
          </PlanSubtitle>
      </WrapperPlanTitles>
      <WrapperPlans>
       {planData.map((items, index)=> (
       <BoxPlans key={index}>
          <img src={items.icon} alt="forma abstrata com número do plano" />
          <b>{items.plan}</b>
          <div className='imgPrice'>
           {items.plan === 'Personalizado' ?
           <p><b> Customize o plano<br/> do seu jeito!</b></p> :
           <img  src={items.price} alt="preço do plano"/> }
          </div>
          <p>{items.text}.</p>
          <strong>{items.title}</strong>
          <ul>
            <li> <img src={checkIcon} alt="" /> {items.subtitle}</li>
            <li> <img src={checkIcon} alt="" /> {items.subtitle}</li>
            <li> <img src={checkIcon} alt="" /> {items.subtitle}</li>
          </ul>
          <ContractButton onClick={()=> navigate('/contract')} type='button'>{items.plan === 'Personalizado' ?  'Customizar': 'Contratar' }</ContractButton>
       </BoxPlans>))}
      </WrapperPlans>
    </Container>);
}

export default Plans;
