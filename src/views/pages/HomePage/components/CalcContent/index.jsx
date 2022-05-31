import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrowDownIcon } from '../../../../../assets';
import calc from '../../../../../services/calc';

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
  const [dropdownPlan, setDropdownPlan] = useState(false);
  const [selectedOriginOption, setSelectedOriginOption] = useState();
  const [selectedDestinyOption, setSelectedDestinyOption] = useState();
  const [selectedTimeOption, setSelectedTimeOption] = useState();
  const [selectedPlanOption, setSelectedPlanOption] = useState();

  function onOptionOriginClicked(value,id) {
    setSelectedOriginOption(value, id);
    setDropdownOrigin(false);
  }
  function onOptionDestinyClicked(value) {
    setSelectedDestinyOption(value);
    setDropdownDestiny(false);
  }

  function onOptionTimeClicked(value) {
    setSelectedTimeOption(value);
    setDropdownTime(false);
  }

  function planClicked(item) {
    setSelectedPlanOption(item);
  }

  function handleApplyButton() {
    calc(
      selectedOriginOption.id,
      selectedDestinyOption,
      selectedTimeOption,
      selectedPlanOption,
    );
    setDropdownPlan(false);
  }

  const options = [
    {
      id: '11',
      value: '011- São Paulo ',
    },
    {
      id: '12',
      value: '012- Lorem Ipsum',
    },
    {
      id: '13',
      value: '013- Sit Amet',
    },
    {
      id: '18',
      value: '018- Duis aute',
    },
    {
      id: '21',
      value: '021- Consequat',
    },
  ];


  const time = [
    '20 min',
    '30 min',
    '60 min',
    '80 min',
    '100 min',
    '120 min',
    '200 min',
  ];

  const plan = ['FaleMais 30', 'FaleMais 60', 'FaleMais 120'];

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
                <SelectSubtitle>
                  {selectedOriginOption || 'Escolher origem'}
                </SelectSubtitle>
                <img src={arrowDownIcon} alt='seta para baixo' />
              </Divider>
              {dropdownOrigin && (
                <Dropdown opened={dropdownOrigin}>
                  {options.map((optionOrigin) => (
                    <ListItem
                      value={optionOrigin.id}
                      onClick={() => onOptionOriginClicked(optionOrigin.value, optionOrigin.id)}
                      key={Math.random()}
                    >
                      {optionOrigin.value}
                    </ListItem>
                  ))}
                </Dropdown>
              )}
            </Select>
            <Select className='middle'>
              <SelectTitle>DESTINO</SelectTitle>
              <Divider
                opened={dropdownDestiny}
                onClick={() => setDropdownDestiny((prev) => !prev)}
              >
                <SelectSubtitle>
                  {selectedDestinyOption || 'Escolher destino'}
                </SelectSubtitle>
                <img src={arrowDownIcon} alt='seta para baixo' />
              </Divider>
              {dropdownDestiny && (
                <Dropdown opened={dropdownDestiny}>
                  {options.map((optionDestiny) => (
                    <ListItem
                      value={optionDestiny.id}
                      onClick={() =>
                      onOptionDestinyClicked(optionDestiny.value)
                      }
                      key={Math.random()}
                    >
                      {optionDestiny.value}
                    </ListItem>
                  ))}
                </Dropdown>
              )}
            </Select>
            <Select>
              <SelectTitle>TEMPO</SelectTitle>
              <Divider
                opened={dropdownTime}
                onClick={() => setDropdownTime((prev) => !prev)}
              >
                <SelectSubtitle>
                  {selectedTimeOption || 'Escolher tempo'}
                </SelectSubtitle>
                <img src={arrowDownIcon} alt='seta para baixo' />
              </Divider>
              {dropdownTime && (
                <Dropdown opened={dropdownTime}>
                  {time.map((time) => (
                    <ListItem
                      onClick={() => onOptionTimeClicked(time)}
                      key={Math.random()}
                    >
                      {time}
                    </ListItem>
                  ))}
                </Dropdown>
              )}
            </Select>
          </Selects>
          <Plan>
            <SelectTitle>PLANO</SelectTitle>
            <Divider
              opened={dropdownPlan}
              onClick={() => setDropdownPlan((prev) => !prev)}
            >
              <SelectSubtitle>
                {selectedPlanOption ? (
                  <PlanOptionSelected>
                    {selectedPlanOption}
                    <span
                      aria-hidden='true'
                      type='button'
                      onClick={() => setSelectedPlanOption(!selectedPlanOption)}
                    >
                      <b>x</b>
                    </span>
                  </PlanOptionSelected>
                ) : (
                  'Escolher o plano'
                )}
              </SelectSubtitle>
              <img
                aria-hidden='true'
                src={arrowDownIcon}
                alt='seta para baixo'
              />
            </Divider>

            {dropdownPlan && (
              <DropdownPlan opened={dropdownPlan}>
                <SelectTitle>Escolha um ou mais planos:</SelectTitle>
                <WrapperCheckbox>
                  {plan.map((item) => (
                    <CheckboxItem key={Math.random()}>
                      <input
                        onClick={() => planClicked(item)}
                        type='checkbox'
                      />
                      <b>{item}</b>
                    </CheckboxItem>
                  ))}
                </WrapperCheckbox>
                <PlanButton>
                  <Button onClick={() => handleApplyButton()}>Aplicar</Button>
                </PlanButton>
              </DropdownPlan>
            )}
          </Plan>
          {/* <WrapperTotal> */}

          <Total>
            <b>Total</b>
            <b>R$ 0,00</b>
          </Total>

          {selectedOriginOption &&
            selectedDestinyOption &&
            selectedTimeOption &&
            selectedPlanOption && (
              <WrapperContractButton>
                <ButtonContract
                  onClick={() => navigate('/contract')}
                  type='button'
                >
                  Contratar
                </ButtonContract>
              </WrapperContractButton>
            )}
          {/* </WrapperTotal> */}
        </Calc>
      </WrapperCalc>
    </Container>
  );
}

export default CalcContent;
