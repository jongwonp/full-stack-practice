import { useLoaderData } from "react-router-dom";

export default function Detail() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div>title: {data.title}</div>
      <div>content: {data.content}</div>
    </>
  );
}

export const detailLoader = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/detail/${params.id}`);
  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  return await response.json();
};
