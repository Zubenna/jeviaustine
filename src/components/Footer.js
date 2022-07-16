import Style from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={Style.footerBox} style={{ width: '100%' }}>
      <div className={Style.itemBox}>
        <div className={Style.boxOne}>
          <span className="text-white">ABOUT</span>
          <p className="mt-4 pe-3">
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
          <div className={Style.footerColumn}>
            <a
              className={Style.btnMargin}
              href="https://www.hp.com/"
              target="_blank"
              rel="noreferrer"
            >
              HP
            </a>

            <a
              className={Style.btnMargin}
              href="https://www.cisco.com/"
              target="_blank"
              rel="noreferrer"
            >
              CISCO
            </a>
            <a
              className={Style.btnMargin}
              href="https://www.avaya.com/en/"
              target="_blank"
              rel="noreferrer"
            >
              AVAYA
            </a>
            <a
              className={Style.btnMargin}
              href="https://www.motorola.com/us/"
              target="_blank"
              rel="noreferrer"
            >
              MOTOROLA
            </a>
            <a
              className={Style.btnMargin}
              href="https://hytera.ae/"
              target="_blank"
              rel="noreferrer"
            >
              HYTERA
            </a>
            <a
              className={Style.btnMargin}
              href="https://www.bcsatellite.net/"
              target="_blank"
              rel="noreferrer"
            >
              IDIRECT
            </a>
            <a
              className={Style.btnMargin}
              href="https://www.relong.net/"
              target="_blank"
              rel="noreferrer"
            >
              RELONG/WANJIAAN
            </a>
          </div>
        </div>
        <div className={Style.boxThree}>
          <span className="text-white">PRODUCTS</span>
          <div className={Style.footerColumn}>
            <a className={Style.btnMargin} href="#">
              PABX
            </a>
            <a className={Style.btnMargin} href="#">
              Microwave Radios
            </a>
            <a className={Style.btnMargin} href="#">
              Portable Computers
            </a>
            <a className={Style.btnMargin} href="#">
              Alarm Systems
            </a>
            <a className={Style.btnMargin} href="#">
              CCTV
            </a>
            <a className={Style.btnMargin} href="#">
              Access Control
            </a>
          </div>
        </div>
        <div className={Style.boxFour}>
          <span className="text-white">SOCIAL ICONS</span>
          <div className={Style.socialCol}>
            <a className={Style.iconColor} href="#">
              <FaFacebookF />
            </a>
            <a className={Style.iconColor} href="#">
              <FaTwitter />
            </a>
            <a className={Style.iconColor} href="#">
              <FaInstagram />
            </a>
            <a className={Style.iconColor} href="#">
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
