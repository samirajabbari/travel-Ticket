import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./style/Header.module.css";
import toFarsiNumber from "../../utils/persianNumber";
import Menu from "../Template/Menu";
function Header() {
  const route = useRouter();
  return (
    <>
      <div className={styles.subheader}>
        <h4>پشتیبانی و فروش </h4>
        <h3>
          {toFarsiNumber(0)}
          {toFarsiNumber(2153826)}
        </h3>
        <Link href="/" className={styles.Link}>
          درباره ما{" "}
        </Link>
        <span>|</span>
        <Link href="/" className={styles.Link}>
          تماس با ما
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>
            <img src="/Icons/logo.png" alt="724Logo" />
          </div>
          <h2>آسانترین راه رزرو و خرید بلیط اتوبوس</h2>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default Header;
