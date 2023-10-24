const Content = () => {

    const handleNameChange = () => {
        const names = ["Ali 👋", "Dave 👋", "Brisa 👋"];
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }

    const handleClick = () => {
        console.log("you click it");
    }

    const handleClickOne = (names) => {
        console.log(`${names} was clicked`);
    }

    const handleClickTwo = () => {
        
    }
    return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
            <button onClick={handleClick}><span>Click it</span></button>
            <button onClick={() => handleClickOne('Muhammad')}><span>Click name</span></button>
        </main>
    )
}

export default Content
