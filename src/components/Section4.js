import { forwardRef, useState, useRef } from "react";
import styles from "./Section4.module.scss";
import puffu from "../resources/puffu.png";
import merits01a from "../resources/merits01a.png";
import merits01b from "../resources/merits01b.png";

const Section4 = forwardRef((props, ref) => {
  // 어떤 merits가 열렸는지 관리 (index 기반)
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>성공적인 창업으로 이끄는</h2>
          <div className={styles.titleSeconRow}>
            <img src={puffu} alt="PUFFU" />
            <p className={styles.titleSeconRowTxt}>만의 메리트</p>
          </div>
        </div>
        <ul className={styles.meritsBox}>
          {[
            {
              id: "01",
              title: "공장 직연결 공급망",
              sub: "전자담배 생산 본사에서 고품질의 다양한 제품을 안정적으로 공급하고, 시장 변화에 빠르게 대응할 수 있습니다",
              contents: (
                <>
                  <img
                    src={merits01a}
                    alt="타사는 공장에서 도매처를 거쳐 점주에게 공급"
                    className={styles.hoverContentsImg}
                  />
                  <img
                    src={merits01b}
                    alt="푸푸는 공장에서 점주에게 직접 공급"
                    className={styles.hoverContentsImg}
                  />
                </>
              ),
            },
            {
              id: "02",
              title: "무재고 위탁판매",
              sub: "사입 부담 없이 필요한 수량만 공급받아 불필요한 재고 부담을 줄일 수 있습니다",
              contents: 
              <>
                <div>타사
                  <div>이미지1</div>
                  <div>이미지2</div>
                  <div>이미지3</div>
                </div>
                <div>푸푸</div>
              </>,
            },
          ].map((item, index) => (
            <li
              key={index}
              className={styles.meritsEach}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className={styles.hoverBg}
                style={{
                  opacity: openIndex === index ? 1 : 0,
                  transition: "opacity 0.5s ease"
                }}
              />
              <span className={styles.meritsId}>{item.id}</span>
              <p className={styles.meritsTitle}>{item.title}</p>
              <p className={styles.meritsSubTitle}>{item.sub}</p>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={styles.hoverContents}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "max-height 0.5s ease, opacity 0.5s ease",
                }}
              >
                {item.contents}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Section4;
