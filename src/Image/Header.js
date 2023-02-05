import Men from "../componentsImage/Men";
import Women from "../componentsImage/Women";
import Teen from "../componentsImage/Teen";
import Kids from "../componentsImage/Kids";
import Baby from "../componentsImage/Baby";
import logo from './logo.jpeg'
import {Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Route, Routes} from "react-router";

function Header() {
    return (
        <>
<Navbar collapseOnSelect expand="md" bg="dark" variant='dark'>
    <Container>
        <NavbarBrand href="/">
            <img src={logo}
                 height="50"
                 width='50'
                className="d-inline-block align-top"
                 alt='Logo'/>
        </NavbarBrand>
        <NavbarToggle area-controls="responsive-navbar-nav"/>
        <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink href ="/men"><strong><i> Men</i> </strong></NavLink>
                <NavLink href ="/women"><strong><i> Women</i></strong></NavLink>
                <NavLink href ="/teen"><strong><i> Teen</i></strong></NavLink>
                <NavLink href ="/kids"><strong><i>Kids</i></strong></NavLink>
                <NavLink href ="/baby"><strong><i> Baby</i></strong></NavLink>

            </Nav>
                 <Form inline="true">
                     <div className="d-inline-flex p-2">
                         <FormControl
                             inline="true"
                             type="text"
                             className="me-sm-2"
                             />
                         <button variant="outline-info"> Search </button>
                     </div>
                 </Form>
        </NavbarCollapse>
    </Container>
</Navbar>
            <Routes>
                <Route path="/men"element={<Men/>}/>
                <Route path="/women"element={<Women/>}/>
                <Route path="/teen"element={<Teen/>}/>
                <Route path="/kids"element={<Kids/>}/>
                <Route path="/baby"element={<Baby/>}/>
            </Routes>
        </>
    )
};
export default Header;