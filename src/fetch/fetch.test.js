import axios from 'axios'
import fetch from './fetch';
import listMock from '../__mocks__/listMock';

jest.mock('axios');

describe('Axios test', () => {
  axios.get.mockReturnValue(listMock);

  it('Axios get', async() => {
    const fetchApi = await fetch();
    const listFetch = await fetchApi.getList;
    const {id, name, username, email, active, companyId, documentNumber, authId} = listFetch;

    expect(id).toBeDefined();
    expect(name).toBeDefined();
    expect(username).toBeDefined();
    expect(email).toBeDefined();
    expect(active).toBeDefined();
    expect(companyId).toBeDefined();
    expect(documentNumber).toBeDefined();
    expect(authId).toBeDefined();
  })
});