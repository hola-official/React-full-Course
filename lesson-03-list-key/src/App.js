import './index.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import ListComponent from './ListComponent'

function App() {
  // const handleNameChange = () => {
  //   const names = ["Ali", "Dave", "Brisa"];
  //   const int = Math.floor(Math.random() * 3)
  //   return names [int]
  // }

  return (
    <div className='App'>

      {/* Hello {handleNameChange()} */}
      < Header />
      < Content />
      < ListComponent />
      < Footer />

    </div>
  )
}

export default App
