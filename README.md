# Documentação da Aplicação de Gerenciamento Financeiro ProFinance

## Visão Geral

Esta aplicação é um sistema de gerenciamento financeiro desenvolvido para permitir aos usuários adicionar, visualizar e gerar relatórios sobre transações financeiras. Utiliza React para o front-end, Node.js para o back-end, e MySQL para armazenamento de dados.

## Estrutura do Front-end

### Componentes

- **Form**: Permite ao usuário adicionar novas transações. O usuário pode inserir a descrição, o valor e selecionar se é uma entrada ou saída de recurso.
- **Grid**: Exibe as transações adicionadas em forma de tabela, permitindo visualizar detalhes como descrição, valor, e tipo, além de oferecer a opção de deletar transações.
- **GridItem**: Representa uma linha na tabela de transações no componente Grid, mostrando a descrição, valor, tipo de transação (entrada ou saída), e um botão para excluir.
- **Resume**: Apresenta um resumo das transações, incluindo o total de entradas, saídas e o saldo final.
- **RelatorioPDF**: Gera um relatório em PDF das transações, incluindo um total mensal.

### Bibliotecas e Dependências

- **axios**: Utilizada para realizar requisições HTTP ao servidor back-end para manipulação dos dados de transações no banco de dados MySQL.
- **React Icons**: Prove ícones utilizados nos botões e indicadores visuais das transações (entrada, saída).
- **Font Awesome**: Fornece ícones adicionais, como o utilizado no botão de geração de PDF.
- **jsPDF**: Biblioteca para a criação do PDF no cliente, usada no componente `RelatorioPDF` para gerar relatórios de gastos mensais.

## Funcionalidades Principais

### Adicionar Transações

Usuários podem adicionar transações financeiras informando a descrição, valor e tipo (entrada ou saída). Validações garantem que a descrição e o valor sejam fornecidos e que o valor seja positivo.

### Visualizar Transações

As transações adicionadas são exibidas em uma tabela, permitindo aos usuários visualizar todas as entradas e saídas registradas.

### Gerar Relatório em PDF

Usuários podem gerar um relatório em PDF das transações, que inclui um total mensal. O relatório é gerado no lado do cliente usando a biblioteca jsPDF.

### Deletar Transações

Cada transação listada na tabela possui um botão para sua remoção, permitindo aos usuários gerenciar as transações registradas.

layout:
![imgLayout](https://github.com/KaiokkFernandes/FinanceManager/assets/148721400/3b6b322c-77b5-4aba-977b-5d0d14fcf7aa)

Relatório em PDF:
![imgRelatorio](https://github.com/KaiokkFernandes/FinanceManager/assets/148721400/660901ab-56eb-409a-bf2d-326920919c28)

## Back-end e Banco de Dados

O banco de dados `dbfinance` contém uma tabela `usuario` onde as transações financeiras são armazenadas. A tabela contém as seguintes colunas:

- `id`: Um identificador único para cada transação.
- `desc`: Descrição da transação.
- `valor`: Valor da transação.
- `entrada`: Valor creditado.
- `saida`: Valor debitado.
- `total`: Saldo total após a transação.

## Backend

O backend é construído utilizando o Node.js e estruturado em torno de `controllers` e `routes`.

### Controllers

#### getUsers
Obtém todos os itens da tabela `usuario`.

#### deleteUser
Deleta um item da tabela `usuario` com base no `id` fornecido.

#### getSummary
Calcula o resumo financeiro, somando todas as entradas e saídas e calculando o saldo total.

#### addTransaction
Adiciona uma nova transação na tabela `usuario` e atualiza o saldo total.

### Rotas

As rotas são definidas para permitir operações CRUD na tabela `usuario`.

- `GET /users`: Retorna todos os usuários.
- `GET /summary`: Retorna o resumo financeiro.
- `POST /transaction`: Adiciona uma nova transação.
- `DELETE /delete/:id`: Remove uma transação com base no ID.

## Configuração do Banco de Dados

A conexão com o banco de dados é configurada no arquivo `database.js`. As credenciais de acesso ao banco de dados são especificadas aqui.

## Conclusão

Esta documentação oferece uma visão geral da aplicação de gerenciamento financeiro, detalhando seus componentes principais, funcionalidades e as tecnologias envolvidas. 
