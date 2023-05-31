<p align="center">
  <img src="./readme-assets/app.gif" alt="Aplicação em Ação">
</p>

<h1 align="center" style="font-size: 48px;">Meu Time</h1>

Este é um projeto chamado Meu Time, uma aplicação web desenvolvida com ReactJS que permite aos usuários acessar estatísticas de futebol por meio da API-Football.

## Funcionalidades

- Autenticação com a API-Football usando uma chave de acesso
- Exibição de estatísticas de jogadores, equipes e competições
- Pesquisa "avançada" de jogadores, equipes e competições
- Visualização de detalhes de jogadores, equipes e competições

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org) (versão 16 ou superior)
- [Git](https://git-scm.com)
- [Docker](https://docs.docker.com/)

## Configuração do Projeto

Siga estas etapas para configurar e executar o projeto:

1. Clone o repositório:

   ```
   git clone https://github.com/sZeuSz/Meu-Time.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd Meu-Time
   ```

3. Instale as dependências:

   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e defina a variável de ambiente `REACT_APP_API` com a url da API-Football (`https://v3.football.api-sports.io`). Exemplo:

   ```
   REACT_APP_API=https...
   ```

## Executando o Projeto

Após a configuração do projeto, você pode executá-lo localmente. Execute o seguinte comando no terminal:

```
npm start
```

O projeto será executado em modo de desenvolvimento e estará acessível em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Executando o Projeto usando Docker

Após a configuração do projeto, você pode executá-lo localmente usando um proxy reverse. Execute o seguinte comando no terminal `COMO SUPER USUÁRIO`:

```
sudo docker-compose up
```

O projeto será executado e estará acessível em [http://localhost:80](http://localhost:80) no seu navegador.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado nos termos da licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Recursos Adicionais

- [Documentação da API-Football](https://www.api-football.com/documentation-v3)
- [Documentação do React](https://legacy.reactjs.org/docs/getting-started.html)
- [Documentação do Typescript](https://www.typescriptlang.org/docs/)
- [Documentação do Create React App](https://create-react-app.dev/docs/getting-started)

---
