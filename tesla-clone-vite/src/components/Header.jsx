import React, { useState } from 'react'
import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const burgerNavLists = [
    'Existing Inventory',
    'Used Inventory',
    'Trade-In',
    'Demo Drive',
    'Insurance',
    'Cybertruck',
    'Roadster',
    'Semi',
    'Charging',
    'Commercial',
    'Utilities',
    'Find Us',
    'Support',
    'Investor Relations'
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Container>
      <Logo>
        <a href='/#'><img src='/images/logo.svg' alt='tesla logo' /></a>
      </Logo>

      <MiddleMenu>
        <a href='/#'>Model S</a>
        <a href='/#'>Model 3</a>
        <a href='/#'>Model X</a>
        <a href='/#'>Model Y</a>
        <a href='/#'>Solar Roof</a>
        <a href='/#'>Solar Panels</a>
        <a href='/#'>Powerwall</a>
      </MiddleMenu>

      <RightMenu>
        <a href='/#'>Shop</a>
        <a href='/#'>Account</a>
      </RightMenu>

      <MenuBurger onClick={handleMenu}>
        <a href='/#'>Menu</a>
      </MenuBurger>

      <BurgerNav isOpen={isMenuOpen}>
        <CloseWrapper >
          <BurgerClose onClick={handleMenu}/>
        </CloseWrapper>
        {burgerNavLists.map((list, index) => (
          <li key={index}><a href='/#'>{list}</a></li>
        ))}

        <li>
          <Language>
            <ChangeLanguage />
            <div>
              <p>United States</p>
              <a href="/#">English</a>
            </div>
          </Language>
        </li>
        
      </BurgerNav>

    </Container>
  )
}

export default Header;

const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  min-height: 60px;
  padding-inline: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`

const Logo = styled.div`
  flex: 0.5;
`

const MiddleMenu = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;

  a {
    padding: 5px 15px;
    font-weight: 500;
  }

  a:hover {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    transition: background-color 0.2s ease-in;
  }

  @media(max-width: 1230px) {
    a {
    padding: 5px 10px;
    }
  }

  @media(max-width: 1110px) {
    display: none;
  }
`

const RightMenu = styled(MiddleMenu)`
  flex: 0.5;
`

const MenuBurger = styled.div`
  a {
    border-radius: 5px;
    padding: 5px;
    font-weight: 500;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media(max-width:1110px) {
    a {
      background: rgba(0, 0, 0, 0.05);
      padding-inline: 10px;
    }
    a:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-bottom: 30px;
`

const BurgerClose = styled(CloseIcon)``

const BurgerNav = styled.div`
  position: fixed;
  top:0;
  right: 0;
  bottom:0;
  background: white;
  width: 290px;
  z-index: 100;
  padding: 20px 30px;
  transform: ${props => props.isOpen ? `translateX(0)` : `translateX(100%);`};
  transition: transform 0.3s ease-in;
  li {
    border-radius: 5px;
    padding: 12px 0;
    cursor: pointer;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  a {
    padding: 0 10px;
    font-weight: 500;
  }

`

const Language = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 55px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  div p {
    margin-bottom: 8px;
  }
  div a {
    font-weight: 400;
    padding: 0;
    font-size: 0.9rem;
  }
  div a:hover {
    border-bottom: 2px solid black;
    background-color: transparent;
  }
  `

const ChangeLanguage = styled(LanguageIcon)`
  margin-inline: 10px;
`