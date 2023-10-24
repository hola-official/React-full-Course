import './App.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Recap from './Recap'

function App() {
  // const handleNameChange = () => {
  //   const names = ["Ali", "Dave", "Brisa"];
  //   const int = Math.floor(Math.random() * 3)
  //   return names [int]
  // }

  return (
    <>
    
        {/* Hello {handleNameChange()} */}
        < Header />
        < Content />
        < Footer />

        < Recap />
  
    </>
  )
}

export default App
