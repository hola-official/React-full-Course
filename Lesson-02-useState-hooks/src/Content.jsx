import { useState } from "react";

const Content = () => {

    const [name, setName] = useState('Kenny')

    const handleNameChange = () => {
        const names = ["Ali 👋", "Dave 👋", "Brisa 👋"];
        const int = Math.floor(Math.random() * 3)
        setName (names[int]);
    }

    const handleClick = () => {
        console.log("you click it");
    }

    const handleClickOne = (names) => {
        console.log(`${names} was clicked`);
    }

    const handleClickTwo = (e) => {
        console.log(e.target.innerText)
    }

    const styling = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px"
    }

    return (
        <main>
            <p>
                Hello {name}
            </p>
            <div style={styling}>
                <button onClick={handleNameChange}><span>Change name</span></button>
                <button onClick={handleClick}><span>Click it</span></button>
                <button onClick={() => handleClickOne('Muhammad')}><span>Click name</span></button>
                <button onClick={(e) => handleClickTwo(e)}><span>Click Now</span></button>
            </div>

        </main>
    )
}

export default Content
