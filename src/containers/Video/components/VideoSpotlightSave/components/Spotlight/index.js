import React from 'react'
import styled from 'styled-components'
import videos from 'data/videos'
import media from 'theme/media'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  justify-content: flex-start;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  flex-wrap: wrap;
  @media(max-width: 560px) {
    padding: 0 1rem;
    margin-top: 1.5rem;
  }
`
const Details = styled.div`
  width: 48%;
  color: ${props => props.theme.white};
  letter-spacing: 2px;
  margin-left: 1rem;
  text-align: center;
  ${media.lgDown`
    width: 100%;
    padding: 1.5rem 0.5rem;
    margin-left: 0;
  `}
`
const FrameWrapper = styled.div`
  text-align: center;
  margin: 0.5rem 0 0 0;
  width: 48%;
  margin-right: 1rem;
  ${media.lgDown`
    width: 100%;
    margin-right: 0;

  `}
`
const Frame = styled.iframe`
  width: 100%;
  max-width: 600px;
  height: 330px;
  @media(max-width: 767px) {
    height: 200px;
  }
`
const Desc = styled.p`
  font-weight: 100;
  line-height: 1.5;
  max-width: 600px;
  margin: 1.5rem auto;
  font-size: 1.25rem;
  @media(max-width: 767px) {
    font-size: 1rem;
  }
  ${media.smDown`
    margin: 0.75rem auto;
  `}
`
const Year = styled.div`
  font-weight: 100;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 100;
  color: ${props => props.theme.secondary};
  margin-bottom: 0.5rem;
  @media(max-width: 767px) {
    font-size: 2rem;
  }
`
const Role = styled.div`
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media(max-width: 560px) {
    font-size: 1.2rem;
  }
`
const Plus = styled.span`
  font-size: 1.1rem;
  margin: 0 0.5rem;
`

function getVideo(videoId) {
  const categories = Object.keys(videos)
  let video
  categories.map(cat => {
    const filtered = videos[cat].filter(vid => vid.videoId === videoId)
    if (filtered.length > 0) {
      video = filtered[0]
    }
    return null
  })
  return video
}

function Spotlight({ videoId }) {
  const video = getVideo(videoId)

  return (
    <Wrapper>
      <FrameWrapper>
        <Frame src={`http://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen />
      </FrameWrapper>
      {video &&
        <Details>
          <Title>{video.title}</Title>
          <Role>
            {video.role[0]}
            {video.role.map((r, i) => {
              if (i !== 0) {
                return (
                  <span key={i}>
                    <Plus>+</Plus>{r}
                  </span>
                )
              }
              return null
            })}
          </Role>
          <Desc>{video.desc}</Desc>
          <Year>{video.year}</Year>
        </Details>
      }
    </Wrapper>
  )
}

export default Spotlight
