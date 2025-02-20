import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1>About Us</h1>
        </div>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <p>
              At Small Entrepreneurs Institute, we understand the journey of small entrepreneurs because we've walked that path ourselves. Founded by a team of passionate and experienced entrepreneurs, our mission is to empower and support small business owners in realizing their dreams.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
  

//   return (
//     <section id="about" className="block about-block">
//       <Container fluid>
//         <div className="title-holder">
//           <h1>About Us</h1>
//         </div>
//         <Row>
//           <Col sm={6}>
//             <p>At Small Entrepreneurs Institute, we understand the journey of small entrepreneurs because we've walked that path ourselves. Founded by a team of passionate and experienced entrepreneurs, our mission is to empower and support small business owners in realizing their dreams.</p>
//             {/* <div className='progress-block'>
//               <h4>Business Development Skills</h4>
//               <ProgressBar now={html} label={`${html}%`} />
//             </div>
//             <div className='progress-block'>
//               <h4>Entrepreneurial Support Services</h4>
//               <ProgressBar now={responsive} label={`${responsive}%`} />
//             </div>
//             <div className='progress-block'>
//               <h4>Business Progress</h4>
//               <ProgressBar now={photoshop} label={`${photoshop}%`} />
//             </div> */}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

export default AppAbout;