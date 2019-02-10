# Redux-form field validation

[![](https://img.shields.io/npm/v/redux-form-field-validation.svg?style=flat)](https://www.npmjs.com/package/redux-form-field-validation)
[![](https://img.shields.io/bundlephobia/min/redux-form-field-validation.svg?style=flat)](https://github.com/sidletsky/redux-form-field-validation)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Simple test-driven redux-form fields validation

## Install
```
yarn add redux-form-field-validation
```
or 
```
npm i redux-form-field-validation
```

## Usage
MyForm.js
```js
import { required, email } from 'redux-form-field-validation';

...

<Field
    id="email"
    name="email"
    component={Input}
    validate={[required, email]}
    placeholder="Email"
    type="text"
/>

...
```
Input.js
```js
...

const Input = ({
  placeholder,
  meta,
  ...props
}) => (
  <Fragment>
      <input
        isInvalid={meta.error}
        touched={meta.touched}
        id={id}
        {...props.input}
        placeholder={placeholder}
        {...props}
      />
    {meta.touched && meta.error && (
      <div>{meta.error}</div>
    )}
  </Fragment>
);

...

```
## API

| Property        | Description           | Error message | Note |
| -------------   |---------------------|--------------|-----|
| email           | checks email validity | InvalidEmail   | According to RFCs. Taken from emailregex.com|
| required        | makes field required  | Required       ||
| intlPhoneNumber | international phone number | InvalidIntlPhoneNumber | starts with "+" and does not contain spaces |
| positiveNumber  | checks if a number is bigger than zero | InvalidPositiveNumber |  |
| negativeNumber  | checks if a number is smaller than zero | InvalidNegativeNumber |  |


## Dependencies
none!
