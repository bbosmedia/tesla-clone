import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


function Section({id, title, description, images, leftBtn, rightBtn, downarrow}) {

    return (
        <Wrap key={id} img={images}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                {description && <p>{description}</p> }
            </ItemText>
            </Fade>
            <Buttons>
            <ButtonGroup>
                <Zoom>
                <LeftButton right={rightBtn}>
                    {leftBtn}
                </LeftButton>
                </Zoom>
                
                {rightBtn && <Zoom><RightButton>
                    {rightBtn}
                </RightButton></Zoom>}
                
            </ButtonGroup>
            {downarrow && <DownArrow className="scrollButton" src="/images/down-arrow.svg" onClick={()=>{window.scrollBy(0, window.innerHeight)}} />}
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
width: 100%;
height: 100vh;
background-image: ${props => `url(/images/${props.img})`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

.scrollButton{
    cursor: pointer;
}

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
h1{
    font-size: 32px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
}

p{
    font-size: 16px;
    color: #555;
}
`

const ButtonGroup = styled.div`
display: flex;
padding-bottom: 5vh;
@media(max-width: 768px){
    flex-direction: column;
    padding-bottom: 2vh;
}
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
margin-right: ${props => props.right ? `20px` : `0px`};
@media(max-width: 768px){
    margin-bottom: 10px;
}
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
