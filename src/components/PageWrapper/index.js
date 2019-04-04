import React from 'react'
import styled from 'styled-components'
// import { Head } from 'react-static'
import Fade from 'components/Fade'
import Flex from 'components/Flex'

const FlexWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
`

function PageWrapper({ loaded, title, children }) {
  return (
    <Fade show={loaded}>
      {/* <Head>
        <title>Kirsten Taggart | {title}</title>
      </Head> */}
      <FlexWrapper>
        {children}
      </FlexWrapper>
    </Fade>
  )
}

PageWrapper.defaultProps = {
  title: 'Video Producer'
}

export default PageWrapper
