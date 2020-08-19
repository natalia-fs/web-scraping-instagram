# Web Scraping Instagram ("Instabot")

## Extraindo os dados
### Coletando as primeiras fotos de contas públicas do Instagram com a ferramenta <a href="https://github.com/puppeteer/puppeteer">Puppeteer</a>
---
## Exibindo os dados
### A exibição das imagens coletadas ocorre em duas páginas:
* Feed: página HTML simples, aplicando lazy load com Javascript "puro" nas imagens.
* Stories: página com um slider automático, simulando a funcionalidade stories do Instagram.
---
## Requisitos
* Node.JS
## Executando
* Acessar a pasta raiz e instalar as dependências com `npm install`
* Executar o comando `npx lite-server`

### O repo possui um json com 12 links de fotos, caso você só queira testar as páginas, porém se quiser extrair novas fotos, basta acessar a pasta raiz e executar o comando `node index.js` e inserir o @ da página pública que você quiser.