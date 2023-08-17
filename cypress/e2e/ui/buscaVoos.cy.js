
describe('Buscar por voos', () => { // Inicio describe

    context('Não logado', () => { // Inicio context

        beforeEach(() =>{ // Início do before

            cy.visit('/') // Abre o navegador na página da urlBase

        }) // final do before

        // Este é o nosso primeiro teste
        it('Buscar voos entre São Paolo e Cairo', () => {
            // Veja se o titulo da guia/aba é igual a 'BlazeDemo'
            cy.title().should('eq', 'BlazeDemo')

            // Seleciona o combo Origem pelo CssSelector
            // Identificando que deve ser o primeiro (0)
            // Selecionando a opção 'São Paolo'
            cy.get('select.form-inline')
                .eq(0)
                .select('São Paolo')

            cy.get('select.form-inline')
                .eq(1)
                .select('Cairo')

            // Clicar no botão Find Flights / Procurar Voos
            cy.get('.btn.btn-primary')
                .click()

            // Transição para a página Reserve
            
            // Validar o titulo da aba/guia
            cy.title().should('eq', 'BlazeDemo - reserve')

            // Validar o cabeçalho da página
            cy.get('.container h3')
                .should('have.text', 'Flights from São Paolo to Cairo: ')

        });
        
    }); // final context 

}) // final describe