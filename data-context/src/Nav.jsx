import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Nav = () => {

    const { search, setSearch } = useContext(DataContext)
    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="Search">
                    Search Post
                </label>
                <input type="text" id='search' placeholder='Search Posts' value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>

            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/post'>Post</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
