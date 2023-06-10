import React from 'react'
import Section from './Section';
import cars from '../carInfo';

const displayCar = () => {
  return cars.map((car, index) => (
    <Section 
      key={index}
      id={index}
      name={car.title}
      desc={car.description}
      img={car.image}
      leftBtnText="Order Now"
      rightBtnText="Demo Drive"
      underlined={true}
    />
  ));
}

function Cars() {
  return (
    <div>
      {displayCar()}
    </div>
  )
}

export default Cars