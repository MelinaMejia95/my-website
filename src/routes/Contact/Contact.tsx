import "./Contact.styles.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1>Let's get in touch!</h1>
      <p>
        I’m always excited to hear about new and innovative projects! Whether
        you’re looking for a skilled front-end developer to bring your vision to
        life, a mentor to guide you in your tech journey, or just want to
        connect and share ideas, feel free to reach out. Let’s collaborate and
        create something amazing together!
      </p>
      <div className="secondaryContainer">
        <form>
          <div className="formField nameField">
            <label>Your Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" />
          </div>
          <div className="formField emailField">
            <label>Your Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="formField messageField">
            <label>Message</label>
            <textarea name="message" id="message" cols={20} rows={5} placeholder="Enter your message" />
          </div>
          <button>
            Submit!
          </button>
        </form>
        <img src="src/assets/sauron.png" />
      </div>
    </div>
  );
};

export default Contact;
