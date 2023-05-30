const passwordRule = {
  minLength: {
    value: 8,
    message: 'Your password not long enought'
  },
  maxLength: {
    value: 15,
    message: 'Your password too long'
  },
  pattern: {
    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    message: 'Please enter a valid password'
  }
}

const emailRule = {
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email'
  }
}

export { passwordRule, emailRule };
