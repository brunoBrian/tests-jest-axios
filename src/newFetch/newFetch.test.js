// users.test.js
import UserMock from '../__mocks__/userMock';
import axios from 'axios'
import Users from './index';

jest.mock('axios');

describe('Fetch user data', async () => {
  axios.get.mockReturnValue(UserMock);
  
  it('should fetch user success', async () => {
    const users = await Users();
    const getUser = await users.getUserSuccess();
    const {data, status} = getUser;

    expect(status).toBe(200);
    expect(data.name).toBeDefined();
    expect(data.email).toBeDefined();
    expect(data.login).toBeDefined();
    expect(data.avatar_url).toBeDefined();
    expect(data.url).toBeDefined();
    expect(data.repos_url).toBeDefined();
    expect(data.created_at).toBeDefined();
    expect(data.updated_at).toBeDefined();
  });

  it('should fetch user and get error 401', async () => {
    const users = await Users();
    const getUser = await users.getUserError401();
    const {status, statusText, data: {error, error_description}} = getUser.response;
  
    expect(status).toBe(401);
    expect(statusText).toBe('Unauthorized');
    expect(error).toBeDefined();
    expect(error_description).toBeDefined();
  });

  it('should fetch user and get error 403', async () => {
    const users = await Users();
    const getUser = await users.getUserError403();
    const {status, statusText, data: {error, error_description}} = getUser.response;

    expect(status).toBe(403,);
    expect(statusText).toBe('Forbidden');
    expect(error).toBeDefined();
    expect(error_description).toBeDefined();
  });
})
