import { useState } from "react";
import './index.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import ListComponent from './ListComponent'

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "ReactJs"
    },
    {
        id: 2,
        checked: false,
        item: "JavaScript"
    },
    {
        id: 3,
        checked: false,
        item: "Nodejs"
    }
])

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems)

    localStorage.setItem('ShoppingList', JSON.stringify(listItems))
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    localStorage.setItem('ShoppingList', JSON.stringify(listItems))
}
  const cohorts = <h1>WELCOME TO <span>DLT-AFRICA</span> BOOT CAMP</h1>

  return (
    <div className='App'>

      {/* Hello {handleNameChange()} */}
      < Header title={cohorts} />  {/* < Header title="Cohort" />  another way to use it*/}
      < Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      < ListComponent />
      < Footer length={items.length} />

    </div>
  )
}

export default App
