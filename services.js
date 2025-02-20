import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/image-service.webp'),
    title: <h3 style={{ fontWeight: 'bold' }}>MSME Training and Development</h3>,
    description: (
      <ul>
        <li>Training programs enhance entrepreneurial abilities.</li>
        <li>Budding entrepreneurs need handholding and incubation.</li>
        <li>Small Entrepreneurs Institute offers online and classroom training to entrepreneurs belonging to MSME's.</li>
      </ul>
    ),
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/blog2.jpg'),
    title: <h3 style={{ fontWeight: 'bold' }}>MSME Consultancy and Support</h3>,
    description: (
      <ol>
        <li>Udyam Registration</li>
        <li>MSME delayed payments (Samadhan Portal, MSEFC representation)</li>
        <li>GeM Portal & E-Tendering</li>
        <li>MSME schemes, subsidies & incentives</li>
        <li>Bank finance & project report assistance </li>
      </ol>
    ),
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/pMentro.jpg'),
    title: <h3 style={{ fontWeight: 'bold' }}>Personal Mentorship</h3>,
    description: (
      <ul>
        <li>Receive tailored mentorship to guide you through every stage of your entrepreneurial journey</li>
        <li>Our experienced mentors provide one-on-one support to help you overcome challenges and grow your business</li>
        <li> You'll build confidence and refine your vision</li>
      </ul>
    ),
    link: 'https://www.twitter.com'
  }
]

function AppWhyUs() {
  const handleServiceClick = () => {
    window.location.href = "#contact"; // Redirect to Contact Us page
  };
  return (
    <section id="services" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">Services we provide</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder' onClick={handleServiceClick}>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppWhyUs;