import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import imgBanner from '../../static/assets/img/soaresdev-social-banner.png'

import * as S from "../components/Post/styled"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />

        <S.PostHeader>
            <S.PostTitle>SOBRE</S.PostTitle>
            <S.PostDescription>Blog soaresDev o blog do programador</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
            <div id="about-banner">
                <img  src={imgBanner} alt="soaresDev Banner" />
            </div>
            <p>
                Meu nome é Jefferson Soares, criado na zona leste de São Paulo e com poucas oportunidades como todo jovem
                de periferia, comecei minha vida profissional como lojista não era fácil, mas era divertido, devido a sempre
                ter uma boa relação com pessoas e uma facilidade em me comunicar consegui ter um ótimo rendimento e produtividade
                atuando como vendedor, mas ainda assim eu não me sentia no caminho certo, não era apaixonado pelo que estava fazendo.
            </p>

            <p>
                Desde pequeno sempre fui apaixonado por técnologia, e em como ela transforma a vida de pessoas e o mundo,
                a programação nunca foi novidade pra mim mas veio pra me tornar um profissional feliz, não foi uma transição 
                de carreira, eu não tracei um plano de ação e também nao fiz um mapeamento de oportunidades, porém quando a 
                primeira surgiu eu mergulhei fundo, preparei a mente e o tempo livre para estudar, investi e continuo investindo
                em qualificação e bastante networking, hoje sou completamente apaixonado pelo que faço, descobri o quanto gosto
                de estudar e vi o tanto que isso mudou minha vida.
            </p>

            <p>
                Este blog é uma forma de agradecer a programação web por toda mudança positiva que fez e vem fazendo na minha vida,
                aqui quero compartilhar meus conhecimentos sempre que eu puder, tudo que eu aprendi e tudo que vou aprender, a evolução
                é contínua e nunca podemos parar de aprender.
            </p>
        </S.MainContent>
    </Layout>
)

export default AboutPage