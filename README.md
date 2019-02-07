# Redux-form field validation

![](https://img.shields.io/npm/v/redux-form-field-validation.svg?style=flat)
![](https://img.shields.io/bundlephobia/min/redux-form-field-validation.svg?style=flat)

Simple redux-form fields validation

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
import { email } from 'redux-form-field-validation';

...

<Field
    id="email"
    name="email"
    component={Input}
    validate={[email]}
    placeholder="Email"
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
      <HtmlInput
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

| Property        | Description           | Return message |
| -------------   |:-------------:        | -----:|
| email           | checks email validity | InvalidEmail |
