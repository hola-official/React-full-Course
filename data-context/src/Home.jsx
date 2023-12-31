import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {
  
  const { searchResult, fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='Home'>
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Nothing To Display</p>
      )} */}
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className='statusMsg' >No post to display</p>)}
    </main>
  )
}

export default Home
