import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Experience',
    description: 'Our team brings years of experience in entrepreneurship, business management, and industry specific expertise'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Passion',
    description:'We are passionate about supporting small businesses and driven by a genuine desire to see you succeed'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Empowerment',
    description:'We believe in empowering small entrepreneurs with the knowledge, resources, and confidence to turn their visions into reality'
  }
];

function AppServices() {


  return (
    <section id="whyUs" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Why Choose Us</h2>
          <div className="subtitle">we believe you can acheive the greatness</div>
        </div>
        <Row>
          {servicesData.map(service => (
            <Col sm={4} className='holder' key={service.id}>
              <div className="service-card">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
