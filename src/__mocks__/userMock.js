import faker from 'faker';

faker.locale = 'pt_BR';

export default {
  getUserSuccess: jest.fn(() => Promise.resolve({
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
    data: {
      name: `${faker.name.findName()}`,
      login: faker.internet.userName(),
      email: faker.internet.email(),
      avatar_url: faker.image.avatar(),
      repos_url: faker.internet.url(),
      url: faker.internet.url(),
      created_at: faker.date.past(),
      updated_at: faker.date.past(),
    }
  })),

  getUserError401: jest.fn(() => Promise.resolve({
    config: {},
    toJSON: () => ({}),
    name: 'teste',
    message: 'teste2',
    response: {
      status: 401,
      statusText: 'Unauthorized',
      headers: {},
      config: {},
      data: {
        error: 'UnauthenticatedException',
        error_description: 'Falha na autenticação, acesso negado.'
      }
    }
  })),

  getUserError403: jest.fn(() => Promise.resolve({
    config: {},
    isAxiosError: true,
    toJSON: () => ({}),
    name: 'teste',
    message: 'teste2',
    response: {
      status: 403,
      statusText: 'Forbidden',
      headers: {},
      config: {},
      data: {
        error: 'AccessDeniedException',
        error_description: 'Usuário não tem permissão para acessar esse recurso'
      }
    }
  })),
};