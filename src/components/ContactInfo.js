import Style from '../styles/ContactInfo.module.css';
const ContactInfo = () => {
  const myBackGround = {
    backgroundImage: 'url(/Welcome.png)',
    height: '45vh',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div>
      <div style={myBackGround}></div>
      <div className={Style.formBox} style={{ width: '92%' }}>
        <form className={Style.form}>
          <div className="mb-2 d-flex">
            <label className="">Full Name</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="text"
            placeholder="Full name"
            className={Style.regInput}
          />
          <div className="mb-2 d-flex">
            <label className="">Email</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className={Style.regInput}
          />
          <label className="mb-2">Phone</label>
          <input
            type="text"
            placeholder="Phone number"
            className={Style.regInput}
          />
          <div className="mb-2 d-flex">
            <label className="">Message</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="textarea"
            placeholder="Enter message"
            className={Style.addInput}
          />
          <div className="mb-4">
            <a href="#" className="btn btn-primary">
              Send Message
            </a>
          </div>
        </form>
        <div className={Style.addBox}>
          <h5>Contact Info</h5>

          <h6 className="mt-4 text-muted">WARRI OFFICE</h6>
          <p>
            Plot 61 Airport Road,By Total Filling Station, P.O.Box 3131. Warri,
            Delta State.
          </p>
          <h6 className="mt-2 text-muted">Phone</h6>
          <span>+234 815 713 7861</span>
          <span>+234 803 890 5227</span>

          <h6 className="mt-4 text-muted">PORT HARCOURT OFFICE</h6>
          <p>9, Market Road, Rumuomasi Port-Harcourt, Rivers State.</p>
          <h6 className="mt-2 text-muted">Phone</h6>
          <span>+234 803 890 5227</span>

          <h6 className="mt-3 text-muted">Email Address</h6>
          <span>info@jeviaustin.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
