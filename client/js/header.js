import React,{Component,props} from 'react';
import {NavItem,Navbar,Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {push} from 'react-router-redux';
// css for Header component
const headerStyle={
    fontFamily: 'Open Sans, sans-serif',
};
const LoginButton =(props)=>{
  return(
    <Link to='/login'>
    <Button onClick={props.onClick}>
      Login
    </Button>
    </Link>
  );
}
const LogoutButton = (props)=>{
  return (
    <Link to='/'>
    <Button onClick={props.onClick}>
      Logout
    </Button>
    </Link>
  );
}
// component for Navbar
class Header extends React.Component{
  constructor(props){
    super(props);
    this.toggle=this.toggle.bind(this);
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogoutClick=this.handleLogoutClick.bind(this);
    // state variable
    this.state={
      isOpen:false,
      isLoggedIn:false,
      account:'Open an account'

      };

  }
  // function to Collapse functionality
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLoginClick(){
    this.setState({
      isLoggedIn:true
    });

  }
  handleLogoutClick(){
    this.setState({
      isLoggedIn:false
    });
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
     button = <LogoutButton onClick={this.handleLogoutClick} />;
   } else {
     button = <LoginButton onClick={this.handleLoginClick} />
   }
    return(
      <div style={headerStyle}>
      <Navbar color='light' light expand='md'  >
      <NavbarBrand href='/' className='ml-md-5  font-weight-bold text-dark '>
          Tangle
      </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem className=' mt-md-2'>
              <Link to='#' className=' text-dark'>{this.state.account}</Link>
            </NavItem>
             <NavItem className='ml-md-5' >
             {button}
          </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
        </div>
    );
  }
}
export default Header
