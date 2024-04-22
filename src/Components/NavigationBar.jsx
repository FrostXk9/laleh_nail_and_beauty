import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavgationBar = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-transparent" id="navigationBar">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="https://cdn-images.imagevenue.com/5e/13/ed/ME1852BG_o.png" alt="Company_logo" className="img img-fluid" id="logo" loading="lazy" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="toggleIc"/>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0 gap-4">
                    <Nav.Link href="#home" className='fs-5'>Home</Nav.Link>
                    <Nav.Link href="#about" className='fs-5'>About us</Nav.Link>
                    <Nav.Link href="#action2" className='fs-5'>Our products</Nav.Link>
                    <Nav.Link href="#action2" className='fs-5'>Contact us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default NavgationBar;