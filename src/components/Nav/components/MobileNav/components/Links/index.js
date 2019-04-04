import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Delete from 'assets/icons/Delete'
import Flex from 'components/Flex'

const Wrapper = styled.div`
  position: fixed;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 11;
  transition: opacity 0.35s;
`
const Links = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  height: 100%;
`
const Divider = styled.div`
  height: 1px;
  width: 60px;
  background: white;
  margin: 1rem 0;
  opacity: 0.5;
`
const Item = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  letter-spacing: 6px;
  font-weight: 100;
`

function LinksComponent({ close, show, goTo }) {
  return (
    <Wrapper show={show}>
      <Delete onClick={close} />
      <Links>
        <div>
          <Item to="/" onClick={e => goTo(e, '/')}>HOME</Item>
        </div>
        <Divider />
        <div>
          <Item to="/video" onClick={e => goTo(e, '/video')}>VIDEO</Item>
        </div>
        <Divider />
        <div>
          <Item to="/photo" onClick={e => goTo(e, '/photo')}>PHOTO</Item>
        </div>
        {/* <Divider />
        <div>
          <Item to="/contact" onClick={e => goTo(e, '/contact')}>CONTACT</Item>
        </div> */}
      </Links>
    </Wrapper>
  )
}

LinksComponent.propTypes = {
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default LinksComponent
