const Header = (props) => {

  // const headerStyle = {
  //   backgroundColor: "#081b29",
  //   color: "#f8f8f8",
  //   borderTopRightRadius: "20px",
  //   borderBottomLeftRadius: "20px",
  //   padding: "10px",
  //   width: "100%"
  // }
  return (
    <header>
      {/* <h1>WELCOME TO <span>REACT</span> IN DETAILS</h1> */}
      {props.title}
      {/* <h2 >{props.title}</h2> */}
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}
export default Header
