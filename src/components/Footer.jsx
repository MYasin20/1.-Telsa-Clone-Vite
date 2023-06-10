import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <a href='/#'>Tesla &copy; 2023</a>
      <a href='/#'>Privacy & Legal</a>
      <a href='/#'>Vehicle Recalls</a>
      <a href='/#'>Contact</a>
      <a href='/#'>Career</a>
      <a href='/#'>News</a>
      <a href='/#'>Engage</a>
      <a href='/#'>Location</a>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 25px;
  a {
    font-size: 12px;
    font-weight: 600;
    color: grey;
    margin: 10px;
  }
`