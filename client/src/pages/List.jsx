import { useLoaderData } from "react-router-dom";

export default function List() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      {data.map((v) => {
        return <div>{v.title}</div>;
      })}
    </>
  );
}

export const listLoader = async () => {
  const response = await fetch("http://localhost:3000/api/list");
  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  return await response.json();
};
