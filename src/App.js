import Images from './components/Images'
import useFetchHook from './hooks/useFetchHook'
import styled from 'styled-components'

const AppDiv = styled.div`
  text-align: center;
  background-color: #93e9be;
`

function App() {
  const [newDate, image, setNewDate, loading] = useFetchHook()

  return (
    <AppDiv>
      {loading ? (
        <h1>Loading Nasa Data</h1>
      ) : (
        <Images images={image} setNewDate={setNewDate} newDate={newDate} />
      )}
    </AppDiv>
  )
}

export default App
