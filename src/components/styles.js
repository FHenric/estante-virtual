import styled from "styled-components";

export const Box = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 35px;
    color: purple;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 350px;
    width: 400px;
    margin-bottom:40px ;
    border: 1px solid red;
`

export const Label = styled.label`
    font-size: 18px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    height: 30px;
    width: 150px;
    margin-bottom: 15px;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    margin-top: 20px;
    background-color: ${(props) => props.color} ;
    margin-bottom: ${(props) => (props.botton ? props.botton : 0)};

`

export const ListBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90vw;
    color: purple;
`

export const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    width:200px;
    border: 1px solid blue;
`

export const BookText = styled.p`
    font-size: 20px;
`