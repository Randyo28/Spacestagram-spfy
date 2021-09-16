import { useState, useEffect } from 'react'
import SocialShare from './SocialShare'

import {
  ComponentContainer,
  WelcomeMessage,
  ImageContainer,
  ImageStyle,
  ParagraphStyle,
} from './ImagesStyle'
import Heart from 'react-animated-heart'

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

  const addLike = () => {
    setClick(!isClick)
  }

  return (
    <ComponentContainer>
      <WelcomeMessage>Welcome to Spacetagram!</WelcomeMessage>
      <input type="date" value={newDate} onChange={onChange} />
      <ImageContainer>
        <h2>{images.title}</h2>
        <h3>{images.date}</h3>
        <ImageStyle src={images.url} alt="Planets" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Heart
            style={{ width: '80px !important' }}
            isClick={isClick}
            onClick={() => addLike()}
          >
            Likes
          </Heart>
        </div>
        <ParagraphStyle>{images.explanation}</ParagraphStyle>
        <SocialShare />
      </ImageContainer>
      <h3>Created by Randy Ortiz</h3>
    </ComponentContainer>
  )
}

export default Images
