export const maskCpf = cpf => {
  if(!cpf)
    return '';
    
  return cpf
    .toString()
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const maskCnpj = cnpj => {
  if(!cnpj)
    return '';

  return cnpj
    .toString()
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

export const maskDecimal = decimal => {
  if (!decimal) {
    return '';
  }

  decimal /= 100; // cent to dollar

  return decimal
    .toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'decimal',
      currency: 'BRL',
    })
    .replace(',', '.');
};

export const decimalMaskUpToOneHundred = decimal => {
  if (!decimal) {
    return '';
  }

  return decimal.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
};

export const maskZipcode = zipcode => {
  if (!zipcode) {
    return '';
  }

  return zipcode
    .toString()
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2');
};

export const maskDocumentNumber = documentNumber => {
  if (!documentNumber) {
    return '';
  }

  const document = documentNumber.replace(/[^\w\s]/gi, '');
  return document.length === 11 ? maskCpf(document) : maskCnpj(document);
};

export const getDocumentLabel = documentNumber => {
  if(!documentNumber)
    return '';

  return documentNumber && documentNumber.length === 11 ? 'CPF:' : 'CNPJ:';
}

export const maskDocumentNumberText = documentNumber => {
  if (!documentNumber) {
    return '';
  }

  const documentLabel = getDocumentLabel(documentNumber);
  const maskedDocument = maskDocumentNumber(documentNumber);

  return `${documentLabel} ${maskedDocument}`;
};

export const onlyNumbers = string => {
  if (!string) {
    return '';
  }

  return string.toString().replace(/[^\d]+/g, '');
};
