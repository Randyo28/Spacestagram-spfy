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
  HeartStyle,
  NameStyle,
} from './ImagesStyle'

function Images({ images, newDate, setNewDate }) {
  const [like, setLike] = useState(0)
  const [isClick, setClick] = useState(false)
  const onChange = (e) => {
    setNewDate(e.target.value)
  }

  useEffect(() => {
    setLike(JSON.parse(window.localStorage.getItem('like')))
    setClick(JSON.parse(window.localStorage.getItem('click')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('like', like)
    window.localStorage.setItem('click', isClick)
  }, [like, isClick])

  const addLike = () => {
    setLike(isClick ? like - 1 : like + 1)
    setClick(!isClick)
  }

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
        <HeartStyle>
          <Heart isClick={isClick} onClick={() => addLike()} />
          <h5 style={{ fontSize: '1rem' }}>{like}</h5>
        </HeartStyle>
        <ParagraphStyle>{images.explanation}</ParagraphStyle>
        <SocialShare />
      </ImageContainer>
      <h3>
        Created by
        <NameStyle
          target="_blank"
          href="https://www.linkedin.com/in/randy-ortiz28/"
        >
          Randy Ortiz
        </NameStyle>
      </h3>
    </ComponentContainer>
  )
}

export default Images
