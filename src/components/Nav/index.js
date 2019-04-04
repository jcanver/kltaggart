import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'components/Fade'
import BreadCrumbRow from 'components/BreadCrumbRow'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'

// const FadeIn = styled.div`
//   position: relative;
//   top: ${props => props.show ? '0' : '-40px'};
//   opacity: ${props => props.show ? 1 : 0};
//   transition: top 0.8s, opacity 0.8s;
// `

function Nav({ active, handleNavigate, loaded, videoCategory, showBreadcrumb, showBack, showCategory, backTo }) {
  return (
    <Fade show={loaded} top styles={{ width: '100%' }}>
      <DesktopNav
        active={active}
        handleNavigate={handleNavigate}
      />
      <MobileNav
        active={active}
        handleNavigate={handleNavigate}
      />
      {showBreadcrumb &&
        <BreadCrumbRow
          showBack={showBack}
          showCategory={showCategory}
          category={videoCategory}
          back={backTo}
        />
      }
    </Fade>
  )
}

Nav.propTypes = {
  active: PropTypes.string,
  handleNavigate: PropTypes.func,
  loaded: PropTypes.bool
}

export default Nav
