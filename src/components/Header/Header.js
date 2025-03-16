import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../img/logo.png"; // Імпорт лого
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ navigateToPage, currentPage }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Логотип */}
        <Navbar.Brand href="#" onClick={() => navigateToPage("catalog")}>
          <img
            src={logo}
            width="150"
            height="75"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Кнопка для мобільної версії */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Навігація */}
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => navigateToPage("catalog")}
              active={currentPage === "catalog"} // Задаємо активний клас для кнопки "Каталог"
            >
              Каталог
            </Nav.Link>
            <Nav.Link
              onClick={() => navigateToPage("about")}
              active={currentPage === "about"} // Задаємо активний клас для кнопки "Про нас"
            >
              Про нас
            </Nav.Link>
            <Nav.Link
              onClick={() => navigateToPage("rent")}
              active={currentPage === "rent"} // Задаємо активний клас для кнопки "Про нас"
            >
              Умови прокату
            </Nav.Link>
            <Nav.Link
              onClick={() => navigateToPage("contacts")}
              active={currentPage === "contacts"} // Задаємо активний клас для кнопки "Контакти"
            >
              Контакти
            </Nav.Link>
          </Nav>

          {/* Форма пошуку */}
          <Form className="d-flex">
            <FormControl type="search" placeholder="Пошук..." className="me-2" />
            <Button variant="outline-primary">Знайти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
