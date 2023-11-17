describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://mirabh.dev.teleteachers.us/portal/login.cypress.io');
        cy.wait(5000);
        cy.get('input[name=username]').type("madhulatha+mirabh@ensarsolutions.com");
        cy.get('input[name=password]').type("Tele@123");
        cy.get('button[type=submit]').click();
        cy.wait(5000);
      cy.get('.ant-menu-submenu-title').invoke('attr', 'style', 'visibility: visible;');
 
      // Now you can click on the element
          cy.get('.ant-menu-submenu-title').click( {force: true});
          cy.get('a[href="/portal/setup/customers"]').click({ force: true });
          cy.get('li[class="ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal"] div[class="ant-menu-submenu-title"] span[class="anticon anticon-ellipsis"] svg') .first() .click();
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > span:nth-child(2)").click();
          //cy.get('ul[id="rc-menu-uuid-46150-25-rc-menu-more-popup"] li[title="Clients"] span[class="ant-menu-title-content"]').click();
          cy.get('div[class="ant-col css-lgi57b"] a').click();
          cy.get('input[placeholder="First Name"]').type('11Student');
          cy.get('input[placeholder="Last Name"]').type('student');
          cy.get('span[title="null"]').click();
          cy.get('span[title="11customer"]').click();

          cy.get('div[name="clientLocations"] div[class="ant-select-selection-overflow"]').click();
          cy.wait(5000);
          cy.wait(5000);
          cy.get("div[title='11 school'] div[class='ant-select-item-option-content']").click({force:true});
          //cy.get('div[class="ant-space-item"] button[type="button"]').click();
    });
});