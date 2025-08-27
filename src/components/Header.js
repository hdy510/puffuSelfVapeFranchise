import styles from "./Header.module.scss";
import headerLogo from "../resources/headerLogo.png";
import iconPhone from "../resources/iconPhone.png";

function Header({ section2Ref, section4Ref, section10Ref, section13Ref, section14Ref }) {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.container}>
      <div className={styles.wrap}>
        <a href="/" className={styles.logo}>
          <img src={headerLogo} alt="로고" className={styles.logoImg} />
        </a>
        <nav className={styles.nav}>
          <div className={styles.navList}
          onClick={() => scrollToSection(section2Ref)}
          >기회는 지금!</div>
          <div className={styles.navList}
          onClick={() => scrollToSection(section4Ref)}
          >푸푸의 메리트</div>
          <div className={styles.navList}
          onClick={() => scrollToSection(section10Ref)}
          >창업 패키지</div>
          <div className={styles.navList}
          onClick={() => scrollToSection(section13Ref)}
          >창업절차</div>
          <div className={styles.navList}
          onClick={() => scrollToSection(section14Ref)}
          >창업문의</div>
        </nav>
        <div className={styles.phone}>
          <div className={styles.firstRow}>
            <img src={iconPhone} alt="전화 아이콘" />
            <p>가맹문의</p>
          </div>
          <div className={styles.number}>070-4242-2000</div>
        </div>
      </div>
    </header>
  );
}

export default Header;