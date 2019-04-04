import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
const Item = styled(Link)`
  margin-left: 3rem;
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 1px;
  cursor: pointer;
  color: ${props => props.active ? props.theme.secondary : props.theme.white};
  text-decoration: none;
  transition: opacity 0.4s;
  opacity: ${props => props.opacity};
  &:hover {
    opacity: 1;
  }
`

function Links({ active, handleNavigate }) {
  return (
    <Wrapper>
      <Item
        active={active === 'Video' ? 'true' : undefined}
        to="/video"
        opacity={getOpacity(active, '/video')}
        onClick={e => handleNavigate(e, '/video')}
      >VIDEO</Item>

      <Item
        active={active === 'Photo' ? 'true' : undefined}
        to="/photo"
        opacity={getOpacity(active, '/photo')}
        onClick={e => handleNavigate(e, '/photo')}
      >PHOTO</Item>

      {/* <Item
        active={active === 'Contact' ? 'true' : undefined}
        to="/contact"
        opacity={getOpacity(active, '/contact')}
        onClick={e => handleNavigate(e, '/contact')}
      >CONTACT</Item> */}
    </Wrapper>
  )
}

function getOpacity(active, dest) {
  if (active === dest) {
    return '1'
  }
  return '0.75'
}

Links.propTypes = {
  active: PropTypes.string,
  handleNavigate: PropTypes.func.isRequired
}

export default Links
