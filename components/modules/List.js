import { useEffect, useState } from "react";
import styles from "./styles/List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBus,
  faCreditCard,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import moment from "jalali-moment";
//----------------------------------------------------------------------
function List() {
  const [travelList, setTravelList] = useState([]);
  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URI}/services`
        );
        const data = await res.json();
        setTravelList(data);
      } catch (error) {}
    };
    fetchProvince();
  }, []);

  return (
    <div className={styles.List}>
      {travelList?.map((item) => {
        return (
          <div className={styles.ListBox} key={item.id}>
            <div className={styles.imageBox}>
              <img src={`${item.image}`} />
            </div>
            <div className={styles.infoBox}>
              <div className={styles.businfo}>
                <p>
                  <FontAwesomeIcon icon={faBus} className={styles.icon} />{" "}
                  <span>{item.originCity}</span>
                  <span className={styles.payaane}>(پایانه مرکزی)</span>
                  <span className={styles.line}>
                    {" "}
                    • - - - - - - - - - - - - - - - - •
                  </span>
                  <span>{item.destinationCity}</span>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className={styles.icon}
                  />{" "}
                  <span>{moment(item.dateTime).format("jYYYY/jMM/jDD")}</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} className={styles.icon} />{" "}
                  <span>{moment(item.dateTime).format("HH:mm")}</span>
                </p>
              </div>
              <div className={styles.cached}>
                <p>
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className={styles.icon}
                  />{" "}
                  <span>{item.price.toLocaleString("fa-IR")}</span>
                </p>
                <button>خرید</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
