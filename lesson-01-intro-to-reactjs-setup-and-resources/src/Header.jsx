const Header = () => {

  const headerStyle = {
    backgroundColor: "#00abf0",
    color: "#f8f8f8",
    borderRadius: "5px",
    padding: "10px 5px"
  }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO <span>REACT IN DETAILS</span></h1>
    </header>
  )
}

export default Header
