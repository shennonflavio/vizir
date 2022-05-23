import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrowDownIcon } from '../../../../../assets';

import {
  Calc,
  Container,
  Select,
  Plan,
  Selects,
  Subtitle,
  Title,
  Total,
  WrapperCalc,
  WrapperTitle,
  SelectTitle,
  SelectSubtitle,
  Divider,
  Dropdown,
  ListItem,
  DropdownPlan,
  WrapperCheckbox,
  PlanButton,
  CheckboxItem,
  Button,
  PlanOptionSelected,
  WrapperContractButton,
  ButtonContract,
  // WrapperTotal,
} from './styles';

function CalcContent() {

  const navigate = useNavigate();

  const [dropdownOrigin, setDropdownOrigin] = useState(false);
  const [dropdownDestiny, setDropdownDestiny] = useState(false);
  const [dropdownTime, setDropdownTime] = useState(false);
  const [dropdownPlan, setDropdownPlan]= useState(false);
  const [selectedOriginOption, setSelectedOriginOption] = useState(null);
  const [selectedDestinyOption, setSelectedDestinyOption] = useState(null);
  const [selectedTimeOption, setSelectedTimeOption] = useState(null);
  const [selectedPlanOption, setSelectedPlanOption] = useState(null);

  function onOptionOriginClicked(value){
    setSelectedOriginOption(value);
    setDropdownOrigin(false);
  };
  function onOptionDestinyClicked(value){
    setSelectedDestinyOption(value);
    setDropdownDestiny(false);
  };

  function onOptionTimeClicked(value) {
    setSelectedTimeOption(value);
    setDropdownTime(false);
  };

  function planClicked(item) {
    setSelectedPlanOption(item);
  }



  const options = [
    '011- São Paulo ',
    '012- Lorem Ipsum',
    '013- Sit Amet',
    '018- Duis aute',
    '021- Consequat',
  ];

  const time = [
    '30 min',
    '60 min',
    '120 min'
  ];

  const plan = [
    'FaleMais 30',
    'FaleMais 60',
    'FaleMais 120'
  ]


  return (
    <Container>
      <WrapperTitle>
        <Title>Faça o cálculo do FaleMais</Title>
        <Subtitle>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Subtitle>
      </WrapperTitle>
      <WrapperCalc>
        <Calc>
          <Selects>
            <Select>
              <SelectTitle>ORIGEM</SelectTitle>
              <Divider
                opened={dropdownOrigin}
                onClick={() => setDropdownOrigin((prev) => !prev)}
                >
                <SelectSubtitle>{selectedOriginOption || 'Escolher origem'}</SelectSubtitle>
                <img src={arrowDownIcon} alt='seta para baixo' />
              </Divider>
               {dropdownOrigin  && (
                <Dropdown
                opened={dropdownOrigin}
                >
                  {options.map((optionOrigin) => (
                    <ListItem
                      onClick={()=>onOptionOriginClicked(optionOrigin)}
                      key={Math.random()}
                    >
                      {optionOrigin}
                    </ListItem>
                  ))}
                </Dropdown>
              )}
            </Select>
            <Select  className='middle'>
              <SelectTitle>DESTINO</SelectTitle>
              <Divider
                opened={dropdownDestiny}
                onClick={() => setDropdownDestiny((prev) => !prev)}
              >
                <SelectSubtitle>{selectedDestinyOption || 'Escolher destino'}</SelectSubtitle>
                <img src={arrowDownIcon} alt='seta para baixo' />
              </Divider>
              {dropdownDestiny && (
                <Dropdown
                opened={dropdownDestiny}
                >
                  {options.map((option) => (
                    <ListItem
                      onClick={()=>onOptionDestinyClicked(option)}
                      key={Math.random()}
                    >
                      {option}
                    </ListItem>
                  ))}
                </Dropdown>
              )}
            </Select>
            <Select>
              <SelectTitle>TEMPO</SelectTitle>
              <Divider
              opened={dropdownTime}
              onClick={()=> setDropdownTime((prev)=> !prev)}
              >
                <SelectSubtitle>{selectedTimeOption || 'Escolher tempo'}</SelectSubtitle>
                <img src={arrowDownIcon} alt='seta para baixo' />
              </Divider>
              {dropdownTime &&
              <Dropdown
              opened={dropdownTime}
              >
               {time.map((value)=>(
                <ListItem
                onClick={()=>onOptionTimeClicked(value)}
                key={Math.random()}
                >
                  {value}
                </ListItem>
              ))}
              </Dropdown>
              }
            </Select>
          </Selects>
          <Plan>
            <SelectTitle>PLANO</SelectTitle>
            <Divider
               opened={dropdownPlan}
            onClick={()=> setDropdownPlan((prev)=> !prev)}
            >
              <SelectSubtitle>
                {selectedPlanOption ?
              <PlanOptionSelected>
              { selectedPlanOption}
              <span aria-hidden="true" type='button' onClick={()=>setSelectedPlanOption(!selectedPlanOption)}>x</span>
              </PlanOptionSelected> :'Escolher o plano'
              }</SelectSubtitle>

              <img
              aria-hidden="true"

              src={arrowDownIcon} alt='seta para baixo'/>

            </Divider>
            {dropdownPlan &&
            <DropdownPlan
            opened={dropdownPlan}
            >
              <SelectTitle>Escolha um ou mais planos:</SelectTitle>
              <WrapperCheckbox>
                {plan.map((item)=>(
                  <CheckboxItem
                    key={Math.random()}
                  >
                  <input onClick={()=>planClicked(item)} type="checkbox"/>
                  <b>{item}</b>
                </CheckboxItem>
                ))}

              </WrapperCheckbox>
              <PlanButton>
                <Button
                onClick={()=>setDropdownPlan(false)}
                >Aplicar</Button>
              </PlanButton>
            </DropdownPlan>
            }

          </Plan>
          {/* <WrapperTotal> */}

          <Total>
            <b>Total</b>
            <b>R$ 0,00</b>
            </Total>

          {
            selectedOriginOption &&
            selectedDestinyOption &&
            selectedTimeOption &&
            selectedPlanOption &&
            <WrapperContractButton>
              <ButtonContract onClick={()=> navigate('/contract')} type='button'>Contratar</ButtonContract>
            </WrapperContractButton>
          }
          {/* </WrapperTotal> */}
        </Calc>
      </WrapperCalc>
    </Container>
  );
}

export default CalcContent;
