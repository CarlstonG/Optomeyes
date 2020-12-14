import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const ImageBg =  styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`
export const HeroContent = styled.div`
 z-index: 3;
 max-width: 1200px;
 position: absolute;
 padding: 8px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;
`
export const HeroH1 = styled.h1`
color: black;
font-size: 75px;
text-align: right;

@media screen and (max-width: 768px) {
    font-size: 60px;
}

`
export const HeroH2 = styled.h2`
color: black;
font-size: 32px;
text-align: right;

@media screen and (max-width: 768px) {
    font-size: 25px;
}

`

export const Span = styled.span`
color: #00ADEF;
font-size: 75px;
`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`