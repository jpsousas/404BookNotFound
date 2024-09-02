# privacy-21-desafio-dev-q4-2024

# Instruções para executar o projeto

O projeto é dividido entre api e web:

- API (pasta `api`): Projeto que expões as rotas da API pela interface HTTP. 
- Web (pasta `web`): Front-end em React que consome as rotas providas pela API

Devido à existência de duas aplicações, será necessário executar os dois processos separados em dois terminais distintos do sistema operacional.

## Execução da API

1. Entrar na pasta `api`. `cd api`
2. Instalar as dependências do projeto. `yarn install`
3. Iniciar a aplicação. `yarn dev`

## Execução do front-end

1. Entrar na pasta `web`. `cd web`
2. Instalar as dependências do projeto. `yarn install`
3. Iniciar a aplicação. `yarn dev`

# Avaliação

O projeto será executado em um [GitHub CodeSpace](https://docs.github.com/pt/codespaces/overview). Por isso, é uma boa ideia testar o seu repositório nessa plataforma para garantir que o projeto roda corretamente.

Processo que o avaliador realizará para executar o seu projeto:

1. Abrir o repositório em um CodeSpace
2. No primeiro terminal entrar na pasta api, e executar o comando `yarn dev`
3. No segundo terminal entrar na pasta web, e executar o comando `yarn dev`

Se a aplicação não rodar, ou não foi possível acessá-la, o candidato será desclassificado.

Com o projeto rodando, o avaliador realizará os testes funcionais, clicando nos elementos e identificando os resultados. Após isso, será realizada uma análise do código desenvolvido pelo candidato.