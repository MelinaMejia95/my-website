import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

import "./Contact.styles.scss";
import Tooltip from "../../components/Tooltip/Tooltip";
import Alert from "../../components/Alert/Alert";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Not a valid email address"),
  message: Yup.string().required("This field is required"),
});

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { errors, touched, values, getFieldProps, handleSubmit, isValid, resetForm } =
    useFormik({
      initialValues,
      onSubmit: () => console.log("Form submitted!"),
      validationSchema,
    });

  const handleFormSubmit = () => {
    setIsSubmitting(true);
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
      .then(() => {
        resetForm();
        toast.custom(
          <Alert
            message="Thank you for reaching out! we'll get back to you as soon as possible."
            imgUrl="src/assets/manson-happy.webP"
            error={false}
          />
        );
      })
      .catch(() => {
        toast.custom(
          <Alert
            message="Oops! Looks like we're having some issues. Please try again later."
            imgUrl="src/assets/manson-sorry.webP"
            error
          />
        );
      })
      .finally(() => setIsSubmitting(false));
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
        <form id="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="formField nameField">
            <label htmlFor="name">Your Name</label>
            <input
              {...getFieldProps("name")}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className={errors.name && touched.name ? "errorField" : ""}
            />
            {errors.name && touched.name && (
              <ErrorLabel message={errors.name} />
            )}
          </div>
          <div className="formField emailField">
            <label htmlFor="email">Your Email</label>
            <input
              {...getFieldProps("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className={errors.email && touched.email ? "errorField" : ""}
            />
            {errors.email && touched.email && (
              <ErrorLabel message={errors.email} />
            )}
          </div>
          <div className="formField messageField">
            <label htmlFor="message">Message</label>
            <textarea
              {...getFieldProps("message")}
              name="message"
              id="message"
              placeholder="Enter your message"
              cols={20}
              rows={5}
              required
              className={errors.message && touched.message ? "errorField" : ""}
            />
            {errors.message && touched.message && (
              <ErrorLabel message={errors.message} />
            )}
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            disabled={
              !isValid ||
              getFieldProps("name").value === "" ||
              getFieldProps("email").value === "" ||
              getFieldProps("message").value === "" ||
              isSubmitting
            }
          >
            {isSubmitting ? 'Sending...' : 'Submit!'}
          </button>
        </form>
        {isMobile ? (
          <img src="src/assets/sauron.webP" alt="Sauron the cat" />
        ) : (
          <Tooltip
            content={
              <img
                src="src/assets/sauron-dialogue.webP"
                alt="Cat saying: I'm Sauron! I'm the youngest cat! Contact us! We would love to hear about your ideas and how we can help you make them come true!"
              />
            }
            placement="right-start"
            xPosition={{ add: false, positionExtra: 90 }}
            yPosition={{ add: false, positionExtra: 170 }}
          >
            <img src="src/assets/sauron.webP" alt="Sauron the cat" />
          </Tooltip>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
