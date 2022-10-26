import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = '44ntpeiDIQC3Rrv3QyHXpFskTksFwgmaSRpwc7yVYi4E674fOglWjRCUvz%2BYu0NiwI0i4SKQc4%2FmdYuBrgeHrg%3D%3D';

const GetData = () => {
    const [phData, setPhData] = useState([]);

    const fetchPharmacy = async () => {
        const data = await axios.get(
            `https://api.odcloud.kr/api/3078919/v1/uddi:264311f3-6422-4c54-9e48-992539826ca6_201910141634?page=1&perPage=100&serviceKey=${API_KEY}`
        ).then(result => setPhData(result.data))
    }

    useEffect(() => {
        fetchPharmacy();
        console.log(phData)
    }, [])

    return (
        <>
            {phData.data?.map((item, index) => (
                <div key={index}>
                    <h3>{item.순번}</h3>
                    <h3>{item.약국명칭}</h3>
                    <h3>{item['약국소재지(도로명)']}</h3>
                    <h3>{item.약국전화번호}</h3>
                </div>
            ))}
        </>
    )
}

export default GetData;