import styles from "./Section9.module.scss";


function Section9 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <p className={styles.title}>
          이 모든게 <span className={styles.orangeText}>5,500만원</span> 으로 충분합니다!
          </p>
          <p className={styles.subTitle}>
          인테리어 제외, <span className={styles.subOrangeText}>3,000만원</span> 으로 창업 가능
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section9;