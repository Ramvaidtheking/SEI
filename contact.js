import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Swal from 'sweetalert2'

function AppContact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e0d89654-fc90-4339-92a0-5130e3d86d46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "We'll contact you shortly",
        icon: "success"
      });
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">Get connected with us</div>
        </div>
        <Form className="contact-form" onSubmit={onSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" name='name' required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" name='email' required />
            </Col>
            {/* <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" name='email' required />
            </Col> */}
            {/* { <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col> } */}
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your message" name='message' required />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        {/* Corrected iframe embedding */}
        <iframe 
          title="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.029074511971!2d88.3457480751508!3d22.578015879487793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a2fa0c6e31%3A0xae74bc2d2b0cbbf7!2sMarshall%20House%20Owners&#39;%20Society!5e0!3m2!1sen!2sin!4v1739443814955!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          width="100%" 
          height="450" 
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              smalleinstitute@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +91-9051626266
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              33/1, Netaji Subhas Road
              Marshall House, Room no - 674
              6th Floor Kolkata - 700001
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
