'use strict'

exports.email = function (value) {
  if (typeof value !== 'string') {
    return 'InvalidEmail'
  }
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'InvalidEmail'
    : undefined
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
