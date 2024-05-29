import SearchFrom from "./modules/SearchFrom";
import styles from "./styles/Info.module.css";

function Info() {
  return (
    <div className={styles.container}>
      <div>
        <SearchFrom />
      </div>
      <div className={styles.left}>
        <img src="./Icons/travel.png" />
      </div>
    </div>
  );
}

export default Info;
