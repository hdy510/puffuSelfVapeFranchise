import styles from "./Section1.module.scss";
import headerLogo from "../resources/headerLogo.png";

function Section1 () {
  return (
    <div className={styles.container}>
      <img src={headerLogo} alt="24시 무인 전자담배 PUFFU" />
    </div>
  );
}

export default Section1;