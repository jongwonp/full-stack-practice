function Write() {
  return (
    <>
      <form action="http://localhost:3000/api/test" method="POST">
        <input name="title" required></input>
        <input name="content" required></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Write;
