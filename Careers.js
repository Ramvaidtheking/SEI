import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Swal from 'sweetalert2'

function AppCareers() {
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
    <section id="Careers" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Join Our Team</h2>
          <div className="subtitle">Join Us and Be the part of revolution</div>
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
              <Form.Control as="textarea" placeholder="Share your Resume link from Google drive" name='message' required />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    
    </section>
  );
}

export default AppCareers;
