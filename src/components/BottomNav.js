import styles from "./BottomNav.module.scss";
import iconPhone from "../resources/iconPhone.png";
import iconPhoneOrange from "../resources/iconPhoneOrange.png";

function BottomNav() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    const username = formData.get("username");
    const phone = formData.get("phoneNumber");
    const email = formData.get("email");
  
    if (!username) {
      alert("성함을 입력해 주세요.");
      return;
    }
    if (!phone.match(/^[0-9]{10,11}$/)) {
      alert("올바른 연락처를 입력해 주세요. (예: 01012345678)");
      return;
    }
    if (!email.includes("@")) {
      alert("올바른 이메일 주소를 입력해 주세요.");
      return;
    }
  
    alert("정상적으로 제출되었습니다 ✅");
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.phoneBox}>
          <img src={iconPhoneOrange} alt="전화 아이콘" className={styles.phoneIcon} />
          <p className={styles.phoneNumber}>070-4242-2000</p>
        </div>
        <form noValidate  className={styles.formBox} onSubmit={handleSubmit}>
          <div className={styles.inputSection}>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="username"
                placeholder="성함"
                required
                className={styles.inputTag}
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <div className={styles.inputBox}>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="연락처"
                required
                className={styles.inputTag}
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                required
                className={styles.inputTag}
              />
            </div>
          </div>

          <label className={styles.agreeBox}>
            <input type="checkbox" required className={styles.agreeBoxInput} />
            개인정보처리방침 동의
          </label>

          <button type="submit" className={styles.submitBtn}>
            <img src={iconPhone} alt="전화 아이콘" className={styles.submitBtnIcon} />
            <p className={styles.submitBtnTxt}>문의하기</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BottomNav;
