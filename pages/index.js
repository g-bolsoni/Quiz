import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/Components/Widget';
import Footer from '../src/Components/Footer';
import QuizBackground from '../src/Components/QuizBackground';
import GitHubCorner from '../src/Components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name ,setName] = React.useState('');
  console.log(name + setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Básico</title>
      </Head>
      {/* Mostrar a parte esquerda */}
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              // console.log(('Fazendo uma submissão no form'));
            }}
            >
              <input
                type="text"
                placeholder="Seu nome"
                autoComplete="true"
                onChange={(event) => {
                  // console.log(event.target.value);
                  // State
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>The legend of zelda</h1>
            <p>loren ipsun tataug kjhbsfai sbikab</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/g-bolsoni" />
    </QuizBackground>

  );
}
