import { faker } from '@faker-js/faker';

Cypress.Commands.add('gerarUsuario', (sobrescritas = {}) => {
  const sufixoUnico = `${Date.now()}${faker.string.alphanumeric(6)}`.toLowerCase();

  const usuario = {
    name: faker.person.fullName(),
    email: `qa.${sufixoUnico}@mailautomation.test`,
    password: faker.internet.password({ length: 10 }),
    title: 'Mr',
    birth_date: '10',
    birth_month: '5',
    birth_year: '1990',
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'United States',
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number(),
    ...sobrescritas,
  };

  return cy.wrap(usuario, { log: false });
});

Cypress.Commands.add('criarUsuarioViaApi', (sobrescritas = {}) => {
  return cy.gerarUsuario(sobrescritas).then((usuario) => {
    return cy
      .request({
        method: 'POST',
        url: '/api/createAccount',
        form: true,
        body: usuario,
      })
      .then((resposta) => {
        const corpo = typeof resposta.body === 'string' ? JSON.parse(resposta.body) : resposta.body;
        expect(resposta.status).to.eq(200);
        expect(corpo.responseCode).to.eq(201);
        return usuario;
      });
  });
});

Cypress.Commands.add('excluirContaViaApi', (email, senha) => {
  return cy.request({
    method: 'POST',
    url: '/api/deleteAccount',
    form: true,
    body: { email, password: senha },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('limparUsuario', (dadosUsuario) => {
  if (!dadosUsuario || !dadosUsuario.email) {
    return;
  }
  cy.excluirContaViaApi(dadosUsuario.email, dadosUsuario.password);
});
