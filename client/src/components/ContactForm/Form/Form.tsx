import { useForm } from "@formspree/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

import styles from "./Form.module.scss";

interface IContactForm {
  name?: string;
  email?: string;
  message?: string;

  [key: string]: string | undefined;
}

interface IValidationMessages extends IContactForm {
  all?: string;
}

const defaultFormState: IContactForm = {
  name: "",
  email: "",
  message: "",
};

const Form = () => {
  const [state, handleSubmit, resetFormspree] = useForm("mbjneozv");

  const [form, setForm] = useState<IContactForm>(defaultFormState);
  const [validationMessages, setValidationMessages] = useState<IValidationMessages>(defaultFormState);
  const [formTouched, setFormTouched] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Clear validation message when field becomes empty
    if (value === "") {
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        [name]: "",
      }));
      return;
    }

    // Validation for name
    if (name === "name") {
      const isValidName = value.length >= 2 && value.length <= 50;
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        name: isValidName ? "" : "Name must be between 2 and 50 characters",
      }));
    }

    // Validation for email
    if (name === "email") {
      const isValidEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        email: isValidEmail ? "" : "Invalid Email",
      }));
    }

    // Validation for message
    if (name === "message") {
      const isValidMessage = value.length >= 20 && value.length <= 200;
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        message: isValidMessage
          ? ""
          : "Message must be between 20 and 200 characters",
      }));
    }
  };

  const isSubmitDisabled = () => {
    const isEmptyField = Object.values(form).some((val) => val?.trim() === "");
    const isAnyInvalid = Object.values(validationMessages).some(
      (message) => message !== ""
    );
    return isEmptyField || isAnyInvalid;
  };

  const isAnyFieldEmpty = useCallback(() => {
    for (const key in form) {
      if (form[key]?.trim() === "") {
        return true;
      }
    }
    return false;
  }, [form]);

  useEffect(() => {
    if (formTouched && isAnyFieldEmpty()) {
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        all: "All Fields Required",
      }));
    } else {
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        all: "",
      }));
    }
  }, [formTouched, isAnyFieldEmpty]);

  useEffect(() => {
    if (state.succeeded) {
      setSuccess("Message Sent Successfully!");

      const timer = setTimeout(() => {
        setSuccess("");
        resetFormspree();
      }, 4000);

      setForm(defaultFormState);

      setValidationMessages(defaultFormState);

      formRef.current?.reset();

      setFormTouched(false);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, resetFormspree]);

  return (
    <div className={styles.formWrapper}>
      <div className="success-message-container">
        {success && <p className="form-success-message">{success}</p>}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onBlur={() => setFormTouched(true)}
      >
        <div className={styles.formContainer}>
          {validationMessages.all && (
            <div className="validation-message-container">
              <p className="validation-message">{validationMessages.all}</p>
            </div>
          )}

          {validationMessages.name && (
            <div className="validation-message-container">
              <p className="validation-message">{validationMessages.name}</p>
            </div>
          )}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name..."
            autoComplete="true"
            value={form.name}
            onChange={handleFormChange}
          />

          {validationMessages.email && (
            <div className="validation-message-container">
              <p className="validation-message">{validationMessages.email}</p>
            </div>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email..."
            autoComplete="true"
            value={form.email}
            onChange={handleFormChange}
          />

          {validationMessages.message && (
            <div className="validation-message-container">
              <p className="validation-message">{validationMessages.message}</p>
            </div>
          )}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message..."
            value={form.message}
            onChange={handleFormChange}
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitDisabled() || state.submitting}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
