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
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > span:nth-child(2)").click();
          //cy.get("div[class='ant-col css-xh4nyb'] a").click();
          cy.get('button[type="button"]').click(); // or perform any other actions

          cy.get("input[placeholder='School Name']").type("11 school");
          cy.get('input[placeholder="Address 1"]').type('hyd');
          //cy.get("input[placeholder='Street']").type("1234");
          cy.get("input[placeholder='City']").type("avbgh");
          cy.get("div[name='state'] div[class='ant-select-selector']").click();
          cy.get("div[title='Arkansas'] div[class='ant-select-item-option-content']").click();
          cy.get("input[placeholder='Zip']").type("12346");
          cy.get("div[name='divisionType'] div[class='ant-select-selector']").click();
          cy.get("div[title='Building'] div[class='ant-select-item-option-content']").click();
          //cy.get("input[value='11 Customer']");
          cy.get("div[class='ant-space-item'] button[type='button']").click();
 
});
});