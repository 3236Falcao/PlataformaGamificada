# PlataformaGamificada - Backend

<h4 align="center"> 
	 Visão Geral do Projeto:
</h4>

<h4 align="center"> 
	 Propósito
</h4>

Este projeto de backend tem como objetivo fornecer a infraestrutura necessária para suportar a Plataforma Gamificada de Aprendizagem. Ele lida com a lógica de negócios, manipulação de dados e interação com o banco de dados, fornecendo os serviços necessários para a parte frontal da plataforma.

<h4 align="center"> 
	 Tecnologias Utilizadas
</h4>

### Node.js

Node.js é uma plataforma de aplicação baseada no motor V8 do Google Chrome para executar código JavaScript no lado do servidor. É a base do backend desta plataforma, oferecendo um ambiente de execução eficiente e escalável.

### Express

Express é um framework para aplicativos da web do Node.js que fornece recursos essenciais para aplicativos da web e móveis. Ele simplifica o processo de criação de APIs RESTful e rotas HTTP.

### MongoDB

MongoDB é um banco de dados NoSQL orientado a documentos, altamente escalável e flexível. É utilizado neste projeto para armazenar e recuperar dados de forma persistente.

<h4 align="center"> 
	 Arquitetura
</h4>

A arquitetura do backend é organizada seguindo os princípios de separação de preocupações e modularidade. Ela inclui componentes como:

- **Controllers**: Responsáveis por lidar com as solicitações HTTP, chamando os serviços apropriados e retornando respostas adequadas.
- **Services**: Contêm a lógica de negócios da aplicação, abstraindo a complexidade e promovendo a reutilização do código.
- **Middlewares**: Interceptam solicitações HTTP antes de serem manipuladas pelos controllers, permitindo a execução de tarefas comuns, como autenticação, validação de entrada, etc.
- **Modelos**: Definem a estrutura dos dados e interagem diretamente com o banco de dados.

## Estrutura do Projeto

```
PLATAFORMAGAMIFICADA/
├── src/
│   ├── app/
│   │   └── index.ts
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   └── usuarioController.ts
│   ├── models/
│   │   ├── usuarioModel.js
│   │   └── usuarioModel.ts
│   ├── routes/
│   │   └── usuarioRoutes.ts
│   ├── tests/
│   │   ├── gameUtils.test.ts
│   │   └── mongodb.test.ts
├── .gitignore
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig-node.json
└── tsconfig.json
```

## Requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0

## Instalação

Para rodar este projeto, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/seuusuario/PLATAFORMAGAMIFICADA.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd PLATAFORMAGAMIFICADA
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração

Configure as variáveis de ambiente no arquivo `.env`:

```sh
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
```

## Uso

Para iniciar o servidor, execute o seguinte comando:
```sh
npm start
```

## Exemplos de Uso

### Criar um Novo Usuário

```sh
POST /api/usuarios
Content-Type: application/json

{
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "senha": "senha123"
}
```

### Obter Detalhes do Usuário

```sh
GET /api/usuarios/{id}
```

## Testes

Para rodar os testes, use o comando:
```sh
npm test
```

## Configuração do Banco de Dados

As configurações do banco de dados estão localizadas em `src/config/db.ts`. Certifique-se de configurar as variáveis de ambiente corretamente para conectar ao seu banco de dados.

<h4 align="center"> 
	 Conclusão
</h4>

O backend da Plataforma Gamificada de Aprendizagem é crucial para fornecer os serviços necessários para a interação entre o cliente e o servidor. Utilizamos tecnologias como Node.js e Express para garantir eficiência e escalabilidade.

<h4 align="center"> 
	🚧   🚀  Em construção...  🚧
</h4>

### Funcionalidades (Ainda em Desenvolvimento):

- Integração com Banco de Dados MongoDB
- Implementação de Endpoints da API
- Middleware de Autenticação

## Contribuição

Sinta-se à vontade para fazer um fork deste projeto e abrir pull requests. Para grandes mudanças, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


