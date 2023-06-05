const passwordRule = {
  minLength: {
    value: 8,
    message: 'Your password is too short.'
  },
  maxLength: {
    value: 15,
    message: 'Your password is too long.'
  },
  pattern: {
    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    message: 'Your password must contain at least one number, one uppercase letter, and one lowercase letter.'
  }
}

const emailRule = {
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email.'
  }
}

export { passwordRule, emailRule };
