function Total({ olio }) {
  return (
    <>
      <p>
        {olio[1].name} {olio[1].exercises}
      </p>
      <p>
        Number of exercises{" "}
        {olio[0].exercises + olio[1].exercises + olio[2].exercises}
      </p>
    </>
  );
}
export default Total;
