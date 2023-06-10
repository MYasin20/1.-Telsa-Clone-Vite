import React from 'react'
import Section from './Section';
import { accessories } from '../carInfo';

const displayAccessories = () => {
  return accessories.map((acc, index) => (
    <Section 
      key={index}
      name={acc.title}      
      desc={acc.description}
      img={acc.image}
      leftBtnText="Shop Now"
    />
  ));
}

function Accessories() {
  return (
    <div>{ displayAccessories() }</div>
  )
}

export default Accessories