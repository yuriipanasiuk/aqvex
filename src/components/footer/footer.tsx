import styles from "./footer.module.css";
import Container from "@/components/common/container";
import VectorIcon from "@/components/common/vector-icon";
import { PAYMENTS_ITEM } from "@/utils/moks";

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
