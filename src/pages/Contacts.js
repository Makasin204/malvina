import { Container } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container className="mt-4">
        <h2 className="text-center">Контакти</h2>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
        {/* Ліва частина з текстом */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          
          <p>
            Телефони: <a href="tel:0972237897">0972237897</a>,{" "}
            <a href="tel:0983003005">0983003005</a>
          </p>
          <p>Електронна пошта: malvina.lviv@gmail.com</p>
          <p>Адреса: м. Львів, Кавалерідзе 7</p>
        </div>

        {/* Правая частина з карткою */}
        <div style={{ flex: 1 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.6336491610627!2d24.06304427649911!3d49.79295393448659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae9950ca38a6f%3A0xba595473a83a5918!2sMal%CA%B9vina%20-%20Prokat%20Karnaval%CA%B9nykh%20Kostyumiv!5e0!3m2!1sen!2sua!4v1741879019026!5m2!1sen!2sua"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
