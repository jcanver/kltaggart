import React from 'react'
import axios from 'axios'
// import TextField from '@material-ui/core/TextField'
import { textFieldProps, Submit, Field, InnerWrapper, Form, Error, Thanks } from './styles'
import validate from './validation'

class ContactForm extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  }

  submit = () => {
    if (!this.state.submitted) {
      const errors = validate(this.state)
      this.setState({ errors })

      axios({
        method: 'post',
        url: './generate-email.php',
        data: {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        }
      }).then(() => {
        this.setState({
          name: '',
          email: '',
          message: '',
          submitted: true
        })
      })
    }
  }

  render() {
    const { errors, name, email, message } = this.state

    return (
      <Form submitted={this.state.submitted}>
        <InnerWrapper>
          {/* <Field>
            <TextField
              name="name"
              floatingLabelText="Name"
              floatingLabelFixed
              {...textFieldProps}
              value={name}
              onChange={evt => this.setState({ name: evt.target.value })}
            />
            <Error show={errors.name}>{errors.name}</Error>
          </Field>
          <Field>
            <TextField
              name="email"
              floatingLabelText="Email"
              floatingLabelFixed
              {...textFieldProps}
              value={email}
              onChange={evt => this.setState({ email: evt.target.value })}
            />
            <Error show={errors.email}>{errors.email}</Error>
          </Field>
          <Field>
            <TextField
              name="message"
              floatingLabelText="Message"
              floatingLabelFixed
              {...textFieldProps}
              value={message}
              onChange={evt => this.setState({ message: evt.target.value })}
              multiLine
            />
            <Error show={errors.message}>{errors.message}</Error>
          </Field> */}
          <Submit onClick={() => this.submit()} submitted={this.state.submitted}>
              SUBMIT
            <Thanks submitted={this.state.submitted}>THANK YOU</Thanks>
          </Submit>
        </InnerWrapper>
      </Form>
    )
  }
}

export default ContactForm
