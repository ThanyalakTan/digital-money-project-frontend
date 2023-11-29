import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'

function OffcanvasExample() {
  const expand = false;
  return (
    <>
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid>
            <Navbar.Brand href="#" className='web-title text-success'>DIGI
              <span>MONEY</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="burgerbar"
            >
              <Offcanvas.Header closeButton className="burgerbar-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='web-title text-success'>
                  DIGI<span>MONEY</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='burgerbar-body'>
                <Nav className="navlink justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#" className='links'>Home</Nav.Link>
                  <Nav.Link href="#" className='links'>Log In</Nav.Link>
                  <Nav.Link href="#" className='links'>Sign Up</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
};

export default OffcanvasExample;