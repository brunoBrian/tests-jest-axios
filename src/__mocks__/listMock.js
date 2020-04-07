import faker from 'faker';

export default {
  getList: Promise.resolve({
    id: faker.random.number(),
    name: `${faker.name.findName()}`,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    active: faker.random.boolean(),
    blocked: faker.random.boolean(),
    companyId: faker.random.number(99999),
    documentNumber: faker.random.number(99999999999),
    authId: faker.random.uuid()
  })
};