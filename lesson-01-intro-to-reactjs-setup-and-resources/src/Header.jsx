const Header = () => {

  const headerStyle = {
    backgroundColor: "#00abf0",
    color: "#f8f8f8",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    padding: "10px",
    width: "100%"
  }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO <span>REACT</span> IN DETAILS</h1>
      <h2 style={{
        color: "black"
      }}>WELCOME TO <span>DLT-AFRICA</span> BOOT CAMP</h2>
    </header>
  )
}

export default Header
