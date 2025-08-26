import styles from "./Section4.module.scss";
import puffu from "../resources/puffu.png";


function Section4 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>성공적인 창업으로 이끄는</h2>
          <div className={styles.titleSeconRow}>
            <img src={puffu} alt="PUFFU" />
            <p className={styles.titleSeconRowTxt}>만의 메리트</p>
          </div>
        </div>
        <ul className={styles.meritsBox}>
          <li className={styles.meritsEach}>
            <span className={styles.meritsId}>01</span>
            <p className={styles.meritsTitle}>공장 직연결 공급망</p>
            <p className={styles.meritsSubTitle}>전자담배 생산 본사에서 고품질의 다양한 제품을 안정적으로 공급하고, 시장 변화에 빠르게 대응할 수 있습니다</p>
          </li>
          <li className={styles.meritsEach}>
            <span className={styles.meritsId}>02</span>
            <p className={styles.meritsTitle}>무재고 위탁판매</p>
            <p className={styles.meritsSubTitle}>사입 부담 없이 필요한 수량만 공급받아 불필요한 재고 부담을 줄일 수 있습니다</p>
          </li>
          <li className={styles.meritsEach}>
            <span className={styles.meritsId}>03</span>
            <p className={styles.meritsTitle}>KC 인증 자판기</p>
            <p className={styles.meritsSubTitle}>국가 공식 KC 인증을 받은 자판기를 사용해 안전성과 신뢰성을 갖추고 있습니다</p>
          </li>
          <li className={styles.meritsEach}>
            <span className={styles.meritsId}>04</span>
            <p className={styles.meritsTitle}>자체 운영 시스템</p>
            <p className={styles.meritsSubTitle}>다양한 전문가들이 모여 개발한 키오스크, 어플을 통해 더욱 효율적이고 체계적인 매장 운영을 가능하게 합니다</p>
          </li>
          <li className={styles.meritsEach}>
            <span className={styles.meritsId}>05</span>
            <p className={styles.meritsTitle}>미성년자 차단문</p>
            <p className={styles.meritsSubTitle}>매장에 유리로 된 중문을 설치해 미성년자 출입 문제를 원천 차단합니다</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

  export default Section4;