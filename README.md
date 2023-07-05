# Marvel Next.js

Este projeto foi criado utilizando a última versão do React e do Next.js juntamente com TypeScript. A aplicação utiliza a API da Marvel para carregar alguns heróis na tela inicial e possui um campo de busca para que o usuário possa buscar pelo seu herói favorito, clicar sobre ele e ver mais detalhes a respeito.

## Tecnologias utilizadas

- React
- Next.js
- TypeScript
- API da Marvel

## Como executar o projeto localmente

1. Clone o repositório para a sua máquina
2. Instale as dependências do projeto utilizando o comando `npm install`
3. Crie um arquivo `.env.local` na raiz do projeto e adicione as suas chaves de acesso à API da Marvel:

```
NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY=your_private_key
```

4. Execute o comando `npm run dev` para iniciar o servidor local
5. Acesse o endereço `http://localhost:3000` no seu navegador para visualizar a aplicação

## Como contribuir para o projeto

1. Faça um fork do repositório
2. Crie uma nova branch com a sua feature ou correção de bug: `git checkout -b my-feature`
3. Faça as alterações necessárias no código
4. Faça o commit das suas alterações: `git commit -m 'feat: add new feature'`
5. Faça o push para a sua branch: `git push origin my-feature`
6. Abra um pull request no repositório original

## Licença

Este projeto está licenciado sob a licença MIT.

Citations:
[1] https://github.com/marcelosdm/marvel-nextjs
[2] https://github.com/Nathen-Smith/marvel-api-app
[3] https://github.com/henryzarza/react-marvel
[4] https://github.com/dlemm/next-marvel
[5] https://github.com/inglkruiz/react-marvel-api
