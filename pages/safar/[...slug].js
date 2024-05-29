import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBus,
  faCreditCard,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import moment, { locale } from "jalali-moment";
import styles from "../../styles/travelList.module.css";
//--------------------------------------------------------------------------
function Safar() {
  const [travelData, setTravelData] = useState();
  const [data, setData] = useState();
  const { query } = useRouter();
  //--------------------------------------------------------------
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URI}/services`
      );
      const data = await res.json();
      setTravelData(data);
    };
    fetchdata();
  }, []);
  useEffect(() => {
    const filteredData = travelData?.filter((travel) => {
      if (query.slug[2]) {
        return (
          travel.originCity === query.slug[0] &&
          travel.destinationCity === query.slug[1] &&
          travel.dateTime.split("T")[0] === query.slug[2]
        );
      } else {
        return (
          travel.originCity === query.slug[0] &&
          travel.destinationCity === query.slug[1]
        );
      }
    });
    setData(filteredData);
  }, [query, travelData]);

  return (
    <div className={styles.List}>
      {data?.map((item) => {
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

export default Safar;
