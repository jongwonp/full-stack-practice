import { useEffect, useState } from "react";

function Hi() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/hi");
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>{result?.abc}</div>
    </>
  );
}

export default Hi;
