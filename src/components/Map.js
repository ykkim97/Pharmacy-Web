/* global kakao */
import React, { useEffect } from "react";
import styles from "./Map.module.css";

const Map = () => {
    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center : new window.kakao.maps.LatLng(35.9482858, 126.9575991),
            level : 7,
        }

        let map = new window.kakao.maps.Map(container, options);
    }, []);

    return (
        <>
            <div className={styles['map']}>
                <div className={styles['map-container']} id="map"></div>
            </div>
        </>
    )
}

export default Map;