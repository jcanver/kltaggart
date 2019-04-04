import React from 'react'
import styled from 'styled-components'
import photos from 'data/photos-lq'
import PageWrapper from 'components/PageWrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
// import Fade from 'components/Fade'
import LoadingSpinner from 'components/LoadingSpinner'
import handleNavigate from 'utils/navigation'
import Gallery from 'containers/Photo/components/Gallery'
import GalleryModal from 'containers/Photo/components/GalleryModal'

const Wrapper = styled.div`
  background: ${props => props.theme.primary};
  min-height: 100vh;
  width: 100%;
`

const Fade = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s;
`

class Photo extends React.PureComponent {
  state = {
    active: null,
    showModal: false,
    assetsLoaded: false,
    pageLoaded: false,
    photoDelays: photos.map((p, index) => (index + 1) * 50)
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Photo'

  componentDidMount () {
    Promise.resolve(this.setPageLoaded()).then(() => {
      setTimeout(() => {
        this.preload(photos)
      }, 2500)
    })
  }

  setPageLoaded = () => this.setState({ pageLoaded: true })

  preload = (imageArray, index) => {
    index = index || 0
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = photos[index]
      img.onload = () => this.preload(imageArray, index + 1)
    } else {
      this.setState({ assetsLoaded: true })
      // Promise.resolve(this.setState({ assetsLoaded: true })).then(() => {
      //   this.cascadeImages(photos)
      // })
    }
  }

  openModal = index => {
    Promise.resolve(this.setState({ active: index })).then(() => {
      this.setState({ showModal: true })
    })
  }
  handleNext = () => {
    this.setState({ active: this.state.active === photos.length - 1 ? 0 : this.state.active + 1 })
  }
  handlePrev = () => {
    this.setState({ active: this.state.active === 0 ? photos.length - 1 : this.state.active - 1 })
  }
  closeModal = () => {
    Promise.resolve(this.setState({ showModal: false })).then(() => {
      setTimeout(() => {
        this.setState({ active: null })
      }, 300)
    })
  }

  render () {
    const { showModal, active, assetsLoaded, pageLoaded, photoDelays } = this.state
    return (
      <PageWrapper loaded={pageLoaded} title="Photo">
        <Wrapper>
          <Nav
            active={this.page}
            handleNavigate={this.handleNavigate}
            loaded={pageLoaded}
          />

          <Fade show={!assetsLoaded}>
            <LoadingSpinner />
          </Fade>

          <Fade show={assetsLoaded}>
            <Gallery
              items={photos}
              itemsLoaded={assetsLoaded}
              remaining={['', '']}
              handleClick={this.openModal}
              show={assetsLoaded}
              photoDelays={photoDelays}
            />
          </Fade>

          <Fade show={assetsLoaded && showModal}>
            <GalleryModal
              photos={photos}
              show={showModal}
              active={active}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              closeModal={this.closeModal}
            />
          </Fade>

          <Footer page={this.page} show={pageLoaded} />
        </Wrapper>
      </PageWrapper>
    )
  }
}

export default Photo
