import Style from '../styles/ContactInfo.module.css';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const ContactInfo = () => {
  const myBackGround = {
    backgroundImage: 'url(/Welcome.png)',
    height: '45vh',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div style={myBackGround}></div>
      <div className={Style.formBox} style={{ width: '100%' }}>
        <form ref={form} onSubmit={sendEmail} className={Style.form}>
          <div className="mb-2 d-flex">
            <label className="">Full Name</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="text"
            placeholder="Your name"
            className={Style.regInput}
            name="user_name"
          />
          <div className="mb-2 d-flex">
            <label className="">Email</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="email"
            placeholder="Your email address"
            className={Style.regInput}
            name="user_email"
          />
          <div className="mb-2 d-flex">
            <label className="">Subject</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={Style.regInput}
            name="user_subject"
          />
          <div className="mb-2 d-flex">
            <label className="">Message</label>
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <input
            type="text"
            placeholder="Enter message"
            className={Style.addInput}
            name="message"
          />
          <div className="mb-4">
            <input
              className="btn btn-primary"
              type="submit"
              value="Send Message"
            />
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
