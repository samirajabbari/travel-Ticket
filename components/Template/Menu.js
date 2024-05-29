import styles from "./Styles/Menu.module.css";
import Link from "next/link";
function Menu() {
  return (
    <div className={styles.link}>
      <Link href="/">
        <span>بلیط اتوبوس</span>
      </Link>
      <Link href="/">
        <span>استعلام بلیط</span>
      </Link>
      <Link href="/">
        <span>کنسلی بلیط</span>
      </Link>
      <Link href="/">
        <span>دانستنی ها</span>
      </Link>
      <Link href="/">
        <span>پنل آزانس</span>
      </Link>
      <Link href="/">
        <span>راهنما</span>
      </Link>
    </div>
  );
}

export default Menu;
