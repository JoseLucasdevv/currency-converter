# Conversor de Moedas 💱- Resolução Desáfio Técnico

---

## Features

- Real-time conversão de moedas
- Fetch avaliados do exchangerate.host
- Suporte para Docker e local development
- Arquitetura testável com Jest

---

## Project Stack

1. Node
2. Typescript
3. Express
4. Jest
5. Docker
6. HTML
7. CSS

## 🔧 Getting Started

### Instalação

#### Pré-requisitos

1. Você deve ter um computador com internet.
2. Install Git:
   [Link Download Git](https://daringfireball.net/projects/markdown/)
3. Install Node with NPM:
   [Link Download Node](https://nodejs.org/pt)
4. (Opcional) Install Docker and Docker compose:
   [Link Download Docker](https://www.docker.com/)

### Rodando o projeto sem o docker.

### 📁 Clone o Repositóro

```bash
git clone https://github.com/JoseLucasdevv/currency-converter.git

cd currency-convert
```

### Configure seu Env file.

dentro da pasta server tem um arquivo chamado env-example, use ele como base para criar seu arquivo .env esse arquivo deve estar no mesmo nível do env-example dentro da pasta server

### Utilize o npm para instalar as dependencias do projeto.

Ainda dentro da pasta server instale as dependencias do package json.

```bash
npm install
```

### Rodando os tests com o jest.

para rodar os testes de integração e os unitários rode o comando:

```bash
npm run test
```

### Subindo o Projeto local.

Para rodar o projeto na porta 3000 por padrão iremos rodar o comando:

```bash
npm run start
```

### Rodando o Projeto com o docker

Faça os Primeiros passos descritos em cima, clone o projeto e crie o .env file.

### Subindo projeto local usando docker e docker compose

depois dos passos anteriores você precisa utilizar os seguintes comandos:

```bash
cd server
sudo docker compose build
sudo docker compose up -d

```

verifique se o container subiu utilizando o comando:

```bash
sudo docker ps
```

### Acessando o endpoint welcome na API

depois de rodar o projeto você tem duas opções de usar um GET no endpoint /api/v1/welcome, se você olhar bem dentro da pasta server tem um arquivo chamado client.http esse arquivo consegue enviar requests. e logo o primeiro request deve retornar 200 OK com o html da pagina, ou simplesmente vá no google e digite http://localhost:3000/api/v1/welcome.

### Acessando o endpoint convert na API

você pode enviar o request para testar a api no mesmo arquivo client.http para testar o recurso POST no endpoint /api/v1/convert. caso queira você também tem a opção de baixar o postman https://www.postman.com/ e testar da maneira que você preferir.

### Acessando o client da Aplicação

iremos acessar o front-end do nosso app feito em HTML,CSS e JS. caso esteja dentro da pasta server volte uma e entre na pasta client. você deve ter a extensão live server instalada no vscode para rodar o client na porta 5500 e o server na porta 3000 para conseguir fazer a comunicação entre eles.
