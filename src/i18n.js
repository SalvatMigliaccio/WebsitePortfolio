import en from './translations/en';

export function t(key) {
  return en[key] ?? key;
}
