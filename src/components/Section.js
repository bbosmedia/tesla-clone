import React from 'react'
import styled from 'styled-components'


function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
width: 100%;
height: 100vh;
background-image: url("/images/model-s.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
padding-bottom: 5vh;
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin-right: 20px;
`

const RightButton = styled(LeftButton)`
background: white; color: black; opacity: 0.65; `;

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
animation: animateDown 1s linear infinite;
`
const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`



export default Section
