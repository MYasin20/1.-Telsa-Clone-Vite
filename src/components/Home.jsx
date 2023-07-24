import React, { useRef } from 'react'
import Cars from './Cars';
import SolarPanelsAndRoofs from './SolarPanelsAndRoofs';
import Accessories from './Accessories';
import styled from 'styled-components';
import useScrollSnap from "./useScrollSnap";

function Home() {
  const container = useRef(Main);

  const [bind, unbind] = useScrollSnap(
    container,
    { snapDestinationY: "100vh", threshold: 0.1, },
  );
  return (
    <Main ref={container}>
      <Cars />
      <SolarPanelsAndRoofs />
      <Accessories />
    </Main>
  )
}
const Main = styled.div`
  overflow: auto;
  position: absolute;
  overflow-x: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
`
export default Home;