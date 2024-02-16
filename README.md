# Documentação da Aplicação de Gerenciamento Financeiro

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

Relatorio em PDF:
![imgRelatorio](https://github.com/KaiokkFernandes/FinanceManager/assets/148721400/660901ab-56eb-409a-bf2d-326920919c28)

## Back-end e Banco de Dados


## Conclusão

Esta documentação oferece uma visão geral da aplicação de gerenciamento financeiro, detalhando seus componentes principais, funcionalidades e as tecnologias envolvidas. 
