import Brand from "./Brand";
export default function Footer({ navigate }) {
  const Link = ({ to, children }) => (
    <button onClick={() => navigate(to)}>{children}</button>
  );
  return (
    <footer>
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-5 col-lg-4">
            <Brand light />
            <p className="footer-intro">
              Connecting professionals with career opportunities and helping employers source talent for their workforce needs.
            </p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h3>Explore</h3>
            <Link to="home">Home</Link>
            <Link to="about">About us</Link>
            <Link to="jobs">Jobs</Link>
            <Link to="services">Services</Link>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h3>For candidates</h3>
            <Link to="jobs">Explore opportunities</Link>
            <Link to="candidates">Candidate support</Link>
            <Link to="contact">Share your profile</Link>
          </div>
          <div className="col-12 col-lg-3">
            <h3>Let’s connect</h3>
            <p>Discuss your recruitment or career requirements.</p>
            <button
              className="footer-contact"
              onClick={() => navigate("contact")}
            >
              Contact our team →
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AMREEN CONSULTANCY. All Rights Reserved.</span>
          <span>Privacy Policy &nbsp; · &nbsp; Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
