---
title: 5 erros comuns com chaves no React
description: Vamos tentar resumir a documentação sobre chaves no React
date: 2023-05-26 11:00:00
image: /assets/img/react/react-key.png
category: react
background: '#60cae1'
---

![react-key-banner](../assets/img/react/react-key.png)

Vamos là, de acordo com a [documentação sobre chaves no react](https://reactjs.org/docs/lists-and-keys.html) veja alguns pontos abaixo:

- Quando um nó de componente é atualizado (renderizado novamente), o React compara as chaves dos filhos com o antigo conjunto de chaves.

- Se a chave filha existe no novo conjunto de chaves e não existe no antigo conjunto de chaves, o React cria um novo filho (passando por todo o ciclo de montagem + renderização) naquela posição na árvore.

- Se a chave filha existir nos conjuntos de chaves antigo e novo, o React atualizará o componente filho existente naquela posição na árvore

- Se a chave filha existir no antigo conjunto de chaves, mas não existe no novo conjunto de chaves, ela será removida da árvore.

## Por que as pessoas cometem erros com as chaves?
Vocé criou um novo componente para renderizar uma lista, ao abrir o navegador para testá-lo de repente recebe este erro no console:
![react-key-error](../assets/img/react/reactjs-key-error.png)

Para um desenvolvedor que está apenas preocupado em terminar o componente e seguir em frente ele pode implementar uma solução de bom senso que seja semelhante assim:

```js
{
  Object.keys(pagesIncludeState).map((pageName, index) => {
    return (
      <Form.Field key={`${index}`}>
        <Form.Checkbox label={pageName} />
      <Form.Field>
    );
  })
}
```
Totalmente compreensível. A mensagem de erro desaparece, o desenvolvedor segue em frente com suas tarefas mais importantes, então problema resolvido certo?

Sim. [E não](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318).

Se alguém está criando componentes simples e sem estado, que as listas geralmente são (ou seja, um menu dropdown), provavelmente não houve impacto significativo em como eles geraram sua chave. Mas, para componentes mais complexos que envolvem uma quantidade significativa de trabalho de renderização ou têm estado interno , como um campo **Select** ou um "**Checkbox**", a chave React está vinculada à instância do componente e, portanto, tem um impacto enorme.

Muitas vezes, as chaves simplesmente se tornam uma saída de emergência para se livrar de um erro ao renderizar matrizes de componentes React. O que acaba sendo uma solução rápida para ocultar uma mensagem de erro pode acabar afetando o desempenho da renderização, ou pior, introduzindo bugs de estado internos. A seguir estão problemas comuns que tirei de exemplos da vida real detectados durante as análises de código

## 5 erros comuns envolvendo chaves:
### 1 - Chave desnecessária
```js
{
  if (widgets.length === 1) {
    return (
      <Button basic key={'card-dropdown-toobar'} />
    );
  }
}
```
A chave é codificada em um componente autônomo como um nome. Não há nada realmente errado em fazer isso, mas vê-lo pode sugerir que o desenvolvedor pode ter uma suposição equivocada sobre a necessidade de uma chave. Uma chave que é codificada como texto e nunca muda não serve para nada porque é a diferença de chaves que direciona o comportamento do React para criar novos ou reutilizar componentes. Existem apenas alguns casos válidos em que algo assim precisa ser feito, como se você estivesse tentando preservar/reutilizar componentes especiais conhecidos em arrays entre renderizações.


### 2 - Chave é gerada aleatoriamente na etapa de renderização
```js
return (
  <Dropdown.Item key={menu.name + UUID()} onClick={() => this.handleSelect(i, menu.name)}>
    <span style={styles}>
      {menu.name}
    </span>
  </Dropdown.Item>
)
```

Já vi chaves criadas a partir de geradores **Math.random()** e **UUID**. Uma consequência é que toda vez que uma renderização acontece, todos os componentes com uma chave são excluídos e refeitos, causando problemas significativos de desempenho. Esse erro geralmente decorre de um mal-entendido da mensagem de erro que exige que uma chave seja exclusiva. A chave não precisa ser exclusiva em toda a árvore de componentes. Ele só precisa ser único em relação a outros filhos do pai. É melhor apenas fazer referência a um ID real anexado ao objeto em que você está iterando ou usar o índice ([mas cuidado com as armadilhas de usar o índice](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318))


### 3 - Extrema evitação de usar o índice como chave
```js
  return (
    <div className="widget-notification">
      <span>
        {displayMessage.split('\n').map((splitText, idx) => {
          return (
            <div key={this.generateHashOnText(splitText)}>
              {splitText}
            </div>
          );
        })}
      </span>
    </div>
  );
```
Relacionado ao exemplo acima, um desenvolvedor pode ter aprendido de algum lugar a evitar o uso do índice (a documentação sugere usá-lo como último recurso) e se torna tão avesso a ele que se esforça para gerar chaves não indexadas, mesmo quando o índice é uma opção boa por exemplo, você tem algum texto estático simples que deseja apenas renderizar em diferentes elementos.

### 4 - Especificidade chave desnecessária
```js
  const labels = data.map((d, i) => {
    return (
      <g key={d.name} id={`${d.name}_label`}>
        <text fontFamily="Roboto" fontSize="13" fontWeight="normal" fill="#000000">
          <tspan x="112" y="13" >{d.value}</tspan>
        </text>
        <text fontFamily="Roboto" fontSize="8" fontWeight="normal" fill="#E1A4D2">
          <tspan x="112" y="21" >{d.name}</tspan>
        </text>
      </g>
    )
  })
```

A chave é uma string concatenada como `${name}_label`. Pode ser legítimo em alguns casos, mas, novamente, geralmente decorre de um mal-entendido sobre chaves exclusivas. A menos que você esteja colocando listas paralelas umas às outras no mesmo elemento renderizado, isso apenas adiciona uma sobrecarga desnecessária.


### 5 - Reutilização inadequada de um componente com estado
```js
componentWillReceiveProps(nextProps) {
  if (nextProps.id !== this.props.id) {
    // unsubscribe all event handlers
    this.unsubscribeHandlers();

    // temporarily disable transitions to prevent elements from sliding back to original position
    this.disableAnimation();

    // reset initial state
    this.setState(this.initialState);

    // manually trigger didMount to set new event handlers and fetch async
    this.componentDidMount();
  } else if (nextProps.statusList !== this.props.statusList) {
    // if only statusList changed, then reapply filters
    thiis.setState({filteredStatus: this.props.statusList.filter(this.applyFilters)});
  } else {
    // otherwise, we need to test...
  }
}
```

Este não é realmente um erro de chave em si, mas sim uma situação que o uso adequado de chaves pode resolver. Considere um hipotético componente stateful complexo que deriva muito de seu estado inicial de props. Quando um suporte central no componente muda e exige a reinicialização, uma lógica complexa pode ser usada para redefinir os componentes para seu estado original, desfazer animações etc. Isso pode ser feito simplesmente [por meio de uma chave](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key).

# Aprendizado
Uma das grandes coisas sobre o React é que você pode simplesmente pegá-lo e começar a usá-lo para construir um aplicativo, enquanto a implementação do DOM virtual é abstraída e não se preocupa. Muitos desenvolvedores não começaram aprendendo React metodicamente, mas começaram como desenvolvedores front-end gerais em uma instituição maior que se interessou por ele enquanto mudava de jQuery ou Angular. Muitos também “caíram” no React como resultado de projetos aqui e ali.

Eles não tiveram que ler tudo sobre o processo de reconciliação e, em vez disso, pegaram o React organicamente por meio do aprender enquanto faz. Isso mostra a facilidade de uso do React e o número de exemplos e tutoriais de alta qualidade disponíveis. Mas, eventualmente, uma compreensão de como a reconciliação interna funciona é fundamental para desenvolver componentes realmente rápidos e estáveis. As chaves são um ótimo primeiro passo nessa jornada.
