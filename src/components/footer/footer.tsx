import styles from "./footer.module.css";
import Container from "@/components/common/container";
import VectorIcon from "@/components/common/vector-icon";

const PAYMENTS_ITEM = [
  { key: "master", icon: "master-card", width: "77", height: "34" },
  { key: "visa", icon: "visa", width: "69", height: "34" },
  { key: "apple", icon: "apple-pay", width: "62", height: "34" },
  { key: "google", icon: "google-pay", width: "64", height: "34" },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <div className={styles.footerIcon}>
              <VectorIcon id="footer-icon" width="39" height="29" />
            </div>

            <div className={styles.madeInUkraine}>
              <VectorIcon id="made-in-ukraine" width="39" height="29" />
            </div>
          </div>

          <p className={styles.footerText}>AQVEX © 2026 | Все права защищены</p>

          <div className={styles.paymentWrapper}>
            {PAYMENTS_ITEM.map(({ key, icon, width, height }) => (
              <VectorIcon id={icon} width={width} height={height} key={key} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
