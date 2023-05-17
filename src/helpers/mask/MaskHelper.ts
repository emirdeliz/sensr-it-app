export const maskCPF = (cpf: string) => {
  const cleanCPF = (cpf || '').replace(/\D/g, '');
  let cpfFormat = cleanCPF.length > 11 ? cleanCPF.slice(0, 11) : cleanCPF;

  return cpfFormat
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const maskMoney = (money: number) => {
  const moneyFormat = (money || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return moneyFormat;
};

export const maskCNPJ = (cnpj: string) => {
  const cleanCNPJ = (cnpj || '').replace(/\D/g, '');
  let cnpjFormat = cleanCNPJ.length > 14 ? cleanCNPJ.slice(0, 14) : cleanCNPJ;

  return cnpjFormat
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const maskDate = (value: string) => {
  return (value || '')
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?$/, '$1');
};

export const maskZipCode = (zipCode: string) => {
  const cleanZipCode = (zipCode || '').replace(/\D/g, '');
  const zipCodeFormat =
    cleanZipCode.length > 8 ? cleanZipCode.slice(0, 8) : cleanZipCode;

  return zipCodeFormat.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
};

export const maskCountryState = (countryState: string) => {
  return countryState.replace(/[^A-Z]/g, '');
};

export const maskBarcode = (barcode?: string | null) => {
  const barcodeAsString = String(barcode);
  if (barcodeAsString && barcodeAsString[0] === '8') {
    return (barcode || '')
      .replace(/(\d{11})(\d{1})(\d)/, '$1-$2 $3')
      .replace(/(\d{11})(\d{1})(\d)/, '$1-$2 $3')
      .replace(/(\d{11})(\d{1})(\d)/, '$1-$2 $3')
      .replace(/(\d{11})(\d{1})/, '$1-$2');
  }

  return (barcodeAsString || '')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{5})(\d)/, '$1 $2')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{6})(\d)/, '$1 $2')
    .replace(/(\d{6}) (\d{5})(\d)/, '$1 $2.$3')
    .replace(/(\d{6})(\d)/, '$1 $2')
    .replace(/(\d)(\d{7,13})/, '$1 $2');
};

export const maskBankAccount = (account: string) => {
  const cleanBankAccount = (account || '').replace(/\D/g, '');
  let bankAccount =
    cleanBankAccount.length > 13
      ? cleanBankAccount.slice(0, 9)
      : cleanBankAccount;

  return bankAccount.replace(/(\d)(\d{1}$)/, '$1-$2');
};

export const maskBankAgency = (agency: string) => {
  const cleanBankAgency = (agency || '').replace(/\D/g, '');
  let bankAgency =
    cleanBankAgency.length > 4 ? cleanBankAgency.slice(0, 4) : cleanBankAgency;

  return bankAgency;
};

export const maskMoneyInput = (input: string) => {
  let aux = (input || '').replace(/[^-&&^\d&&^.]/g, '');
  let value = parseFloat(aux);

  let base = 'R$ ';
  if (value < 0) {
    value = value * -1;
    base += '- ';
  }
  var valueWithMask = value.toFixed(2).split('.');
  valueWithMask[0] = base + valueWithMask[0].split(/(?=(?:...)*$)/).join('.');
  return valueWithMask.join(',');
};

export const removeMaskMoneyInput = (value: string) => {
  if (!value) {
    return '0';
  }

  const returnValue = value.replace(/[\D]+/g, '');
  switch (returnValue.length) {
    case 1:
      return `0.0${returnValue}`;
    case 2:
      return `0.${returnValue}`;
    default:
      return `${returnValue.slice(
        0,
        returnValue.length - 2
      )}.${returnValue.slice(returnValue.length - 2)}`;
  }
};

export const maskPhone = (phoneNumber: string) => {
  return (phoneNumber || '')
    .replace('+55', '')
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};

export const maskRG = (rg?: string) => {
  const value = rg || '';
  return value
    .replace(/[^\dX]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})([\dX]{1,2})$/, '$1-$2');
};

export const maskOnlyNumbers = (value: string) => {
  return (value || '').replace(/[\D]+/g, '');
};

export const limitCaracteres = (text: string, length: number) => {
  return (text || '').substring(0, length);
};

export const maskOnlyMMYYYY = (value: string) => {
  value = maskOnlyNumbers(value || '');
  return limitCaracteres(value, 6)
    .replace(/^(\d{2})(\d{1})$/g, '$1/$2')
    .replace(/^(\d{2})(\d{2})$/g, '$1/$2')
    .replace(/^(\d{2})(\d{3})$/g, '$1/$2')
    .replace(/^(\d{2})(\d{4})$/g, '$1/$2');
};
