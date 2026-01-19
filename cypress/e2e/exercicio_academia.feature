        #utf-8
        # language: pt
        Funcionalidade: Compra de Café no Coffee Cart

        Cenário: Realizar compra completa com promoção e remoção de um item

        Dado que o usuário acessa o site Coffee Cart
        Quando o usuário seleciona três tipos de cafés diferentes
        E o usuário aceita a oferta promocional do Mocha
        E o usuário remove um item do carrinho
        E o usuário vai ao carrinho e valida os produtos
        Então o usuário é direcionado para a página de pagamento
        E o usuário informa seu nome e e-mail para confirmar o pagamento











