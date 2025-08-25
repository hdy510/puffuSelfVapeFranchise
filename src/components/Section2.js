import styles from "./Section2.module.scss";

function Section2 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.part1}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>커지는 <span className={styles.orangeText}>전자담배</span> 시장!<br />
            폭발하는 <span className={styles.orangeText}>무인매장</span> 수요!
            </h1>
            <p className={styles.subTitle}>전자담배와 무인매장, 두 상승 곡선이 만나는 지금! 기회를 선점하세요</p>
          </div>
          <div className={styles.cardBox}>
            
          </div>
        </div>

        <div className={styles.part2}>

        </div>

        <div className={styles.part3}>

        </div>
      </div>
    </div>
  );
}

export default Section2;