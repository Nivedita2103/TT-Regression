describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://mirabh.dev.teleteachers.us/portal/login.cypress.io');
        cy.wait(5000);
        cy.get('input[name=username]').type("madhulatha+mirabh@ensarsolutions.com");
        cy.get('input[name=password]').type("Tele@123");
        cy.get('button[type=submit]').click();
        cy.wait(5000);
      cy.wait(10000);
       cy.get('.ant-menu-submenu-title').invoke('attr', 'style', 'visibility: visible;');
     cy.get('.ant-menu-submenu-title').click( {force: true});
    cy.get('a[href="/portal/setup/customers"]').click({ force: true });
    cy.get("div[class='ant-space-item'] a").click();
    cy.get("input[placeholder='District Name']").type("11customer");
    cy.get('input[placeholder="Address 1"]').type('hyd');
    //cy.get("input[placeholder='Street']").type("AA");
    cy.wait(3000);
    cy.get("input[placeholder='City']").type("vizag");
    cy.get("div[name='stateId']").click();
    cy.get("div[title='Arkansas'] div[class='ant-select-item-option-content']").click({force:true});
    cy.get("input[placeholder='Zip']").type("51234");
    cy.wait(3000);
    cy.get("div[name='customerType'] div[class='ant-select-selector']").click();
    cy.get("div[title='Charter Schools'] div[class='ant-select-item-option-content']").click();
    cy.get("div[class='ant-space-item'] button[type='button']").click();
    });
});  
