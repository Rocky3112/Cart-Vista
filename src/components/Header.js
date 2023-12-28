import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return <Navbar bg='dark' variant='dark' style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <a href="/">Cart Vista</a>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width:500}} placeholder='Search a produch' className='m-auto'>

            </FormControl>
        </Navbar.Text>

        <Nav>
           <Dropdown alignRight>
           <Dropdown.Toggle variant='success'>
           <FaShoppingCart  color='white' fontSize="25px"/>
           <Badge> {10}</Badge>
            </Dropdown.Toggle> 

            <Dropdown.Menu style={{minWidth:370}}>
                <span style={{padding:10}}>cart is empty!</span>
            </Dropdown.Menu>
           </Dropdown>
        </Nav>
    </Container>
  </Navbar>
}

export default Header