import { Container, Row, Col, Card } from "react-bootstrap";
import costume1 from "../../img/costumes/costume1.JPG";
import costume2 from "../../img/costumes/costume2.JPG";
import costume3 from "../../img/costumes/costume3.JPG";
import costume4 from "../../img/costumes/costume4.JPG";
import costume5 from "../../img/costumes/costume5.JPG";
import costume6 from "../../img/costumes/costume6.JPG";
import costume7 from "../../img/costumes/costume7.JPG";
import costume8 from "../../img/costumes/costume8.JPG";
import costume9 from "../../img/costumes/costume9.JPG";

const products = [
  { id: 1, name: "Костюм 1", price: "10 000 грн", image: costume1 },
  { id: 2, name: "Костюм 2", price: "2 500 грн", image: costume2 },
  { id: 3, name: "Костюм 3", price: "25 000 грн", image: costume3 },
  { id: 4, name: "Костюм 4", price: "5 000 грн", image: costume4 },
  { id: 5, name: "Костюм 5", price: "15 000 грн", image: costume5 },
  { id: 6, name: "Костюм 6", price: "7 500 грн", image: costume6 },
  { id: 7, name: "Костюм 7", price: "1 500 грн", image: costume7 },
  { id: 8, name: "Костюм 8", price: "800 грн", image: costume8 },
  { id: 9, name: "Костюм 9", price: "3 000 грн", image: costume9 },
];

const Catalog = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center">Каталог</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={4} sm={6} md={4} lg={3} className="mb-4">
            <Card className="shadow-sm border-light rounded" style={{ transition: "transform 0.3s ease" }}>
              <Card.Img
                variant="top"
                style={{
                  minHeight: "250px", // Зменшена висота для мобільних пристроїв
                  objectFit: "cover", // Покращує масштабування зображення
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
                src={product.image}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title style={{fontSize: "14px"}}>{product.name}</Card.Title>
                {/* <Card.Text >{product.price}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalog;
