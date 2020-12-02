import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export function getValidationErrors(err: ValidationError): Errors {
  const validationErrros: Errors = {};

  err.inner.forEach(error => {
    validationErrros[error.path] = error.message;
  });

  return validationErrros;
}
