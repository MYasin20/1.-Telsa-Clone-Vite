import React from 'react';
import styled from 'styled-components';
import { Fade as Slide } from "react-awesome-reveal";

function Section({ name, id, desc, img, leftBtnText, rightBtnText, underlined }) {

  return (
    <Wrap bgImg={img}>
      <Slide direction='down'>
        <ItemText isUnderlined={underlined}>
          <h1>{name}</h1>
          {id < 2 ?
            <>
              <p>{desc[0]}</p>
              <p style={{ marginTop: '0.5rem' }}>{desc[1]}</p>
            </>
            :
            <a href='/#'>{desc}</a>
          }
        </ItemText>
      </Slide>

      <Buttons>
        <ButtonGroup>
          <Slide direction='up'>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>
            }

          </Slide>
        </ButtonGroup>

        {/* <DownArrow src='images/down-arrow.svg' /> */}
      </Buttons>

    </Wrap>
  )
}

export default Section;


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url('images/${props.bgImg}');`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const ItemText = styled.div`
  padding-top: 15vh;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
  }

  & a {
    font-size: 1rem;
    border-bottom: ${props => props.isUnderlined && `2px solid;`};
    border-color: ${props => props.isUnderlined && `rgba(0, 0, 0, 0.5);`};
  }

`

const Buttons = styled.div`
  margin-bottom: 10px;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: white;
  color: rgba(61, 64, 68, 0.8);
  width: 256px;
  height: 40px;
  border-radius: 3px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  :hover {
    background-color: white;
  }
`

const RightButton = styled(LeftButton)`
  background-color: rgba(61, 64, 68, 0.8);
  color: white;
  opacity: 0.65;
  :hover {
    background-color: rgba(61, 64, 68, 1);
    opacity: 1;
  }
`

// const DownArrow = styled.img`
//   height: 40px;
//   animation: animateDown infinite 1.5s;
//   cursor: pointer;
//   /* overflow-x: hidden; */
// `