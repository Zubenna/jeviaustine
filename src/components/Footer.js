import Style from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={Style.footerBox} style={{ width: '100%' }}>
      <div className={Style.itemBox}>
        <div className={Style.boxOne}>
          <span className="text-white">ABOUT</span>
          <p className="mt-4 pe-3 text-muted">
            <span className="pe-2">@</span>Jeviaustin International Company Ltd,
            Safety is priority to everyone therefore, our operations is safety
            first and safety always!
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
        <div className={Style.boxTwo}>
          <span className="text-white">PARTNERS</span>
          <div className="mt-4 d-flex flex-column">
            <a className="mb-3 deLink text-muted" href="#">
              HP
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              CISCO
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              AVAYA
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              MOTOROLA
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              HYTERA
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              IDIRECT
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              RELONG/WANJIAAN
            </a>
          </div>
        </div>
        <div className={Style.boxThree}>
          <span className="text-white">PRODUCTS</span>
          <div className="mt-4 d-flex flex-column">
            <a className="mb-3 deLink text-muted" href="#">
              PABX
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              Microwave Radios
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              Portable Computers
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              Alarm Systems
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              CCTV
            </a>
            <a className="mb-3 deLink text-muted" href="#">
              Access Control
            </a>
          </div>
        </div>
        <div className={Style.boxFour}>
          <span className="text-white">SOCIAL ICONS</span>
          <div className="mt-4 d-flex justify-content-between">
            <a className="text-muted" href="#">
              <FaFacebookF />
            </a>
            <a className="text-muted" href="#">
              <FaTwitter />
            </a>
            <a className="text-muted" href="#">
              <FaInstagram />
            </a>
            <a className="text-muted" href="#">
              <FaVimeoV />
            </a>
          </div>
        </div>
      </div>
      <p className={Style.copyright}>
        Copyright &copy; 2022 All Rights Reserved | Jevi Austin International
        Company Limited.
      </p>
    </div>
  );
};

export default Footer;
