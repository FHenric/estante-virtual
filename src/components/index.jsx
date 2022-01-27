import React, { useState } from 'react';

import * as S from './styles'

function Estante() {

    const [books, setBooks] = useState([])
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [author, setAuthor] = useState('')

    

    const submitBook = (e) => {
        e.preventDefault()
        
        const book = {
            name,
            author,
            year
        }
        
        if(book.name === ''){
            window.alert('Não podemos registrar um livro sem nome!')
        } else if( book.author === ''){
            window.alert('Não podemos registrar um livro sem Autor!')
        } else if (book.year === '') {
            window.alert('Não podemos registrar um livro sem a seu ano de lançamento!')
        } else {
           setBooks([...books, book]) 
        }
    }

    const eraser = (e) => {
        const newList = books.filter((el) => el.name !== e);
        setBooks(newList)
    }

    

  return (

    <S.Box>
        <S.Title>Estante Virtual</S.Title>

        <S.Form onSubmit={submitBook}>
            <S.Label>Nome do livro</S.Label>
            <S.Input type='text' value={name} name='name' placeholder='Liber Null' onChange={e => setName(e.target.value)}/>
            <S.Label>Autor(a)</S.Label>
            <S.Input type='text' value={author} name='autor' placeholder='Peter J. Carroll' onChange={e => setAuthor(e.target.value)}/>
            <S.Label>Ano de lançamento</S.Label>
            <S.Input type='number' value={year} name='ano' placeholder='1978' onChange={e => setYear(e.target.value)}/>
            <S.Button bgColor={'rgb(5, 0, 78)'} color='#fff' type='submit' value='submit'>Adicionar</S.Button>
        </S.Form>

        <S.ListBox>

            {books.map((el) => (
                <S.BookContainer>
                    <S.BookText>{el.name}</S.BookText>
                    <S.BookText>{el.author}</S.BookText>
                    <S.BookText>{el.year}</S.BookText>
                    <S.Button bgColor={'rgb(247, 97, 71)'} botton='15px' onClick={() => eraser(el.name)}>Excluir</S.Button>
                </S.BookContainer>
            ))}
            
        </S.ListBox>
        
    </S.Box>

  );
}

export default Estante;