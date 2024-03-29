import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Contact us for a tailored offer</h2>
            <p>
            Looking for an exciting way to celebrate with your friends? Have a great idea of how to surprise someone with a tailored Sur Ron experience? For groups of 5, we can discuss a custom offer. Drop us a message or call us at +351 914 976 892 to discuss the details.
            </p>
            {/* <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div> */}
          </div>
          <div className="contact-form">
            <div className="contact-form__title">
              <h3>Get in touch</h3>
            </div>
            <form>
              <div className="contact-form__input">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              {/* <textarea placeholder="Message"></textarea> */}
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
