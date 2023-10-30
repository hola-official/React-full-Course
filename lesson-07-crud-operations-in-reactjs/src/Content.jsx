import ItemList from "./ItemList"

const Content = ({items, handleCheck, handleDelete}) => {


    return (
        <>
            {items.length ? (
            < ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : (
                <p style={{marginTop: "2rem"}}>Your list is Empty</p>
            )}
        </>
    )
}

export default Content
