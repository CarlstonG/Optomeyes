import styled from 'styled-components'

export const InfoContainer = styled.div`
color: white;
padding: 0 1px;
margin: 0;
background: #3E4450;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`
export const SecondInfoContainer = styled.div`
color: black;
padding: 0;
margin: 0;
background: white;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`
export const ThirdInfoContainer = styled.div`
color: white;
padding: 0 1px;
margin: 0;
background: #3E4450;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}

`


export const InfoWrapper = styled.div`

display: grid;
z-index: 1;
height: 600px;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 0 1px;
justify-content: center;


@media screen and (max-width: 480px) {
    font-size: 25px;
    display: flex;
    flex-direction: column;
}

`
export const InforRow = styled.div`

display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
width: 100%;
margin-bottom: 0px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
width: 100%;
margin-bottom: 0px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 700px;
padding-top: 0;
padding-bottom: 10px;
`

export const TopLine = styled.p`
color: #fff;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-decoration: uppercase;
margin-bottom: 16px;
`
export const TopLine2 = styled.p`
color: black;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-decoration: uppercase;
margin-bottom: 16px;
`


export const Heading = styled.h1`
color: #00ADEF;
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#00ADEF' : '#00ADEF')};

@media screen and (max-width: 480px) {
    font-size: 25px;
    text-align: center;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
-o-object-fit: cover;
object-fit: cover;
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: left;
align-items: center;
@media screen and (max-width: 480px) {
    font-size: 25px;
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
}
`

