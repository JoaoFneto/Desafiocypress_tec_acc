
##📘 Projeto Coffee Cart – Testes Automatizados
Este projeto tem como objetivo automatizar o fluxo de compra no Coffee Cart, 
cobrindo desde a seleção de cafés até a confirmação do pagamento.
Os cenários foram escritos em Gherkin para facilitar a comunicação entre equipe técnica e de negócio, 
e implementados com Cypress utilizando o cypress-cucumber-preprocessor, 
aplicando o padrão Page Object para organizar seletores e métodos de forma reutilizável.


##🔧 Tecnologias e Ferramentas
Cypress: framework de testes end-to-end para aplicações web
Cucumber (cypress-cucumber-preprocessor): escrita de cenários em Gherkin
Page Object Pattern: organização dos seletores e métodos
Node.js  + npm: ambiente de execução e gerenciamento de dependências
JavaScript (ES6+): linguagem utilizada nos testes



##🚀 Fluxo de Teste Automatizado
Usuário acessa o site Coffee Cart
Seleciona três tipos de cafés diferentes
Aceita a oferta promocional do Mocha
Remove um item do carrinho
Valida os produtos restantes no carrinho
É direcionado para a página de pagamento
Informa nome e e-mail para confirmar o pagamento
 
