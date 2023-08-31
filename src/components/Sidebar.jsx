import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
    <Navbar   className="flex-column Sidebar gap-3">
      <Nav.Item>
        <Nav.Link as={ NavLink } to="/" end>Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/explore" end>Explore</Nav.Link>
      </Nav.Item>
       
    </Navbar>
  );
}