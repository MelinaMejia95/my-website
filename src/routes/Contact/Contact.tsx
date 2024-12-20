import { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import emailjs from "@emailjs/browser";

import "./Contact.styles.scss";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const initialValues: IFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleFormSubmit = (values: IFormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const templateParams = {
      name: "Melina",
      user_name: values.name,
      user_email: values.email,
      user_message: values.message,
    };
    emailjs
      .send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_ID,
    });
  }, []);

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
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          <Form id="contactForm">
            <div className="formField nameField">
              <label htmlFor="name">Your Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="formField emailField">
              <label htmlFor="email">Your Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="formField messageField">
              <label htmlFor="message">Message</label>
              <Field
                name="message"
                id="message"
                placeholder="Enter your message"
                component="textarea"
                cols={20}
                rows={5}
                required
              />
            </div>
            <button type="submit">Submit!</button>
          </Form>
        </Formik>
        <img src="src/assets/sauron.png" alt="Sauron the cat" />
      </div>
    </div>
  );
};

export default Contact;
