import styles from "./Section8.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import interior1a from "../resources/interior1a.png";
import interior1b from "../resources/interior1b.png";
import interior1c from "../resources/interior1c.png";
import interior1d from "../resources/interior1d.png";
import interior2a from "../resources/interior2a.png";
import interior2b from "../resources/interior2b.png";
import interior2c from "../resources/interior2c.png";
import interior2d from "../resources/interior2d.png";


function Section8 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            깔끔하고 직관적인 <span className={styles.orangeText}>인테리어</span>
          </h2>
          <p className={styles.subTitle}>
          통일된 디자인과 깔끔한 공간 구성으로 직관적인 동선과 쾌적한 쇼핑 환경을 제공합니다
          </p>
        </div>
        <div className={styles.swiperBox}>
          <Swiper
          >
            <SwiperSlide>
              <div className={styles.slideInnerBox}>
                <p className={styles.storeName}>대흥직영점</p>
                <div className={styles.slideImgBox}>
                  <img src={interior1a} alt="대흥직영점 인테리어 이미지1" className={styles.slideImgEach} />
                  <img src={interior1b} alt="대흥직영점 인테리어 이미지2" className={styles.slideImgEach} />
                  <img src={interior1c} alt="대흥직영점 인테리어 이미지3" className={styles.slideImgEach} />
                  <img src={interior1d} alt="대흥직영점 인테리어 이미지4" className={styles.slideImgEach} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideInnerBox}>
                <p className={styles.storeName}>전주전북대점</p>
                <div className={styles.slideImgBox}>
                  <img src={interior2a} alt="전주전북대점 인테리어 이미지1" className={styles.slideImgEach} />
                  <img src={interior2b} alt="전주전북대점 인테리어 이미지2" className={styles.slideImgEach} />
                  <img src={interior2c} alt="전주전북대점 인테리어 이미지3" className={styles.slideImgEach} />
                  <img src={interior2d} alt="전주전북대점 인테리어 이미지4" className={styles.slideImgEach} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Section8;