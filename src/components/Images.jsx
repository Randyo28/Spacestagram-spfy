import { useState, useEffect } from 'react'
import SocialShare from './SocialShare'
import ReactPlayer from 'react-player'
import Heart from 'react-animated-heart'

import {
  ComponentContainer,
  WelcomeMessage,
  ImageContainer,
  ImageStyle,
  ParagraphStyle,
} from './ImagesStyle'

function Images({ images, newDate, setNewDate }) {
  const [isClick, setClick] = useState(false)
  const onChange = (e) => {
    setNewDate(e.target.value)
  }

  useEffect(() => {
    setClick(JSON.parse(window.localStorage.getItem('click')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('click', isClick)
  }, [isClick])

  return (
    <ComponentContainer>
      <WelcomeMessage>Welcome to Spacetagram!</WelcomeMessage>
      <input type="date" value={newDate} onChange={onChange} />
      <ImageContainer>
        <h2>{images.title}</h2>
        <h3>{images.date}</h3>
        {images.media_type === 'image' ? (
          <ImageStyle src={images.url} alt="Planets" />
        ) : (
          <ReactPlayer width="100%" url={images.url} />
        )}
        <div style={{ transform: 'scale(1)' }}>
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
        <ParagraphStyle>{images.explanation}</ParagraphStyle>
        <SocialShare />
      </ImageContainer>
      <h3>Created by Randy Ortiz</h3>
    </ComponentContainer>
  )
}

export default Images
