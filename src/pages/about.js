import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import imgBanner from '../../static/assets/img/soaresdev-social-banner.png'

import * as S from "../components/Post/styled"

const AboutPage = () => (
    <Layout>
        <SEO
          title="Sobre"
          description="Saiba mais sobre o blog SoaresDev o blog do programador"
        />
        <S.PostHeader>
            <S.PostTitle>SOBRE</S.PostTitle>
            <S.PostDescription>Blog SoaresDev, o blog do desenvolvedor web</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
            <div id="about-banner">
                <img  src={imgBanner} alt="soaresDev Banner" />
            </div>
            <p>
                Olá, meu nome é Jefferson Soares e eu sou desenvolvedor web, desde pequeno sempre fui apaixonado por tecnologia e
                pela forma que ela transforma o mundo, no <strong>Blog SoaresDev</strong> vou compartilhar conhecimento,
                dicas, guias rápidos e também notícias da área de desenvolvimento web.
            </p>
            <p>
                Este blog é uma forma de agradecer a programação web por toda mudança positiva que fez, e que vem fazendo na minha vida,
                não fique de fora e sinta-se a vontade para mandar sugestões, participe dessa jornada e contribua com o blog
                entre em contato comigo através do email <a href="mailto:soaresdevcompany@gmail.com" target="_blank">soaresdevcompany@gmail.com</a>.
            </p>
        </S.MainContent>
    </Layout>
)

export default AboutPage
