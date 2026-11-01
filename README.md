# Automação de Testes Web com Cypress

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress e JavaScript**, utilizando o site [Automation Exercise](https://automationexercise.com/) como aplicação sob teste.

O objetivo é validar os principais fluxos funcionais da aplicação, aplicando boas práticas de automação, organização por Page Objects, reutilização de comandos e geração de relatórios de execução.

## Tecnologias utilizadas

- **Cypress 13** — automação de testes E2E.
- **JavaScript** — linguagem de desenvolvimento dos testes.
- **Node.js e npm** — ambiente de execução e gerenciamento de dependências.
- **Faker.js** — geração de dados dinâmicos para os testes.
- **Page Object Model (POM)** — organização e reutilização dos elementos e ações das páginas.
- **Mochawesome Reporter** — geração de relatórios HTML.
- **ESLint** — análise estática e padronização do código.
- **Prettier** — formatação do código.
- **GitHub Actions** — integração contínua e execução automatizada dos testes.

## Cenários automatizados

O projeto contempla os seguintes cenários:

| Caso de teste | Cenário |
|---|---|
| TC01 | Cadastro de usuário |
| TC02 | Login com credenciais corretas |
| TC03 | Login com credenciais incorretas |
| TC04 | Logout de usuário |
| TC05 | Cadastro com e-mail já existente |
| TC08 | Consulta de produtos e detalhes |
| TC09 | Busca de produtos |
| TC10 | Inscrição na newsletter |
| TC15 | Realização de pedido com cadastro antes do checkout |
| TC16 | Realização de pedido com login antes do checkout |

## Estrutura do projeto

```text
automacao-web/
├── .github/
│   └── workflows/
│       └── main.yml
├── cypress/
│   ├── e2e/
│   │   └── arquivos de testes
│   ├── pages/
│   │   └── Page Objects
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Boas práticas aplicadas

- Organização dos testes utilizando o padrão Page Object Model.
- Reutilização de métodos por meio de comandos customizados do Cypress.
- Geração de dados dinâmicos para evitar dependência de informações fixas.
- Criação e preparação de usuários por meio da API quando necessário.
- Limpeza dos dados de teste após a execução.
- Utilização de asserções para validar os resultados das operações.
- Esperas baseadas em condições e asserções, evitando tempos fixos desnecessários.
- Configuração de retries para auxiliar na estabilidade da execução.
- Padronização e análise estática do código.

## Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado.

### 2. Clonar o repositório

```bash
git clone https://github.com/JosielBarros/automacao-testes-web-pos-graduacao.git
```

### 3. Acessar a pasta do projeto

```bash
cd automacao-testes-web-pos-graduacao
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Executar os testes

Para executar os testes em modo interativo:

```bash
npm run cypress:open
```

Para executar os testes em modo headless:

```bash
npm test
```

Para executar a suíte de testes e gerar o relatório:

```bash
npm run test:report
```

**Observação:** os scripts locais estão configurados para utilizar o Microsoft Edge. A execução no GitHub Actions utiliza o navegador headless disponível no ambiente de CI.

## Relatórios de execução

O projeto utiliza o **cypress-mochawesome-reporter** para gerar relatórios em HTML e JSON.

Os relatórios são armazenados em:

```text
cypress/reports/
```

O relatório permite consultar informações como:

- Quantidade de testes executados.
- Testes aprovados e reprovados.
- Duração da execução.
- Detalhes dos cenários.
- Evidências de falhas, quando disponíveis.

## Integração contínua — GitHub Actions

O projeto possui workflow configurado no GitHub Actions para automatizar a execução dos testes.

A execução é configurada para ocorrer em eventos de atualização da branch `main` e em pull requests direcionados a essa branch. Também pode ser iniciada manualmente, caso o workflow esteja configurado com `workflow_dispatch`.

O pipeline contempla:

1. Checkout do repositório.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Armazenamento dos relatórios como artefatos da execução.

Os resultados podem ser acompanhados na aba **Actions** do repositório.

## Aplicação sob teste

[Automation Exercise](https://automationexercise.com/)

Aplicação utilizada para praticar e validar cenários de automação de testes funcionais e fluxos de navegação de uma loja virtual.

## Autor

**Josiel Barros**

QA Engineer | Software Test Automation

[GitHub — JosielBarros](https://github.com/JosielBarros)

---

Projeto desenvolvido como parte dos estudos de Pós-Graduação em Automação de Testes.