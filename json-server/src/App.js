import { useState, useEffect } from "react";
import './index.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3400/items"
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // const setAndSaveItems = (newItem) => {
  //   setItems(newItem)

  // }

  // useEffect syntax


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json();
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => fetchItems())()
    }, 2000)
  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem]

    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)

    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('')
  }
  const cohorts = <h1>WELCOME TO <span>DLT-AFRICA</span> BOOT CAMP</h1>

  return (
    <div className='App'>

      {/* Hello {handleNameChange()} */}
      < Header title={cohorts} />  {/* < Header title="Cohort" />  another way to use it*/}
      < AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      < SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Item...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          < Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />}
      </main>
      < Footer length={items.length} />

    </div>
  )
}

export default App
