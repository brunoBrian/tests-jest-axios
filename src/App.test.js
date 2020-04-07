import {
  maskCpf,
  maskCnpj,
  maskDecimal,
  decimalMaskUpToOneHundred,
  maskZipcode,
  maskDocumentNumber,
  getDocumentLabel,
  maskDocumentNumberText,
  onlyNumbers
} from './App';

describe('Validations', () => {
  const documentNumbersArr = ['37591056883', '72354422000176', null];

  it('Should formatted cpf', () => {
    const cpf = maskCpf(documentNumbersArr[0]);
    const noValue = maskCpf(documentNumbersArr[2]);

    expect(cpf).toBe('375.910.568-83')
    expect(noValue).toBe('')
  });

  it('Should formatted cnpj', () => {
    const cnpj = maskCnpj(documentNumbersArr[1]);
    const noValue = maskCpf(documentNumbersArr[2]);

    expect(cnpj).toBe('72.354.422/0001-76');
    expect(noValue).toBe('')
  });

  it('Should show formatted document number', () => {
    const documentNumbers = documentNumbersArr.map(number => maskDocumentNumber(number))

    expect(documentNumbers[0]).toBe('375.910.568-83');
    expect(documentNumbers[1]).toBe('72.354.422/0001-76');
    expect(documentNumbers[2]).toBe('');
  });

  it('Should show document number label', () => {
    const documentNumbers = documentNumbersArr.map(number => getDocumentLabel(number))

    expect(documentNumbers[0]).toBe('CPF:');
    expect(documentNumbers[1]).toBe('CNPJ:');
    expect(documentNumbers[2]).toBe('');
  });

  it('Should format label + document number', () => {
    const documentNumbers = documentNumbersArr.map(number => maskDocumentNumberText(number))

    expect(documentNumbers[0]).toBe('CPF: 375.910.568-83');
    expect(documentNumbers[1]).toBe('CNPJ: 72.354.422/0001-76');
    expect(documentNumbers[2]).toBe('');
  });

  it('Should format only numbers', () => {
    const numbers = onlyNumbers('37hah591ffd0gg568ddg8g.@3');
    const emptyNumber = onlyNumbers(documentNumbersArr[2]);

    expect(numbers).toBe('37591056883');
    expect(emptyNumber).toBe('');
  });

  it('Should show number as decimal format', () => {
    const decimal = maskDecimal('50000');
    const emptyDecimal = onlyNumbers(documentNumbersArr[2]);

    expect(decimal).toBe('500.00');
    expect(emptyDecimal).toBe('');
  });

  it('Should show number as decimal format until one hundred', () => {
    const decimal = decimalMaskUpToOneHundred('2000');
    const emptyDecimal = decimalMaskUpToOneHundred(documentNumbersArr[2]);

    expect(decimal).toBe('20.00');
    expect(emptyDecimal).toBe('');
  });

  it('Should formatted zip code', () => {
    const zipCode = maskZipcode('09350642');
    const emptyZipCode = maskZipcode(documentNumbersArr[2]);

    expect(zipCode).toBe('09350-642');
    expect(emptyZipCode).toBe('');
  });
});