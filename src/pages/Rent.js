import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImage from "../img/costumes/costume1.JPG"; // Замініть на актуальний шлях до зображення

const Rent = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Умови прокату</h2>
      <Row className="align-items-start">
      <Col md={6}>
        <p>При отриманні костюма на прокат, вноситься заставна сума.</p>​
        <p>
          Коли костюм повертається цілим і неушкодженим – застава повертається в
          повному об’ємі.
        </p>
        <p>
          Ми просимо Вас дбайливо ставитись до речей та використовувати їх лише
          за призначенням. ​
        </p>
        ​
        <p>
          Прокат карнавальних костюмів «Мальвіна» бажає Вам яскравих вражень та
          веселих свят!!!
        </p>
      </Col>
      <Col md={6}>
        <Image
          src={aboutImage}
          alt="Карнавальні костюми"
          fluid
          className="mb-4 mb-md-0"
          style={{
            maxWidth: "70%", // Забезпечуємо, щоб картинка не виходила за межі контейнера
            height: "auto", // Зберігаємо пропорції картинки
            objectFit: "cover", // Запобігаємо спотворенню картинки
            borderRadius: "8px", // Округлі краї для м'якшого вигляду
          }}
        />
      </Col>
      </Row>
    </Container>
  );
};

export default Rent;
