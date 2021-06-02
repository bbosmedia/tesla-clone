import React from 'react'
import styled from 'styled-components'


function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
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
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
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
`

const RightButton = styled(LeftButton);


const ButtonGroup = styled.div``



export default Section
