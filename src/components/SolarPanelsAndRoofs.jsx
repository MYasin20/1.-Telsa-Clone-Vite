import React from 'react'
import Section from './Section';
import { solarPanelAndRoofs } from '../carInfo';

const displaySolar = () => {
  return solarPanelAndRoofs.map((solar, index) => (
    <Section 
      key={index}
      name={solar.title}      
      desc={solar.description}
      img={solar.image}
      leftBtnText="Order Now"
      rightBtnText="Learn More"
    />
  ));
}

function SolarPanelsAndRoofs() {
  return (
    <div>{displaySolar()}</div>
  )
}

export default SolarPanelsAndRoofs