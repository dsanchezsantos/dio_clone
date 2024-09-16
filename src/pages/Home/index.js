import React from 'react'

import { Header } from "../../components/Header";

import { Container, 
        Row, 
        Column, 
        BigText, 
        FormTitle, 
        FormSubTitle, 
        FormDiv, 
        InputDiv, 
        InputIcon, 
        ButtonDiv, 
        FormSubText, 
        RedirectToLogin } from "./styles";
import person_icon from "../../assets/person_icon.png";
import email_icon from "../../assets/mail_icon.png";
import lock_icon from "../../assets/lock_icon.png";

export const App = () => {
  return (
    <div className="App">

      <Header />

      <Container>
        
        <Row>

        <Column>
        
          <BigText>A plataforma para você<br></br> aprender com experts,<br></br>
          dominar as principais<br></br>
          tecnologias e entrar<br></br>
          mais rápido nas<br></br>
          empresas mais<br></br>
          desejadas.</BigText>
        
        </Column>

        <Column>
        
          <FormTitle>Comece agora grátis</FormTitle>
          <FormSubTitle>Crie sua conta e make the change._</FormSubTitle>

          <FormDiv>

            <InputDiv>
              <InputIcon src={person_icon} />
              <input placeholder='Nome Completo'></input>
            </InputDiv>
            <InputDiv>
              <InputIcon src={email_icon} />
              <input placeholder='Email'></input>
            </InputDiv>
            <InputDiv>
              <InputIcon src={lock_icon} />
              <input placeholder='Senha' type='password'></input>
            </InputDiv>


          </FormDiv>

          <ButtonDiv>
            <button>Criar minha conta grátis</button>
          </ButtonDiv>

          <FormSubText>
            <p>Ao clicar em "criar minha conta grátis",<br></br>
            declaro que aceito as Políticas de<br></br>
             Privacidade e os Termos de Uso da DIO.</p>
          </FormSubText>

          <RedirectToLogin>
            <p>Já tenho conta.<span> Fazer login.</span></p>
          </RedirectToLogin>

        </Column>

        </Row>


      </Container>
      
    </div>
  );
}


