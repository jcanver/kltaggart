import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'theme/media'
import { Link } from '@reach/router'
import Links from './components/Links'

const Wrapper = styled.div`
  position: relative;
  padding: 1rem 0;
  width: 100%;
  color: white;
  z-index: 1000;
  ${media.mdDown`
    display: none;
  `}
`
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`
const HomeLink = styled(Link)`
  font-family: 'Permanent Marker';
  letter-spacing: 1px;
  font-size: 1.5rem;
  color: ${props => props.theme.white};
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

class DesktopNav extends React.PureComponent {
  render() {
    const { active, handleNavigate } = this.props

    return (
      <Wrapper>
        <InnerWrapper>
          {active !== 'Home' &&
            <HomeLink to="/" onClick={e => handleNavigate(e, '/')}>Kirsten Taggart</HomeLink>
          }
          <Links active={active} handleNavigate={handleNavigate} />
        </InnerWrapper>
      </Wrapper>
    )
  }
}

DesktopNav.propTypes = {
  active: PropTypes.string,
  handleNavigate: PropTypes.func
}

export default DesktopNav
