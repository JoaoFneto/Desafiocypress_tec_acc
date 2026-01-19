
## 📘 Projeto Coffee Cart – Testes Automatizados


Este projeto tem como objetivo automatizar o fluxo de compra no Coffee Cart, 
cobrindo desde a seleção de cafés até a confirmação do pagamento.
Os cenários foram escritos em Gherkin para facilitar a comunicação entre equipe técnica e de negócio, 
e implementados com Cypress utilizando o cypress-cucumber-preprocessor, 
aplicando o padrão Page Object para organizar seletores e métodos de forma reutilizável.





## 🔧 Tecnologias e Ferramentas


Cypress: framework de testes end-to-end para aplicações web
Cucumber (cypress-cucumber-preprocessor): escrita de cenários em Gherkin
Page Object Pattern: organização dos seletores e métodos
Node.js  + npm: ambiente de execução e gerenciamento de dependências
JavaScript (ES6+): linguagem utilizada nos testes






## 🚀 Fluxo de Teste Automatizado


Usuário acessa o site Coffee Cart
Seleciona três tipos de cafés diferentes
Aceita a oferta promocional do Mocha
Remove um item do carrinho
Valida os produtos restantes no carrinho
É direcionado para a página de pagamento
Informa nome e e-mail para confirmar o pagamento




🛒 Percurso do Usuário – Coffee Cart
## Acesso ao site  
O usuário inicia sua jornada acessando o site Coffee Cart, onde encontra diferentes opções de cafés disponíveis para compra.



## Seleção de cafés  
O usuário escolhe três tipos de cafés diferentes (ex.: Espresso, Macchiato e Cappuccino), adicionando cada um deles ao carrinho.



## Oferta promocional  
Durante o processo de compra, o usuário recebe uma oferta promocional de Mocha e decide aceitá-la, adicionando o item extra ao carrinho.



## Gerenciamento do carrinho  
Ao revisar os itens, o usuário remove um dos cafés previamente selecionados e valida os produtos restantes, garantindo que o carrinho esteja correto.



## Direcionamento para pagamento  
Após confirmar os itens, o usuário é automaticamente direcionado para a página de pagamento.

##Confirmação da compra  
Na página de pagamento, o usuário informa seu nome e e-mail nos campos obrigatórios e confirma o pagamento, finalizando o processo de compra. 
