import './css/footer.scss';
import linkedin from '/assets/footer/linkedin.svg';
import messenger from '/assets/footer/messenger.svg';
import twitter from '/assets/footer/twitter.svg';
import twoo from '/assets/footer/twoo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-main">
          <img src="/logo-b.svg" alt="logo" />
          <p>Travel helps companies manage payments easily.</p>
          <div className="footer__content-main_links">
            <a href="https://www.linkedin.com/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.messenger.com/">
              <img src={messenger} alt="messenger" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.twoo.com/">
              <img src={twoo} alt="twoo" />
            </a>
          </div>
        </div>
        <div className="footer__content-company">
          <h2>Company</h2>
          <ul className="footer__content-company_container">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="footer__content-destinations">
          <h2>Destinations</h2>
          <ul className="footer__content-destinations_container">
            <li>
              <a href="#">Maldives</a>
            </li>
            <li>
              <a href="#">Los Angelas</a>
            </li>
            <li>
              <a href="#">Las Vegas</a>
            </li>
            <li>
              <a href="#">Torronto</a>
            </li>
          </ul>
        </div>
        <div className="footer__content-newsletter">
          <h2>Join Our Newsletter</h2>
          <div className="footer__content-newsletter_input">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <p>* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright-container"></div>
        <p>Copyright @ Xpro 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
