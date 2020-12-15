import styled from 'styled-components'


export const SharedStyles = styled.div`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
padding: 20px;
box-sizing: border-box;
`


export const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 20px;
`
export const StyledForm = styled.form`
width: 100%;
max-width: 700px;
padding: 40px;
background-color: #fff;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`
export const StyledInput = styled.input`
display:block;
width:100%;
background-color: #eee;
border-radius: 5px;
border: 1px solid #ddd;
padding: 20px;
box-sizing: border-box;

`
export const StyledTextArea = styled.textarea`
background-color: #eee;
width: 100%;
resize: none;

`
export const StyledButton = styled.button`
display: block;
background-color: #f7797d;
color: #fff;
font-size: 1rem;
border: 0;
border-radius: 5px;
height: 40px;
padding: 1px 100px;
cursor: pointer;
box-sizing: border-box;
justify-content: center;
align-items: center;

:hover {
    background-color: skyblue;
color: black;
}
`
export const StyledFieldset = styled.fieldset`
border: 1px #ddd;
border-radius: 5px;
padding: 10px;
margin: 20px 0;

legend {
    padding: 0 10px;
}
label {
    padding-right: 20px;

}
input {
    margin-right: 10px;
}
`
export const StyledError = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;

`