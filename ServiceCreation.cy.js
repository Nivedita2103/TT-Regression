describe('template first', () => {
    it('passes', () => {
        
            cy.visit('https://mirabh.dev.teleteachers.us/portal/login.cypress.io');
            cy.wait(5000);
            cy.get('input[name=username]').type("madhulatha+mirabh@ensarsolutions.com");
            cy.get('input[name=password]').type("Tele@123");
            cy.get('button[type=submit]').click();
            cy.wait(5000);
         
      cy.get('.ant-menu-submenu-title').invoke('attr', 'style', 'visibility: visible;');
      cy.get('.ant-menu-submenu-title').click( {force: true});
      cy.get('a[href="/portal/setup/services"]').click({ force: true });
      cy.contains('Create').click();
      cy.get('input[placeholder="Service Code"]').type("4444444");
    // Declare a variable
const serviceName = 'AutomationService1';

cy.wait(5000);
cy.get('input[placeholder="Service Name"]').type(serviceName);
cy.get('div[name="servicesallDisciplines"] div[class="ant-select-selection-overflow"]').click();
cy.wait(5000);
cy.get('div[title="All"] div[class="ant-select-item-option-content"]').click();
cy.wait(5000);
cy.contains('Show Goals for Documentation').click( {force: true});
cy.contains('Save').click();







    });
});
