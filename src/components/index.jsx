import React from 'react';

import * as S from './styles'

function Estante() {
  return (

    <S.Box>
        <S.Title>Estante Virtual</S.Title>

        <S.Form>
            <S.Label>Nome do livro</S.Label>
            <S.Input type='text' name='nome' placeholder='Liber Null'/>
            <S.Label>Autor(a)</S.Label>
            <S.Input type='text' name='autor' placeholder='Peter J. Carroll'/>
            <S.Label>Ano de lançamento</S.Label>
            <S.Input type='number' name='ano' placeholder='1978'/>
            <S.Button color={'blue'}>Adicionar</S.Button>
        </S.Form>

        <S.ListBox>
            <S.BookContainer>
                <S.BookText>Liber Null</S.BookText>
                <S.BookText>Peter J. Carroll</S.BookText>
                <S.BookText>1978</S.BookText>
                <S.Button color={'red'} botton='15px'>Excluir</S.Button>
            </S.BookContainer>
            
        </S.ListBox>
        
    </S.Box>

  );
}

export default Estante;