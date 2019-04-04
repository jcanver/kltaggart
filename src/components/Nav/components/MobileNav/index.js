import React from 'react'
import PropTypes from 'prop-types'
import media from 'theme/media'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Flex from 'components/Flex'
import Links from './components/Links'

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => !props.keepTransparent && props.theme.primary};
  ${media.mdUp`
    display: none;
  `}
`
const Row = styled(Flex)`
  flex-grow: 1;
  padding: 1rem 1.5rem;
`
const Burger = styled.div`
  width: 20px;
  z-index: 10;
  opacity: 0.5;
  cursor: pointer;
  justify-self: flex-end;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
  div {
    height: 2px;
    background: white;
    margin-bottom: 3px;
  }
`
const HomeLink = styled(Link)`
  font-family: 'Permanent Marker';
  letter-spacing: 1px;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  opacity: ${props => props.hide ? '0' : '1'};
  pointer-events: ${props => props.hide ? 'none' : 'auto'};
`
// const Divider = styled.div`
//   height: 1px;
//   width: 100%;
//   margin: 0 auto;
//   background: radial-gradient(rgba(255,255,255,0.4) 25%, transparent 75%);
// `

class MobileNav extends React.PureComponent {
  state = {
    show: false
  }

  close = () => this.setState({ show: false })

  goTo = (e, url) => {
    this.setState({ show: false })
    this.props.handleNavigate(e, url)
  }

  render() {
    const { active, handleNavigate } = this.props

    return (
      <Wrapper keepTransparent={active === 'Home'}>
        <Row>
          <HomeLink
            hide={active === 'Home' ? 1 : 0}
            to="/"
            onClick={e => {
              this.setState({ show: false })
              handleNavigate(e, '/')
            }}
          >Kirsten Taggart</HomeLink>
          <Burger onClick={() => this.setState({ show: true })}>
            <div />
            <div />
            <div />
          </Burger>
        </Row>

        {/* <Divider /> */}

        <Links
          close={this.close}
          show={this.state.show}
          goTo={this.goTo}
        />
      </Wrapper>
    )
  }
}

MobileNav.propTypes = {
  active: PropTypes.string
}

export default MobileNav
