import React, { useEffect, useState } from 'react';

export default function GetProvince() {
  const [data, setData] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // ใช้ async function ภายใน useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); 
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData(); // เรียกใช้งาน async function
  }, []); // ใช้ [] เพื่อให้รันแค่ครั้งเดียวตอนคอมโพเนนต์ mount


  return data
}
