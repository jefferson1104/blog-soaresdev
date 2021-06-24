---
title: Novidades do PHP 8
description: Saiba quais sao as novidades do php 8
date: '2021-06-24 05:06:47'
thumbnail: /assets/img/php.jpg
category: php
background: '#948be3'
---
As principais Novidades do PHP 8

A nova versão do PHP, o PHP 8.0 está sendo muito debatida e esperada pelos desenvolvedores. Isso pois ela promete uma séria de melhorias e mudanças que impactarão no futuro dessa linguagem de programação.

Conforme falamos anteriormente, o PHP 8 ainda está em desenvolvimento, mas nesse tópico vamos abordar sobre as principais novidades já implementadas na próxima versão dessa poderosa linguagem.

Compilador JIT (Just in Time)

De longe, essa é uma das novidades mais esperadas para o PHP 8! Isso pois o JIT Compiler (Just in Time) irá proporcionar um aumento de performance para diversas funções! Principalmente quando se tratar de processamento de imagens e operações de Machine Learning.

Resumidamente, o JIT é um compilador que faz parte da extensão Opcache. Com o JIT, alguns Opcodes não precisarão ser interpretados pela ZendVM, pois, essas instruções serão executadas diretamente a nível de CPU. Por isso que você poderá observar um grande ganho de desempenho para algumas instruções.

No vídeo abaixo, você pode ver como o JIT entrega um resultado de desempenho bem mais rápido que o encontrado no PHP 7. Você pode encontrar o vídeo no Youtube, publicado por Zeev Surasky, co-autor da proposta PHP JIT. Na esquerda, ele apresenta o método atualmente utilizado, já na direita, seria a mesma aplicação rodando com o JIT.



Através do benchmark Mandelbrot, você pode ver a demonstração de qualidade do JIT. Nele, você pode ver um desempenho do PHP 8 de mais de 4 vezes superior ao PHP 7.4 (0,011 seg vs 0,046 seg no PHP 7.4).



De uma forma geral, você poderá observar grandes impactos de desempenho em operações a nível de CPU.



Porém, é claro que o JIT também traz algumas desvantagens, e um dos principais é que ele aumenta a probabilidade de novos BUGs surgirem. Ainda assim, caso isso aconteça, já podemos esperar futuras correções nas atualizações posteriores para esses bugs.



No RFC sobre o JIT você pode estar lendo mais sobre esse compilador e os resultados obtidos no PHP 8.
