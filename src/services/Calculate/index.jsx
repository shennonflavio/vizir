import { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { format } from '../../Utils/format';

import { Container, PricePlan } from './styles';

function Calculate({ cacthValues }) {
  const [planValues, setPlanValues] = useState(0);
  const [noPlanValues, setNoPlanValues] = useState(0);

  const values = Object.entries(cacthValues)
    .map(([, value]) => `${value}`)
    .join()
    .split(',')
    .map((value) => Number(value.replace(/[^0-9]/g, '')));


    const origin = values[0];
    const destiny = values[1];
    const time = values[2];
    const plan = values[3];
    const price1 = 1.9;
    const price2 = 1.7;
    const price3 = 2.9;
    const price4 = 2.7;
    const price5 = 0.9;
    const price6 = 1.9;
    const discount = Math.floor((planValues / 100) * 34);

    useEffect(() => calcPlanValues(), [origin, destiny, time, plan]);

  function calcPlanValues() {
    if (origin === 11 && destiny === 16 && time === 20 && plan >= 30) {
      setPlanValues(0);
      setNoPlanValues(price1 * time);
    } else {
      setNoPlanValues(price1 * time);
      setPlanValues((price1 * time) - discount);


    }
    if (origin === 11 && destiny === 17 && time >= 20 && plan >= 30) {
      setNoPlanValues(price2 * time);
      setPlanValues(price2 * time - discount);
    }

    if (origin === 16 && destiny === 11 && time >= 20 && plan >= 30) {
      setNoPlanValues(price3 * time);
      setPlanValues(price3 * time - discount);
    }

    if (origin === 17 && destiny === 11 && time >= 20 && plan >= 30) {
      setNoPlanValues(price4 * time);
      setPlanValues(price4 * time - discount);
    }

    if (origin === 11 && destiny === 18 && time >= 20 && plan >= 30) {
      setNoPlanValues(price5 * time);
      setPlanValues(price5 * time - discount);
    }

    if (origin === 18 && destiny === 11 && time >= 20 && plan >= 30) {
      setNoPlanValues(price6 * time);
      setPlanValues(price6 * time - discount);
    }
  }



  return (
     <Container>
      <PricePlan>
        <b>Sem FaleMais -</b>
        {format(noPlanValues)}
      </PricePlan>
      <PricePlan>
        <b>Com FaleMais -</b>
        {format(planValues)}
      </PricePlan>
    </Container>

  );
}

export default Calculate;

Calculate.propTypes = {
  cacthValues: object.isRequired,
};
