import React from 'react'

const ListComponent = () => {
    const data = [
        {
            id: 1,
            name: "Muhammad",
            age: 25
        },
        {
            id: 2,
            name: "Rocco",
            age: 10
        },
        {
            id: 3,
            name: "Ishola",
            age: 80
        },
        {
            id: 4,
            name: "Kalas",
            age: 40
        }
    ]
  return (
    <main>
      <ul>
        {data.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default ListComponent
