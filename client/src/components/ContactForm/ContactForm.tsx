import styles from "./ContactForm.module.scss";
import Form from "./Form/Form";

export const ContactForm: React.FC = (): React.ReactNode => {
  return (
    <section id="contact">
      <hr className={styles.divider}/>
      <div className={styles.contactWrapper}>
        <h2>Let's Build Something Amazing</h2>
        <p>Looking for a frontend developer who can implement beautiful and functional solutions? Let's discuss your needs.</p>
        <div className={styles.locationWrapper}>
            <svg className={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span><small>Ontario, Canada</small></span>
        </div>
        <div className={styles.contactContainer}>
            <Form/>
        </div>
      </div>
    </section>
  );
};
