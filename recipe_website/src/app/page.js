import Navbar from "./Navbar";
import styles from "./Home.module.css"; // Home page-specific styles

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Welcome to Food4Us</h1>
        <p>Your go-to place for all things food!</p>
        <a href="#features" className={styles.ctaButton}>Browse Recipes</a>
      </header>
      <section id="features" className={styles.features}>
        <div className={styles.feature}>
          <h2>Delicious Recipes</h2>
          <p>Explore a wide range of recipes for every taste and occasion.</p>
        </div>
        <div className={styles.feature}>
          <h2>Healthy Eating</h2>
          <p>Find tips and tricks to maintain a healthy and balanced diet.</p>
        </div>
        <div className={styles.feature}>
          <h2>Community</h2>
          <p>Join a community of food lovers and share your experiences.</p>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 Food4Us. All rights reserved.</p>
      </footer>
    </div>
  );
}
