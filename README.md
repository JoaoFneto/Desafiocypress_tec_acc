
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



## Confirmação da compra  
Na página de pagamento, o usuário informa seu nome e e-mail nos campos obrigatórios e confirma o pagamento, finalizando o processo de compra. 



## Instalação de dependências — passo a passo
Verificar pré-requisitos



## Node.js  (versão LTS recomendada) e npm instalados.
Confirme no terminal:
bash
node -v
npm -v


## Clonar o repositório
bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio



## Instalar as dependências do projeto
Instala tudo que está no package.json:
bash
npm install



## (Opcional) Instalar Cypress manualmente



Caso esteja montando do zero ou queira atualizar:
bash
npm install --save-dev cypress



## (Opcional) Instalar Cucumber preprocessor
Para cenários em Gherkin:
bash
npm install --save-dev cypress-cucumber-preprocessor



## Validar instalação
Abra o Test Runner:
bash
npx cypress open



## Executar cenários em Gherkin
No Test Runner, selecione o arquivo .feature em cypress/e2e/features/.
Certifique-se de que os step_definitions correspondem exatamente ao texto dos steps.



## (Opcional) Atualizar dependências
Para manter tudo atualizado:
bash
npm outdated
npm update



## (Opcional) Scripts no package.json
Facilite a execução adicionando:
json
{
  "scripts": {
    "test:ui": "cypress open",
    "test:run": "cypress run"
  }
}
