import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Table, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/menu';
import { BooksList,LoanList } from './components/book-loan-list';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksList/>,
  },{
    path: "/loan",
    element: <LoanList/>,
  },
]);

function App() {
  return (
    <>
     <Menu/>

      <Container className="mt-3">
        <Row>
          <Col>
            <RouterProvider router={router} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
