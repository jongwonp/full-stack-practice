import { Link, useLoaderData } from "react-router-dom";

export default function List() {
  const data = useLoaderData();
  return (
    <>
      <div>
        {data.map((v) => {
          return (
            <div>
              <Link to={`/detail/${v._id}`}>
                {v.title} {v._id}
              </Link>
            </div>
          );
        })}
      </div>
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
