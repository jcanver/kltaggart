import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bg = styled.div`
  background: ${props => props.color};
  position: absolute;
  width: 100vw;
  height: 100vh;
  min-height: ${props => props.minHeight};
  overflow: hidden;
`
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, ${props => props.overlay || '0.35'});
  background: radial-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45));
`
const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`

const Background = ({ src, children, color, overlay, minHeight }) => (
  <Bg color={color} minHeight={minHeight}>
    {src &&
    <Img src={src} />
    }
    <Overlay overlay={overlay}>
      {children}
    </Overlay>
  </Bg>
)

Background.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  color: PropTypes.string,
  overlay: PropTypes.string,
  minHeight: PropTypes.string
}

export default Background
