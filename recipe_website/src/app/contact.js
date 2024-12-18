// src/app/contact.js
import Navbar from "./Navbar"; // Import Navbar if needed
import styles from "./contact.module.css"; // You can use a CSS module for styling

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Contact Us</h1>
      </header>
      <div className={styles.content}>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form className={styles.form}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
