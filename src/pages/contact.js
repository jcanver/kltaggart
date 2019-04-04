import React from 'react'
import PageWrapper from 'components/PageWrapper'
import Background from 'components/Background'
import Fade from 'components/Fade'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import handleNavigate from 'utils/navigation'
import bgSrc from 'assets/fire.jpg'
import ContactForm from 'containers/Contact/containers/ContactForm'

class Contact extends React.PureComponent {
  state = {
    pageLoaded: false
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Contact'

  componentDidMount() {
    this.preload()
  }

  preload = () => {
    const img = new Image()
    img.src = bgSrc
    img.onload = () => this.setState({ pageLoaded: true })
  }

  render() {
    const { pageLoaded } = this.state
    return (
      <PageWrapper loaded={pageLoaded} title="Contact">
        <Background src={bgSrc} overlay="0.5" minHeight="600px">
          <Nav active={this.page} handleNavigate={this.handleNavigate} loaded={pageLoaded} />
          <Fade show={pageLoaded} bottom>
            <ContactForm />
          </Fade>

          <Footer page={this.page} show={pageLoaded} />
        </Background>
      </PageWrapper>
    )
  }
}

export default Contact
