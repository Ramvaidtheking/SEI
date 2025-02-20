import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">
  &copy; Developed with love by Ram Vaid ❤️
</div>

      <div className="socials">
        <ul>
          <li><a href="https://youtube.com/@smallentrepreneursinstitute"><i className="fab fa-youtube"></i></a></li>
          <li><a href="https://www.linkedin.com/company/small-entrepreneurs-institute/"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;