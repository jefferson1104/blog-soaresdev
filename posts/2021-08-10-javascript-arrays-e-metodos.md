---
title: Javascript - Arrays e métodos
description: JavaScript não possui um tipo de dados array específico. No entanto, você pode usar o objeto predefinido Array e seus métodos, o objeto Array tem métodos para manipular arrays de várias maneiras, vamos descobrir quais?
date: 2021-08-10 12:45:32
image: /assets/img/javascript/javascript.jpg
category: js
background: '#ddcd34'
---

Um array é um conjunto de valores ordenados que você o referencia com um nome e um índice, ele também é conhecido como Listas, Vetores ou Matrizes.

Importante lembrar que sua posição sempre irá iniciar do **zero**, chamamos de a posição de um array de **índice**.

![banner javascript](../assets/img/development-03.jpeg)

## ARRAY
```Javascript
var Pokemons = ["Bulbassaur", "Pikachu", "Squirtle", "Charmander"]

[0] === "Bulbassaur"
[1] === "Pikachu"
[2] === "Squirtle"
[3] === "Charmander"
[4] === Undefined
```

Como pode ver na explicação acima, temos uma variável do tipo **var** chamada *Pokemons* nela estamos guardando um array, e em seguida explicamos cada posição do array, você pode ver que ele inicia do zero, e também pode perceber que quando queremos o valor de um índice que não existe no array ele retorna o valor de **undefined**.


##### Outro exemplo
```Javascript
const taskList = ["Café", "Malhar", "Trabalhar", "Estudar", "Dormir"]

console.log(taskList[2])
// retorna o valor "Trabalhar"

console.log(taskList[1])
// retorna o valor "Malhar"

console.log(taskList[4])
// retorna o valor "Dormir"
```

#### MÉTODOS DE ARRAY
O objeto Array tem métodos para manipular arrays de várias maneiras como join, filter, sort e etc... ele tem uma propriedade para determinar o tamanho do array e outras propriedades para usar com expressões regulares, vamos ver alguns exemplos nessa sessão desse post, mas se quiser saber mais sobre outros métodos de array acesse a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).

##### typeof isArray
O método typeof verifica o tipo do array, e o método isArray verifica o objeto é um array.
```Javascript
const person = [27, "Jefferson", 1.75]

const typeArray = typeof(person)
// verificar o tipo do array

const verifyArray = Array.isArray(person)
// verificar se é um array

console.log(typeArray)
// retorna object

console.log(verifyArray)
// retorna true
```

##### length
O método length verifica a quantidade de items em um array
```Javascript
const herois = ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América"]

var quantidade = herois.length
console.log(quantidade)
// retorna a quantidade 5

```

##### push()
O método push() adiciona um novo item no final do array
```Javascript
const herois = ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América"]

herois.push("Homen de ferro")
// adiciona "Homen de ferro"

console.log(herois)
// retorna ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América", "Homen de ferro" ]

```

##### pop()
O método pop() remove o último item do array
```Javascript
const herois = ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América"]

herois.pop()
// remove e retorna "Capitão América"

console.log(herois)
// retorna ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América"]

```

##### shift()
O método shift() remove o último item do array e retorna este item.
```Javascript
const herois = ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América"]

herois.shift()
// remove e retorna "Viúva Negra"

console.log(herois)
// retorna ["Homem-Aranha", "Hulk", "Thor", "Capitão América"]

```

##### splice()
O método splice() remove um item especifico da lista, esse método requer dois parâmetros na sua chamada, o **primeiro parâmetro** representa o índice do array, o **segundo parâmetro** representa a quantidade de items que vamos remover a partir daquele índice que indicamos no primeiro parâmetro.

```Javascript
const herois = ["Viúva Negra", "Homem-Aranha", "Hulk", "Thor", "Capitão América"]

herois.splice(1, 2)
// a partir do item "Homem-Aranha" remove ele e mais um, remove 2 items.

console.log(herois)
// retorna ["Viúva Negra", "Thor", "Capitão América"]

```

##### sort()
O método sort() faz a ordenação dos items dentro de um array, e os retorna de forma organizada. A ordenação não é necessariamente estável e a ordenação padrão é de acordo com a  pontuação de código unicode.

```Javascript
const numbers = [3, 2, 1, 0]
const sortNumbers = numbers.sort()


const strings = ['e', 'd', 'c', 'b', 'a']
const sortStrings = strings.sort()

console.log(sortNumbers)
// retorna [0, 1, 2, 3]

console.log(sortStrings)
// retorna ["a", "b", "c", "d", "e"]
```

##### concat()
O método concat() junta os valores de dois arrays.

```Javascript
const person = ['jefferson', 'joel', 'arthur']
const age = [27, 24, 9]

const concatArrays = person.concat(age)
// concatena os valores de person e de age

console.log(concatArrays)
// retorna ["jefferson", "joel", "arthur", 27, 24, 9]
```

##### join()
O método join() junta serve para criar uma string a partir de um array, ao criar essa string voce consegue passar um separador como parâmetro.

```Javascript
const elements = ['Fogo', 'Ar', 'Água', 'Terra']

console.log(elements.join())
// Retorna uma string com o valor: "Fogo,Ar,Água,Terra"

console.log(elements.join('+'))
// Retorna uma string com o valor: "Fogo+Ar+Água+Terra"

console.log(elements.join('-'))
// Retorna uma string com o valor: "Fogo-Ar-Água-Terra"
```

##### reverse()
O método reverse() reverte a ordem dos elementos de um array

```Javascript
const elements = ['a', 'b', 'c', 'd']

const reversedElements = elements.reverse()

console.log(reversedElements)
// retorna ["d", "c", "b", "a"]
```

##### indexOf()
O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

```Javascript
const pokemons = ['Pikachu', 'Charmander', 'Mew']
const index = pokemons.indexOf('Charmander')

console.log(index)
// retorna 1

console.log(pokemons[index])
// retorna Charmander
```

##### every()
O método every() retorna true se todos os items do array atenderem a condição especificada no callback.

```Javascript
const animals = ["cachorro", "gato", "passarinho", "coelho", ]

const verifyDog = animals.every(animal => animal == "cachorro")

console.log(verifyDog)
// retorna "false" porquê não são todos os animais que são "cachorro"
```

##### fill()
O método fill() preenche todos os items de um array com um valor, e retorna esse novo array com o valor que foi passado como parâmetro.

```Javascript
const superPowers = ["Fogo", "Gelo", "Raio"]

const power = superPowers.fill("Raio")

console.log(power)
// retorna ["Raio", "Raio", "Raio"]
```

##### filter()
O método filter() retorna um novo array contendo todos os items do primeiro array que atenderem a condição de filtro definida no callback.

```Javascript
const heroes = ["ironman", "spiderman", "hulk", "thor", "deadpool", "hulk"]

const onlyHulk = heroes.filter(hero => hero === "hulk")

console.log(onlyHulk)
// retorna ["hulk", "hulk"]
```

##### find()
O método find() retorna um novo array com o elemento encontrado de acordo com o callback, caso nao tenha o elemento ele retornará o valor undefined.

```Javascript
const heroes = ["ironman", "spiderman", "thor", "deadpool", "hulk"]

const findHero = heroes.filter(hero => hero === "deadpool")

console.log(findHero)
// retorna ["deadpool"]
```

##### findIndex()
O método findIndex() retorna o índice do elemento encontrado, caso algum elemento satisfaça a condição, se nenhum elemento satisfazer a condição ele retornará o valor -1

```Javascript
const beers = ["skol", "brahma", "heineken", "budweiser"]

const beerIndex = beers.findIndex(beer => beer === "heineken")

console.log(beerIndex)
// retorna 2
```

##### forEach()
O método forEach() chama uma função (callback) para cada elemento no array.

```Javascript
const beers = ["skol", "brahma", "heineken", "budweiser"]

beers.forEach(beer => console.log(beer))

/*
retorna:
  skol
  brahma
  heineken
  budweiser
*/
```

##### map()
O método map() retorna um novo array que contém os resultados da função (callback) que é chamada para cada elemento.

```Javascript
const numbers = [2, 4, 8, 16, 32]

const sumNumbers = numbers.map(number => number * 2)

console.log(sumNumbers)
// retorna [4, 8, 16, 32, 64]
```

##### some()
O método some() retorna o valor "true" se pelo menos um elemento dentro do array atender a condição especificada na função callback.

```Javascript
const animals = ['gato', 'passarinho', 'cachorro', 'rato']

const verify = animals.some(animal => animal === 'rato')

console.log(verify)
// retorna true
```

##### slice()
O método slice() extrai uma parte do array chamado de acordo com a quantidade passada no parametro e retorna um novo array.

```Javascript
const animals = ['gato', 'passarinho', 'cachorro', 'rato']

const newsAnimals = animals.slice(2)

console.log(newsAnimals)
// retorna ["cachorro", "rato"]
```


Espero que tenham gostado do conteúdo, que cada exemplo seja de fácil compreensão e que possa ajudar muito na sua evolução, o aprendizado é eterno!
