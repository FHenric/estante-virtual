import styled from "styled-components";

export const Box = styled.div`
    
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 35px;
    color: #fff;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 350px;
    width: 400px;
    margin-bottom:40px ;
    background-color: rgb(116, 208, 236);
    border-radius: 20px;
`

export const Label = styled.label`
    font-size: 18px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    height: 30px;
    width: 150px;
    margin-bottom: 15px;
    &::-webkit-input-placeholder {
        color: rgb(207, 201, 201);
    }
    border:0.5px solid rgb(5, 0, 78) ;
    border-radius: 10px;

`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    margin-top: 20px;
    background-color: ${(props) => props.bgColor} ;
    margin-bottom: ${(props) => (props.botton ? props.botton : 0)};
    color: ${(props) => props.color} ;
    border-radius: 5px;
    cursor: pointer;
`

export const ListBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90vw;
    
`

export const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    width:200px;
    background-color: rgb(116, 208, 236);
    border-radius: 20px;
`

export const BookText = styled.p`
    font-size: 20px;
`