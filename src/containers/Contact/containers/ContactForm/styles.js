import styled from 'styled-components'

const Form = styled.form`
  text-align: center;
  width: 450px;
  border-radius: 3px;
  margin: 0 auto;
  position: relative;
  top: 7rem;
  @media(max-width: 500px) {
    width: 100%;
  }
  transition: transform 0.3s, opacity 0.3s;
  backface-visibility: hidden;
`
const InnerWrapper = styled.div`
  padding: 0 1.5rem;
`
const Field = styled.div`
  margin-top: 2rem;
  width: 100%;
  textarea {
    color: white !important;
  }
`
const Submit = styled.div`
  color: white;
  padding: 0.75rem 2rem;
  border: 2px solid white;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.1);
  cursor: ${props => props.submitted ? 'default' : 'pointer'};
  font-weight: 100;
  font-size: 1rem;
  display: inline-block;
  margin-top: 3rem;
  opacity: ${props => props.submitted ? '1' : '0.5'};
  letter-spacing: 2px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`
const Error = styled.div`
  position: absolute;
  right: 1.5rem;
  color: #F54F29;
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.3s;
`
const Thanks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 2px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.submitted ? '1' : '0'};
  transition: opacity 0.3s;
`

const textFieldProps = {
  style: {
    width: '100%',
    color: 'white'
  },
  floatingLabelFocusStyle: {
    color: 'white'
  },
  floatingLabelStyle: {
    color: 'white',
    left: '0'
  },
  underlineFocusStyle: {
    borderColor: 'white'
  },
  inputStyle: {
    color: 'white'
  }
}

export { textFieldProps, Submit, Field, InnerWrapper, Form, Error, Thanks }
