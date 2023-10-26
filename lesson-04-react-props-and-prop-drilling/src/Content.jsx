
import { BsTrash3 } from 'react-icons/bs'

const Content = ({items, handleCheck, handleDelete}) => {


    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked} />
                        <label style={(item.checked) ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>

                        <BsTrash3 role="button" tabIndex="0" onClick={() => handleDelete(item.id)} />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop: "2rem"}}>Your list is Empty</p>
            )}
        </main>
    )
}

export default Content
