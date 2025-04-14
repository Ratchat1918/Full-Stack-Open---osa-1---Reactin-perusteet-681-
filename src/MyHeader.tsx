function MyHeader({ courseName, course }) {
  return (
    <>
      <h1>{courseName}</h1>
      <p>
        {course[0].name} {course[0].exercises}
      </p>
    </>
  );
}
export default MyHeader;
