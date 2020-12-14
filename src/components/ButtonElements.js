import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: #00ADEF;
white-space: nowrap;
padding: ${(big) => (big ? '14px 48px' : '12px 30px')};
font-size:20px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
text-transform: uppercase;
color: black;
`