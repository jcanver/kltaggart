import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import videos from 'data/videos'
import CategoryNav from './components/CategoryNav'
import Track from './components/Track'

const Wrapper = styled.div`
  padding: 0 1.25rem 1rem 1.25rem;
  ${media.smDown`
    display: none;
  `}
`
const TrackWrapper = styled.div`
  position: relative;
`

function CarouselComponent({ active, category, handleNavigate, setCategory }) {
  return (
    <Wrapper>
      <CategoryNav category={category} select={setCategory} />

      <TrackWrapper>
        {Object.keys(videos).map(key => (
          <Track
            key={key}
            videos={videos[key]}
            active={active}
            activeCategory={category === key}
            category={key}
            handleNavigate={handleNavigate}
            absolute={key !== 'personalProfiles'}
          />
        ))}
      </TrackWrapper>
    </Wrapper>
  )
}

export default CarouselComponent
