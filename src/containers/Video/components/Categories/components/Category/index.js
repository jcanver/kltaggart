import React from 'react'
import styled from 'styled-components'
import Fade from 'components/Fade'
import media from 'theme/media'
import { Link } from '@reach/router'

const fadeStyles = {
  width: '100%'
}

function Category({ src, copy, categoryKey, top, bottom, left, right, show, handleNavigate }) {
  const width = typeof window !== 'undefined' && window.outerWidth
  const isPortrait = width < 560
  return (
    <Wrapper to={`/video/${categoryKey}`} onClick={e => handleNavigate(e, `/video/${categoryKey}`)}>
      <Fade
        show={show}
        styles={fadeStyles}
        top={top && !isPortrait}
        bottom={bottom || isPortrait}
        left={left && !isPortrait}
        right={right && !isPortrait}
      >
        <div>
          <img src={src} alt={copy} />
          <span>{copy}</span>
        </div>
      </Fade>
    </Wrapper>
  )
}

export default Category

const Wrapper = styled(Link)`
  display: flex;
  position: relative;
  width: 26%;
  height: calc((100vh - 68px) / 3);
  margin: 0.4%;
  cursor: pointer;
  font-family: 'Yanone Kaffeesatz';
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 2rem;
  color: ${props => props.theme.white};
  overflow: hidden;
  text-transform: uppercase;
  transition: color 0.3s;
  ${media.lgDown`
    width: 44%;
  `}
  ${media.smDown`
    width: 100%;
    justify-content: flex-start;
    height: calc((100vh - 68px) / 4);
    height: 150px;
    font-size: 1.2rem;
    margin: 2px 0;
  `}
  img {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: left 0.3s, top 0.3s, height 0.3s, width 0.3s;
  }
  span {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.3s;
  }
  ${media.smUp`
    &:hover {
      img {
        left: -5%;
        top: -5%;
        height: 110%;
        width: 110%;
      }
      span {
        background: rgba(0, 0, 0, 0.15);
      }
    }
  `}
`
