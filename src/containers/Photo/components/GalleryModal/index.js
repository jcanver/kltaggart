import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Forward from 'assets/icons/Forward'
import Backward from 'assets/icons/Backward'
import Delete from 'assets/icons/Delete'
import photos from 'containers/Photo/photos-hq'
import media from 'theme/media'

const Modal = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1001;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: opacity 0.8s;
  ${media.smDown`
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  `}
`
const Frame = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  object-position: center center;
  ${media.smDown`
    width: 90%;
    max-height: 70vh;
    height: auto;
    margin-bottom: 20px;
  `}
`

function GalleryModal({ show, active, handleNext, handlePrev, closeModal }) {
  return (
    <Modal show={show}>
      <Backward onClick={() => handlePrev()} />
      <Frame src={photos[active]} />
      <Forward onClick={() => handleNext()} />
      <Delete onClick={() => closeModal()} />
    </Modal>
  )
}

GalleryModal.propTypes = {
  show: PropTypes.bool,
  active: PropTypes.number,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  closeModal: PropTypes.func
}

export default GalleryModal
