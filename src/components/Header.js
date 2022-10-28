import React from "react";
import styles from "./Header.module.css";

// Header 컴포넌트
const Header = () => {
    return (
        <>
            <div className={styles['header-container']}>
                <h2 className={styles['header-title']}>전라북도 익산시 약국 정보</h2>
            </div>
        </>
    )
}

export default Header;