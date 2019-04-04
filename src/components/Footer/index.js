import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import Transition from 'react-transition-group/Transition'
// import FaTwitter from 'react-icons/lib/fa/twitter'
// import FaLinkedin from 'react-icons/lib/fa/linkedin'
// import FaInstagram from 'react-icons/lib/fa/instagram'
// import FaEnvelope from 'react-icons/lib/fa/envelope'
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Flex from 'components/Flex'

const Wrapper = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  background: ${props => props.darkBg && '#111'};
  z-index: 1000;
`
const Divider = styled.div`
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background: radial-gradient(rgba(255,255,255,0.4) 25%, transparent 75%);
`
const LinksWrapper = styled(Flex)`
  justify-content: center;
`
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  font-size: 1rem;
  margin: 0.5rem;
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.secondary};
  }
  ${media.smDown`
    font-size: 1.5rem;
    margin: 1rem 0.75rem;
  `}
`
const defaultStyle = {
  transition: 'opacity 800ms, bottom 800ms',
  opacity: 0,
  bottom: '-40px',
  left: 0,
  position: 'fixed'
}
const transitionStyles = {
  entering: { opacity: 0, bottom: '-40px' },
  entered: { opacity: 1, bottom: 0 }
}

class Footer extends React.PureComponent {
  render() {
    const { page, show, timeout } = this.props
    return (
      <Transition in={show} timeout={timeout}>
        {state => (
          <Wrapper
            darkBg={page === 'Video' || page === 'Photo' || page === 'Category Videos' || page === 'Video Spotlight'}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Divider />

            <LinksWrapper>
              <Link href="https://twitter.com/kltaggart?lang=en" target="_blank">
                <FaTwitter />
              </Link>
              <Link href="https://www.linkedin.com/in/kirsten-taggart-23b36a18/" target="_blank">
                <FaLinkedin />
              </Link>
              <Link href="https://www.instagram.com/kirstentaggart/?hl=en" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="mailto:ktaggart12@gmail.com" target="_blank">
                <FaEnvelope />
              </Link>
            </LinksWrapper>
          </Wrapper>
        )}
      </Transition>
    )
  }
}

Footer.defaultProps = {
  timeout: 0
}

export default Footer
