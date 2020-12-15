import React, {useState} from 'react'
import { StyledFormWrapper, StyledInput, StyledForm, StyledFieldset, StyledTextArea, StyledError, StyledButton } from './BookingSecion'


const initialState = {
    name: '',
    email: '',
    day: '',
    message: '',
}

export default function BookingSecion() {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {

    }
    const handleInput = e => {

    }


    return (
        <>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit} action="contact" method="post">
                    <h2>BOOK YOUR APPOINTMENT</h2>
                    <label htmlFor="name">Name</label>
                    <StyledInput type="text" name="name" value={state.name} onChange={handleInput}/>
                    <label htmlFor="email">Email</label>
                    <StyledInput type="text" name="email" value={state.email} onChange={handleInput}/>
                    <StyledFieldset>
                        <legend>Preferred Day of week:</legend>
                        <label><input type="radio" value="Monday" name="Monday"/>Monday</label>
                        <label><input type="radio" value="Tuesday" name="Tuesday"/>Tuesday</label>
                        <label><input type="radio" value="Wednesday" name="Wednesday"/>Wednesday</label>
                        <label><input type="radio" value="Thursday" name="Thursday"/>Thursday</label>
                        <label><input type="radio" value="Friday" name="Friday"/>Friday</label>
                        <label><input type="radio" value="Saturday" name="Saturday"/>Saturday</label>
                    </StyledFieldset>
                    <label htmlFor="message">Message</label>
                    <StyledTextArea name="message"/>
                    <StyledError><p>Error Message</p></StyledError>
                    <StyledButton type="submit">SUBMIT</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}
