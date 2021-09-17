import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const WelcomeMessage = styled.h1`
  margin: 0;
  padding: 2rem 0 2rem 0;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  width: 53%;
  margin-top: 1rem;
`
export const ImageStyle = styled.img`
  width: 100%;
  border-radius: 5%;
  @media (max-width: 350px) {
    width: 145%;
  }
`
export const ParagraphStyle = styled.p`
  line-height: 1.5;
  text-indent: 50px;
  text-align: start;
  @media (max-width: 750px) {
    width: 120%;
  }
  @media (max-width: 500px) {
    width: 150%;
  }
  @media (max-width: 350px) {
    width: 165%;
  }
`
export const HeartStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  align-self: flex-end;
  @media (max-width: 350px) {
    margin-right: -1rem;
  }
`

export const SocialDivStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  width: 50%;
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 150%;
  }
`
export const NameStyle = styled.a`
  text-decoration: none;
  color: bisque;
  margin-left: 0.5rem;
`
