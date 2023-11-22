import { useState, useEffect } from 'react'
import { getPostPage } from '../api/axios'

const usePosts = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  return (
    <div>usePosts</div>
  )
}

export default usePosts