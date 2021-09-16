import Images from './components/Images'
import useFetchHook from './hooks/useFetchHook'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Route } from 'react-router-dom'

const AppDiv = styled.div`
  text-align: center;
  background-color: #93e9be;
`

function App() {
  const [newDate, image, setNewDate, loading] = useFetchHook()

  return (
    <Route path="/">
      <AppDiv>
        {loading ? (
          <>
            <h1>Loading Nasa Data</h1>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </>
        ) : (
          <Images images={image} setNewDate={setNewDate} newDate={newDate} />
        )}
      </AppDiv>
    </Route>
  )
}

export default App
