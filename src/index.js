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
