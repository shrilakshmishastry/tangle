import React,{Component} from 'react';
import {NavItem,Navbar,Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Button} from 'reactstrap';
import {Link} from 'react-router-dom'
// component for Navbar
class Header extends React.Component{
  constructor(props){
    super(props);
    this.toggle=this.toggle.bind(this);
    // state variable
    this.state={
      isOpen:false,
      login:"login"
    };

  }
  // function to Collapse functionality
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div>
      <Navbar color='light' light expand='md'  >
      <NavbarBrand href='/' className='ml-md-5'>
          Tangle
      </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem className=' mt-md-2'>
              <Link to='#' className=' text-dark'>Myaccount</Link>
            </NavItem>
             <NavItem className='ml-md-5'>
              <Link  className=' text-dark' to='/'>
                <Button outline color="secondary">
                  {this.state.login}
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
        </div>
    );
  }
}
export default Header
