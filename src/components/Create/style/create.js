import styled from 'styled-components';
export const Container = styled.section`
    padding: 8em 4em 2em 4em;
    display:grid;
    grid-template-columns: repeat(12, 1fr);
`
export const Form = styled.form`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 50%;
    margin:auto;
    grid-column: 1/-1;
`

export const Input = styled.input`
    padding:1rem;
    border-radius:1rem;
    border:1px solid #000;
    margin:1rem;
`

export const Dropdown = styled.select`
    padding:1rem;
    border-radius:1rem;
    border:1px solid #000;
    margin:1rem;
`

export const Alternative = styled.option`
`
export const Submit = styled.input`
    padding:1rem;
    border-radius:1rem;
    border:1px solid #000;
    margin:1rem;
`

