'use strict'

exports.email = function (value) {
  if (typeof value !== 'string') {
    return 'InvalidEmail'
  }
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    ? undefined
    : 'InvalidEmail'
}

exports.required = function (value) {
  if (typeof value === 'number') {
    return undefined
  } else if (typeof value === 'object') {
    return undefined
  } else if (typeof value === 'boolean' && (value === true || value === false)) {
    return undefined
  }
  if (typeof value === 'string') {
    if (value.trim().length > 0) {
      return undefined
    } else {
      return 'Required'
    }
  }
  return value ? undefined : 'Required'
}

exports.intlPhoneNumber = function (value) {
  if (typeof value !== 'string') {
    return 'InvalidIntlPhoneNumber'
  }
  return /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/g.test(value)
    ? undefined
    : 'InvalidIntlPhoneNumber'
}

exports.positiveNumber = function (value) {
  return typeof value === 'number' && value > 0
    ? undefined
    : 'InvalidPositiveNumber'
}

exports.negativeNumber = function (value) {
  return typeof value === 'number' && value < 0
    ? undefined
    : 'InvalidNegativeNumber'
}
