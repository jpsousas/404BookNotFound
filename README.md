# privacy-21-desafio-dev-q4-2024

Desenvolva uma aplicação para uma biblioteca, em que seja possível gerenciar os empréstimos, e calcular a multa no caso de devolução atrasada, ou não devolução.

Especificações:

1. Cada pessoa pode realizar mais de um empréstimo ao mesmo tempo
2. Deve ser possível listar cada um dos empréstimos realizados, que podem estar em dois estados: emprestado e devolvido
3. Será necessário coletar as datas de empréstimo e devolução, para calcular uma possível multa.
4. Logo ao emprestar um livro, você deverá calcular automaticamente a data de retorno sendo 30 dias após a data da realização do empréstimo. Se a data de devolução for um sábado, ou domingo, você deve considerar segunda-feira.
5. Se a devolução ocorrer em até um dia atrasado, deveremos considerar o empréstimo como devolvido com atraso, mas não há multa.
6. Após um dia de atraso, cada dia acresce a multa em R$ 00,50 (cinquenta centavos).
7. Ao criar um empréstimo, ele estará no estado "empresatado", e não "devolvido".
8. As informações devem ser persistidas em banco de dados, de forma que ao reiniciar as aplicações, os dados sejam mantidos.
9. Lembre-se que por mais que seja uma aplicação demonstrativa, a segurança e confiabilidade dela será considerada na avaliação.
10. Você deverá persistir os dados no banco de dados Postgre, que é executado automaticamente junto ao servidor de api (e que já está configurado).

Convidamos você a utilizar os projetos já existentes nas pastas `api` e `web`.

Permitirmos que você altere o projeto como preferir, incluindo dependências, layout, recursos extras, etc. Apenas atente-se à forma como o projeto será avaliado ao final desse documento.

# Instruções para executar o projeto

O projeto é dividido entre api e web:

- API (pasta `api`): Projeto que expões as rotas da API pela interface HTTP. 
- Web (pasta `web`): Front-end em React que consome as rotas providas pela API

Devido à existência de duas aplicações, será necessário executar os dois processos separados em dois terminais distintos do sistema operacional.

## Sugestão

Se você preferir um ambiente remoto, não quiser instalar as dependências no seu computador ou tiver problemas para rodar o projeto, você pode abrir este projeto em um [GitHub CodeSpace](https://docs.github.com/pt/codespaces/overview) (uma máquina virtual gratuita para desenvolvimento).

Ao iniciar o projeto no GitHub CodeSpace, você verá nos logs que as dependências serão instaladas.

Se você optar por utilizar o GitHub CodeSpace, todas as etapas que envolvem a instalação do Node.JS, Docker ou Docker Compose podem ser ignoradas.

## Front-end (web)

1. Instale o Node.JS versão 20 na sua máquina
2. Entre na pasta `web` com `cd web`
3. Instale as dependências com `yarn install`
4. Rode o projeto de desenvolvimento com `yarn dev`
5. Teste no seu navegador o acesso ao projeto acessando [http://localhost:3000](http://localhost:3000). Se você estiver utilizando o GitHub CodeSpaces, deverá consultar instruções da plataforma de como acessar o servidor.

## Back-end (api)

1. Instale o Node.JS versão 20 na sua máquina
2. Instale o Docker e o Docker Compose na sua máquina
3. Abra um novo terminal, ou uma nova aba no mesmo terminal
4. Entre na pasta `api` com `cd api`
5. Execute `yarn dev` para iniciar o projeto
6. teste a API no navegador acessando [http://localhost:8080](http://localhost:8080). Se você estiver utilizando o GitHub CodeSpaces, deverá consultar instruções da plataforma de como acessar o servidor. Além disso, se você utilizar o GitHub CodeSpaces, terá de atualizar a URL da API no projeto `web` para a URL correta.

# Entrega

1. Publique o seu código em um repositório público no GitHub utilizando a sua conta pessoal.
2. Encaminhe o seu nome completo e o link público desse repositório para o e-mail `contato@privacy21.com`.
3. Tente abrir o link em uma aba anônima do navegador para garantir que o avaliador conseguirá acessá-lo.
4. Consulte as instruções de avaliação nesse documento.

# Avaliação

O projeto será executado em um [GitHub CodeSpace](https://docs.github.com/pt/codespaces/overview). Por isso, é uma boa ideia testar o seu repositório nessa plataforma para garantir que o projeto roda corretamente em um CodeSpace recém criado.

Processo que o avaliador realizará para executar o seu projeto:

1. Abrir o repositório em um CodeSpace
2. No primeiro terminal entrar na pasta api, e executar o comando `yarn dev`
3. No segundo terminal entrar na pasta web, e executar o comando `yarn dev`
4. Altere a porta 8080 para visibilidade pública na lista de portas redirecionadas pelo GitHub CodeSpace
5. Autualize a URL presente em `web/src/services/Api.ts` para a fornecida pelo GitHub CodeSpace na porta 8080.

Se a aplicação não rodar, ou não foi possível acessá-la, o candidato será desclassificado.

Com o projeto rodando, o avaliador realizará os testes funcionais, clicando nos elementos e identificando os resultados. Após isso, será realizada uma análise do código desenvolvido pelo candidato.