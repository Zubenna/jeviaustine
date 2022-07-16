import JeviPic from '../images/Jeviaustin-home.jpeg';
import Style from '../styles/CompanyInfo.module.css';
const CompanyInfo = () => {
  return (
    <div className={Style.setInfo} style={{ width: '100%' }}>
      <div className={Style.setDivLeft}>
        {' '}
        <img src={JeviPic} style={{ width: '90%' }} className="" alt="..." />
      </div>
      <div className={Style.setDivRight}>
        <h2>Jeviaustin International Company Limited</h2>
        <p className="fw-light text-muted">
          As a company, Jevi Austin International Company Limited are ethically,
          environmentally and socially aware, aligning our business activities
          with the visions and missions of our customers and national and
          environmental development plans, contributing to the macro and micro
          economic of Nigeria and therefore expressing our citizenship through
          effective corporate social responsibility polices.
        </p>
        <p className="fw-light text-muted">
          Jevi Austin International Company Limited values its sense of
          responsibility towards the community and environment (both social and
          ecological) in all its operations and expresses its citizenship
          through engagement with local communities contributing positively to a
          process of continuing education and social interactions and promoting
          the empowerment and employment of local indigene peoples.
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
