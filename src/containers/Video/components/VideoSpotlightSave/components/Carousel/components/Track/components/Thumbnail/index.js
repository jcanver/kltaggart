import React from 'react'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import Fade from 'components/Fade'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  opacity: ${props => props.active ? '1' : '0.3'};
  transition: opacity 0.5s;
  cursor: ${props => !props.active && 'pointer'};
  z-index: 1;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.white};
    font-size: 1.25rem;
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.3s;
    z-index: 10;
  }
  >div {
    &:last-child {
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
  &:hover {
    opacity: 1;
    >div {
      &:last-child {
        opacity: ${props => !props.active && '1'};
      }
    }
    span {
      background: transparent;
    }
    img {
      left: ${props => !props.active && '-5%'};
      top: ${props => !props.active && '-5%'};
      height: ${props => !props.active && '110%'};
      width: ${props => !props.active && '110%'};
    }
  }
`
const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: 1 !important;
`
const PlayWrapper = styled.span`
  opacity: ${props => props.show ? '1' : '0'};
`
const Tooltip = styled.div`
  position: absolute;
  width: calc(100% - 0.5rem);
  left: 0;
  bottom: calc(100% + 12px);
  padding: 0.5rem 0.25rem;
  font-size: 1rem;
  text-align: center;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  pointer-events: none;
  z-index: 100;
  &:before {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border: 8px solid transparent;
    border-top-color: ${props => props.theme.secondary};
  }
`
const NowWatching = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${props => props.theme.white};
  color: ${props => props.theme.primary};
  width: 100%;
  text-align: center;
  padding: 0.25rem 0;
  font-size: 14px;
  z-index: 3;
  letter-spacing: 2px;
`
const fadeStyles = {
  width: '14%',
  height: '96px',
  margin: '0.5rem 0.25rem'
}

function Thumbnail({ show, active, videoId, shortTitle, title, onClick, enterDelay }) {
  return (
    <Fade show={show} bottom styles={fadeStyles} key={videoId} timeout={{ enter: enterDelay, exit: 0 }}>
      <Wrapper active={active} onClick={onClick}>
        <ImageWrapper>
          <img src={`http://img.youtube.com/vi/${videoId}/0.jpg`} alt={title} />
        </ImageWrapper>
        {active &&
          <NowWatching>NOW WATCHING</NowWatching>
        }
        <PlayWrapper show={!active}>
          <FaPlay />
        </PlayWrapper>
        <Tooltip>{shortTitle || title}</Tooltip>
      </Wrapper>
    </Fade>
  )
}

export default Thumbnail
