import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import { Link } from '@reach/router'
import Fade from 'components/Fade'
import { FaPlay } from 'react-icons/fa'

const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  font-family: 'Yanone Kaffeesatz';
  width: ${props => props.width || '22%'};
  height: 200px;
  height: ${props => props.height || 'calc((100vh - 68px) / 4.5)'};
  height: 150px;
  margin: 0.4%;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  ${media.smDown`
    width: 100%;
    height: 180px;
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  `}
`
const Thumbnail = styled.div`
  position: relative;
  height: 80%;
  overflow: hidden;
  cursor: pointer;
  color: ${props => props.theme.white};
  transition: color 0.3s;
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
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.3s, opacity 0.3s;
    opacity: 0.65;
  }
  &:hover {
    img {
      left: -5%;
      top: -5%;
      height: 110%;
      width: 110%;
    }
    span {
      background: rgba(0, 0, 0, 0.15);
      opacity: 1;
    }
  }
`
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  margin: 0.5rem 0 0 0;
  color: ${props => props.theme.white};
  ${media.smDown`
    font-size: 1.25rem;
  `}
`
const fadeStyles = {
  width: '100%'
}

export default function VideoThumbnail({ videoId, shortTitle, title, show, timeout, handleNavigate, width, height, category }) {
  const linkUrl = `/video/${category}/${videoId}`
  return (
    <Wrapper width={width} height={height} to={linkUrl} onClick={e => handleNavigate(e, linkUrl)}>
      <Fade show={show} bottom timeout={timeout} styles={fadeStyles}>
        <Thumbnail>
          <img src={`http://img.youtube.com/vi/${videoId}/0.jpg`} alt={title} />
          <span>
            <FaPlay />
          </span>
        </Thumbnail>
        <Title>{shortTitle || title}</Title>
      </Fade>
    </Wrapper>
  )
}
