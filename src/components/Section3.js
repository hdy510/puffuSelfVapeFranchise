import styles from "./Section3.module.scss";


function Section3 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            혹시 이런 고민이 있지 않으세요?<br/>
            그렇다면 푸푸 창업, <span className={styles.orangeText}>적극 추천</span>드려요!
          </h2>
        </div>
        <ul className={styles.worryBox}>
          <li className={styles.worryEach}>
            <img alt="업종 변경을 고려하고 있어요" />
            <img alt="고민하는 이모티콘" />
          </li>


        </ul>
      </div>
    </div>
  )
}

  export default Section3;