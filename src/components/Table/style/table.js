import styled from 'styled-components';
export const Container = styled.section`
    padding: 1em 4em 2em 4em;
    display:grid;
    grid-template-columns: repeat(12, 1fr);
`
export const Row = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    padding: 2em;
    border-bottom:0.1em solid black;
`
export const Name = styled.p`
    font-size: 1rem;

`
export const Button = styled.button`
    border:1px solid black;
    border-radius: 1em;
    background:white; 
    cursor:pointer;
`
export const Delete = styled.button`
    border:1px solid red;
    border-radius: 1em;
    background:white; 
    cursor:pointer;
`