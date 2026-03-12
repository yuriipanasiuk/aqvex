import styles from "./header.module.css";
import Container from "@/components/common/container";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <a href="/">
          <img src="/images/logo.png" alt="logo" className={styles.logo} />
        </a>
      </Container>
    </div>
  );
};

export default Header;
