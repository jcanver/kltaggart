import React from 'react'
import { withSiteData } from 'react-static'
import PageWrapper from 'components/PageWrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Fade from 'components/Fade'
import Background from 'components/Background'
import bgSrc from 'assets/skull.jpg'
import handleNavigate from 'utils/navigation'
import CopyBlock from 'containers/Home/components/CopyBlock'
import timeout from 'utils/timeout'

class Home extends React.PureComponent {
  state = {
    pageLoaded: false
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Home'

  componentDidMount() {
    this.handlePageLoad()
  }

  handlePageLoad = async () => {
    await timeout(1000)
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
      <PageWrapper loaded={pageLoaded} title="Home">
        <Background src={bgSrc} overlay="0.65" minHeight="500px">
          <Nav active={this.page} handleNavigate={this.handleNavigate} loaded={pageLoaded} />

          <Fade show={pageLoaded} bottom styles={{ height: 'inherit' }}>
            <CopyBlock />
          </Fade>

          <Footer
            page={this.page}
            show={pageLoaded}
            handleNavigate={this.handleNavigate}
          />
        </Background>
      </PageWrapper>
    )
  }
}

export default withSiteData(Home)
