import { useState, useEffect } from 'react'
import SocialShare from './SocialShare'

import {
  ComponentContainer,
  WelcomeMessage,
  ImageContainer,
  ImageStyle,
  ParagraphStyle,
} from './ImagesStyle'
import Heart from 'react-heart'

function Images({ images, newDate, setNewDate }) {
  const [active, setActive] = useState(false)
  // const [isClick, setClick] = useState(false)
  const onChange = (e) => {
    setNewDate(e.target.value)
  }

  useEffect(() => {
    setActive(JSON.parse(window.localStorage.getItem('click')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('click', active)
  }, [active])

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
          <div style={{ width: '3rem', margin: '2rem 0' }}>
            <Heart
              isActive={active}
              onClick={() => setActive(!active)}
              style={{
                fill: active ? 'red' : 'grey',
                stroke: active ? 'red' : 'grey',
                filter: 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 1))',
              }}
            />
          </div>
        </div>
        <ParagraphStyle>{images.explanation}</ParagraphStyle>
        <SocialShare />
      </ImageContainer>
      <h3>Created by Randy Ortiz</h3>
    </ComponentContainer>
  )
}

export default Images
