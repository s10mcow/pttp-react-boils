// import translator from 'i18next';
// import VatValidator from 'eu-vat-validation';
// import { isValidIBAN, isValidBIC } from 'ibantools';

// const vatValidator = new VatValidator();

// export const isValid = ({ meta, theme, invalidate, ...rest }, color) => {
//   if (!meta) {
//     return theme.colors.LIGHTER_GREY;
//   }

//   if (invalidate) {
//     if (meta.invalid) {
//       return theme.colors.RED_50;
//     }
//   }

//   if (meta.invalid && meta.pristine && meta.touched) {
//     return theme.colors.RED_50;
//   }

//   if (meta.invalid && !meta.pristine && meta.touched) {
//     return theme.colors.RED_50;
//   }

//   return color ? color : theme.colors.LIGHTER_GREY;
// };

// const _requiredValidator = value =>
//   value
//     ? undefined
//     : translator.t('input_error_messages.required', {
//       defaultValue: 'Erforderlich',
//     });

// const _email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? translator.t('input_error_messages.invalid_email', {
//       defaultValue: 'ungültige E-Mail-Adresse',
//     })
//     : undefined;

// // We should implement this for phone validation -> https://github.com/googlei18n/libphonenumber/
// const _phone = value =>
//   value && value.length > 7
//     ? undefined
//     : translator.t('input_error_messages.invalid_phone_number', {
//       defaultValue: 'ungültige Telefonnummer',
//     });

// const _minLength = (value, min) =>
//   value && value.length >= min
//     ? undefined
//     : translator.t('input_error_messages.invalid_length', {
//       defaultValue: 'Mindestens {{min}} Zeichen.',
//       min,
//     });

// const _vat = value =>
//   value && vatValidator.validate(value)
//     ? undefined
//     : translator.t('input_error_messages.invalid_vat', {
//       defaultValue: 'ungültige Ust.-IdNr.',
//     });

// const _iban = value =>
//   !value || (value && isValidIBAN(value))
//     ? undefined
//     : translator.t('input_error_messages.invalid_iban', {
//       defaultValue: 'ungültige IBAN.',
//     });

// const _bic = value =>
//   !value || (value && isValidBIC(value))
//     ? undefined
//     : translator.t('input_error_messages.invalid_bic', {
//       defaultValue: 'ungültige BIC.',
//     });

// const _minLength6 = value => _minLength(value, 6);

// export const setUpValidation = ({ required, type, ...rest }) => {
//   const validators = [];

//   const { minLength } = rest;

//   if (required) {
//     validators.push(_requiredValidator);
//   }

//   if (type === 'email') {
//     validators.push(_email);
//   }

//   if (type === 'phone') {
//     validators.push(_phone);
//   }

//   if (minLength === 6) {
//     validators.push(_minLength6);
//   }

//   if (type === 'vat') {
//     validators.push(_vat);
//   }

//   if (type === 'iban') {
//     validators.push(_iban);
//   }

//   if (type === 'bic') {
//     validators.push(_bic);
//   }

//   return validators;
// };
