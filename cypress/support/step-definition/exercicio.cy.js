import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import CarrinhoCafe from '../pages/carrinhoCafe.page';

Given('que o usuário acessa o site Coffee Cart', () => {
  CarrinhoCafe.acessarPagina();
});

When('o usuário seleciona três tipos de cafés diferentes', () => {
  CarrinhoCafe.cafeCard();
});

And('o usuário aceita a oferta promocional do Mocha', () => {
  CarrinhoCafe.validarMocha();
});

And('o usuário vai ao carrinho e valida os produtos', () => {
  CarrinhoCafe.selecionarCart()
  CarrinhoCafe.confirmarValores();
});

And('o usuário remove um item do carrinho', () => {
  CarrinhoCafe.removerItem();
});

Then('o usuário é direcionado para a página de pagamento', () => {
  CarrinhoCafe.pagamento();
});

And('o usuário informa seu nome e e-mail para confirmar o pagamento', () => {
  CarrinhoCafe.validacaoCompra();
});



