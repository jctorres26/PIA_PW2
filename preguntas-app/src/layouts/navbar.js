import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const NavBarExample = () => {
    return(
       <> 
          
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" ></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/inicio" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/" >Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to="/responder">Responder Preguntas</Nav.Link>
                <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>  
                <Nav.Link as={Link} to="/perfiladmin">PerfilAdmin</Nav.Link> 
                <DropdownButton id="dropdown-item-button" title="Categorias" variant="success">
      <Dropdown.ItemText>Tecnologia</Dropdown.ItemText>
      <Dropdown.Item as="button">Anime</Dropdown.Item>
      <Dropdown.Item as="button">Random</Dropdown.Item>
      <Dropdown.Item as="button">Life</Dropdown.Item>
    </DropdownButton>           
            </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample