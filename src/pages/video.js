import React from 'react'
import styled from 'styled-components'
// import media from 'theme/media'
import categories from 'data/videoCategories'
import PageWrapper from 'components/PageWrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Flex from 'components/Flex'
import LoadingSpinner from 'components/LoadingSpinner'
import handleNavigate from 'utils/navigation'
import Categories from 'containers/Video/components/Categories'
import timeout from 'utils/timeout'

const OuterWrapper = styled(Flex)`
  flex-grow: 1;
  width: 100%;
  background: ${props => props.theme.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Fade = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s;
`

class Video extends React.PureComponent {
  state = {
    pageLoaded: false,
    assetsLoaded: false
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Video'

  componentDidMount () {
    this.handlePageLoad()
  }

  handlePageLoad = async () => {
    await timeout(500)
    await this.setPageLoaded()
    await timeout(500)
    await this.preloadImages(categories)
    // this.preloadVideos(videos)
  }

  setPageLoaded = () => this.setState({ pageLoaded: true })

  preloadImages = (imageArray, index) => {
    index = index || 0
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = imageArray[index].src
      img.onload = () => this.preloadImages(imageArray, index + 1)
    } else {
      this.setState({ assetsLoaded: true })
    }
  }

  render() {
    const { pageLoaded, assetsLoaded } = this.state

    return (
      <PageWrapper loaded={pageLoaded} title="Video">
        <Nav
          active={this.page}
          handleNavigate={this.handleNavigate}
          loaded={pageLoaded}
        />

        <OuterWrapper>
          <Fade show={!assetsLoaded}>
            <LoadingSpinner />
          </Fade>

          <Categories
            show={pageLoaded && assetsLoaded}
            handleNavigate={this.handleNavigate}
          />

          <Footer
            page={this.page}
            show={pageLoaded}
          />
        </OuterWrapper>
      </PageWrapper>
    )
  }
}

export default Video
