//import MyHeader from "./MyHeader";
//import MyContent from "./MyContent";
//import Total from "./Total";
//const App = () => {
//  const course = "Half Stack application development";
//  const parts = [
//   {
//     name: "Fundamentals of React",
//     exercises: 10,
//   },
//   {
//     name: "Using props to pass data",
//     exercises: 7,
//    },
//    {
//      name: "State of a component",
//      exercises: 14,
//    },
// ];
// return (
//   <>
//     <MyHeader courseName={course} course={parts}></MyHeader>
//     <MyContent></MyContent>
//      <Total olio={parts}></Total>
//   </>
// );
//};
//export default App;
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
export default App;
