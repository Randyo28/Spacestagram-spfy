import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Heart from 'react-animated-heart'

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WelcomeMessage = styled.h1`
  margin: 0;
  padding: 2rem 0 2rem 0;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5%;
  width: 40%;
  margin-top: 1rem;
`
const ImageStyle = styled.img`
  width: 75%;
  border-radius: 5%;
`
const ParagraphStyle = styled.p`
  line-height: 1.5;
  text-indent: 50px;
  text-align: start;
`
// const ButtonStyle = styled.div`
//   background-color: #5d97e4;
//   margin-top: 1rem;
//   padding: 0.5rem;
//   border-radius: 5%;
//   cursor: pointer;
// `
function Images({ images, newDate, setNewDate }) {
  //   const [like, setLike] = useState(50)
  //   const [likeActive, setLikeActive] = useState(false)
  const [isClick, setClick] = useState(false)
  const onChange = (e) => {
    setNewDate(e.target.value)
  }

  useEffect(() => {
    // setLike(JSON.parse(window.localStorage.getItem('like')))
    setClick(JSON.parse(window.localStorage.getItem('click')))
  }, [])

  useEffect(() => {
    // window.localStorage.setItem('like', like)
    window.localStorage.setItem('click', isClick)
  }, [isClick])

  const addLike = () => {
    // setLikeActive(!likeActive)
    // setLike(likeActive ? like - 1 : like + 1)
    setClick(!isClick)
  }

  return (
    <ComponentContainer>
      <WelcomeMessage>Welcome to Spacetagram!</WelcomeMessage>
      <input type="date" value={newDate} onChange={onChange} />
      <ImageContainer>
        <h2>{images.title}</h2>
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
          {/* <h5 style={{ fontSize: '1rem' }}>{like}</h5> */}
        </div>
        <ParagraphStyle>{images.explanation}</ParagraphStyle>
        <h3>{images.date}</h3>
      </ImageContainer>
    </ComponentContainer>
  )
}

export default Images
