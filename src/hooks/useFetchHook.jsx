import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetchHook() {
  const date = ''
  const [newDate, setNewDate] = useState(date)
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${newDate}`
        )
        .then((res) => {
          setLoading(false)
          setImage(res.data)
        })
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [setImage, newDate, loading])
  return [newDate, image, setNewDate, loading]
}

export default useFetchHook
