import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Flex from 'components/Flex'
import theme from 'theme'
import GridLoader from 'react-spinners/GridLoader'

const Wrapper = styled(Flex)`
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

function LoadingSpinner({ color, ...props }) {
  return (
    <Wrapper>
      <GridLoader
        color={color}
        size={8}
        {...props}
      />
    </Wrapper>
  )
}

LoadingSpinner.defaultProps = {
  color: theme.white
}

LoadingSpinner.propTypes = {
  color: PropTypes.string
}

export default LoadingSpinner
