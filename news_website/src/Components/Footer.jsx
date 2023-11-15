import React from 'react'
import { useStoreState } from 'easy-peasy';

const Footer = () => {
  const date = new Date();
  const postCount = useStoreState((state) => state.postCount)
  return (
    <footer className='Footer'>
      <small>{postCount}</small>
      <p>Copyright &copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
