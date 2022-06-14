import Style from '../styles/Navigation.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../images/JEVILOGO.png';
import { FaCaretRight } from 'react-icons/fa';

const Navigation = () => {
  const navDropdownInfo = (
    <span className="text-dark ps-2">
      <span>Information</span>
      <br />
      <span className="ps-2">Technology</span>
      <FaCaretRight />
    </span>
  );
  const navDropdownEng = (
    <span className="text-dark ps-2">
      Engineering
      <FaCaretRight />
    </span>
  );
  return (
    <div>
      <Navbar
        bg="light"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
        className="mx-auto"
        style={{ width: '92%' }}
      >
        <Navbar.Brand>
          <div className={Style.setLogo}>
            <img src={logo} width="" height="" alt="logo" />
            <div className={Style.companyBox}>
              <span className={Style.companyName}>JEVIAUSTINE</span>
              <span className={Style.subName}>International Coy. Ltd</span>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="bg-dark" />
        <Navbar.Collapse className={Style.moveRight}>
          <Nav>
            <Nav.Link className="text-secondary" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="text-secondary" href="">
              ABOUT
            </Nav.Link>
            <NavDropdown id={Style.shiftDown} menuVariant="" title="SERVICES">
              <NavDropdown title={navDropdownInfo} drop="end">
                <NavDropdown.Item href="">Microwave Radios</NavDropdown.Item>
                <NavDropdown.Item href="">PABX</NavDropdown.Item>
                <NavDropdown.Item href="">
                  CCTV &#38; Access Control
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Fire/Security &#13; Alarm Systems
                </NavDropdown.Item>
                <NavDropdown.Item href="">Data Server Room</NavDropdown.Item>
                <NavDropdown.Item href="">Networking</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={navDropdownEng} drop="end">
                <NavDropdown.Item href="">
                  <span>Facility Upgrade &#38;</span>
                  <br />
                  <span>Maintenance</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <span>Instrumentation &#38;</span>
                  <br />
                  <span>Calibration</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Electrical Installation
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="">Logistic Support</NavDropdown.Item>
              <NavDropdown.Item href="">Equipment Leasing</NavDropdown.Item>
              <NavDropdown.Item href="">Procurement</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-secondary" href="">
              TRAINING
            </Nav.Link>
            <Nav.Link className="text-secondary" href="">
              NEWS
            </Nav.Link>
            <Nav.Link className="text-secondary" href="contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
