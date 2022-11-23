![Foto da tela inicial](./img/Capa-Portfolio-Vini-Roveri.png.png)

# Portfolio Vinícius Roveri ([Link do site](https://viniroveri.github.io/PortfolioViniRoveri/))


## O que é isso?

É o lugar onde eu exibo meus melhores trabalhos e todas minhas habilidades que podem agregar à quem tiver meus serviços.


## Por que isso?

A fim de deixar registrado e exibir aos outros o que eu sou capaz, além de servir para os empregadores e entrevistadores terem uma ideia do que eu sou capaz de oferecer a seus projetos.


## Quais desafios eu tive que superar?

- ### Letras que mudam de cor conforme background

Após não encontrar nada parecido na internet tentei muitas soluções como o `mix-blend-mode` e não consegui o resultado que eu queria. Por isso tive que criar a ideia de fazer a `section` container ter o background principal, enquanto o texto tem o `background-color` como a cor principal do texto e a `background-image` como uma imagem idêntica ao background principal, porém da cor que eu desejava colocar no texto, após isso alinhei os dois background fazendo calculos básicos pra encontrar a diferença em pixels dos dois e usei os `-webkit-text-fill-color: transparent` e `-webkit-background-clip: text` para fazer o texto aderir à cor do background e me deixar assim com o resultado que eu mirava desde o princípio.

- ### Partes do site aparecerem conforme scroll

Primeiro precisei identificar a área de cada elemento usando `querySelector`, `offsetTop` e `offsetHeight`. Após isso criei um `eventListener` do scroll, no qual se o valor do scroll correspondesse à área de determinado elemento seriam adicionadas ou removidas as classes dos elementos que eu quisesse mostrar ou esconder

- ### Header mudar conforme a sessão que o usuário está vendo

No mesmo `eventListener` de scroll mencionado acima, dependendo da área que o scroll estiver eu coloco ou removo a classe que deixa a parte do header correspondente ativa utilizando o `classList.add`. 

- ### Criação das animações em CSS

Por ter minha formação em animação as ideias vieram bem tranquilamente, o único passo que faltava era aprender a masterizar o `@keyframes` pra chegar ao resultado que eu queria. Após ter isso claro, eu usei classes pra indicar os elementos que eu queria animar. Este também foi o motivo de eu utilizar classes nas atividades relacionadas ao scroll, assim eu podia ter uma conexão mais uniforme entre o CSS e o JavaScript