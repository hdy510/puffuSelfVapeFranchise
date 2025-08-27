import styles from "./Section17.module.scss";
import puffu from "../resources/puffu.png";
import kakaotalk from "../resources/kakaotalk.png";
import youtube from "../resources/youtube.png";
import instagram from "../resources/instagram.png";


function Section17 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <p className={styles.title}>신뢰를 통해 기회를 만들어 드리는</p>
          <div className={styles.titleSecondRow}>
            <img src={puffu} alt="푸푸" />
            <p className={styles.title}>와 함께하세요</p>
          </div>
        </div>
        <ul className={styles.snsBox}>
          <li className={styles.snsCard}>
            <img src={kakaotalk} alt="카카오톡 문의" className={styles.icon} />
            <p className={styles.snsName}>카카오톡 문의</p>
          </li>
          <li className={styles.snsCard}>
            <img src={youtube} alt="푸푸 유튜브" className={styles.icon} />
            <p className={styles.snsName}>푸푸 유튜브</p>
          </li>
          <li className={styles.snsCard}>
            <img src={instagram} alt="푸푸 인스타그램" className={styles.icon} />
            <p className={styles.snsName}>푸푸 인스타그램</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Section17;