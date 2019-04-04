import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import icons from './icons.json'

const Svg = styled.svg`
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};
  fill: ${props => props.theme[props.fill] || props.theme.primary};
  transition: fill 0.3s !important;
`

export default function Icon ({ name, className, style, ...props }) {
  return (
    <Svg className={className} {...props} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d={icons[name]} />
    </Svg>
  )
}

Icon.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.string.isRequired,
  props: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}
