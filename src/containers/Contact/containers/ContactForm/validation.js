const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

function validateContactSubmission({ name, email, message }) {
  const errors = {}

  if (!name) {
    errors.name = 'Required'
  } else {
    errors.name = ''
  }
  if (!email) {
    errors.email = 'Required'
  } else if (!emailTest.test(email)) {
    errors.email = 'Invalid email address'
  } else {
    errors.email = ''
  }
  if (!message) {
    errors.message = 'Required'
  } else {
    errors.message = ''
  }

  return errors
}

export default validateContactSubmission
