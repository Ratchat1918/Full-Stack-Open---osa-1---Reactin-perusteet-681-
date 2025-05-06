import MyHeader from "./MyHeader";
import MyContent from "./MyContent";
import Total from "./Total";
const App = () => {
   const course = "Half Stack application development";
   const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
     },
     {
       name: "State of a component",
       exercises: 14,
     },
  ];
  return (
    <>
      <MyHeader courseName={course} course={parts}></MyHeader>
      <MyContent></MyContent>
       <Total olio={parts}></Total>
    </>
  );
 };
 export default App;
/**
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
*/
//unicafe
/**
import { useState } from "react";
const Statistics = (props) => {
  if (props.neededProps[0] !== 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>statistics</th>
          </tr>
          <tr>
            <td>good {props.neededProps[1]}</td>
          </tr>
          <tr>
            <td>neutral {props.neededProps[2]}</td>
          </tr>
          <tr>
            <td>bad {props.neededProps[3]}</td>
          </tr>
          <tr>
            <td>all {props.neededProps[4]}</td>
          </tr>
          <tr>
            <td>average {props.neededProps[5]}</td>
          </tr>
          <tr>
            <td>positive {props.neededProps[6]}</td>
          </tr>
        </thead>
      </table>
    );
  }
};

const App = () => {
  const [goodNum, setGoodNum] = useState(0);
  const [neutralNum, setNeutralNum] = useState(0);
  const [badNum, setBdNum] = useState(0);
  const [totalNum, setTotal] = useState(0);
  const [averageNum, setAverage] = useState(0);
  const [goodPer, setGoodPer] = useState(0);
  const handleGoodClick = () => {
    const updatedGood = goodNum + 1;
    const newTotal = totalNum + 1;
    setGoodNum(updatedGood);
    setTotal(newTotal);
    handleAverage(updatedGood, badNum, newTotal);
  };

  const handleNeutrlaClick = () => {
    const updatedNeutral = neutralNum + 1;
    const newTotal = totalNum + 1;
    setNeutralNum(updatedNeutral);
    setTotal(newTotal);
    handleAverage(goodNum, badNum, newTotal);
  };

  const handleBadClick = () => {
    const updatedBad = badNum + 1;
    const newTotal = totalNum + 1;
    setBdNum(updatedBad);
    setTotal(newTotal);
    handleAverage(goodNum, updatedBad, newTotal);
  };

  const handleAverage = (updatedGoodNum, updatedBadNum, updatedTotalNum) => {
    const newAverageNum1 = updatedGoodNum - updatedBadNum;
    const newAverageNum2 = newAverageNum1 / updatedTotalNum;
    setAverage(newAverageNum2);
    const newGoodPer = (updatedGoodNum * 100) / updatedTotalNum;
    setGoodPer(newGoodPer);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutrlaClick}>neutaral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics
        neededProps={[
          totalNum,
          goodNum,
          neutralNum,
          badNum,
          totalNum,
          averageNum,
          goodPer,
        ]}
      />
    </div>
  );
};

export default App;
*/
/** anecdotes
import { useState } from "react";
const LargestVotes = (props) => {
  const [votesLista, anecdoteLista] = props.neededProps;
  let biggestNum = 0;
  let indexOfBiggestNum = -1;
  votesLista.forEach((element) => {
    if (element >= biggestNum) {
      biggestNum = element;
      indexOfBiggestNum++;
    }
  });
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdoteLista[indexOfBiggestNum]}
      <p>has {biggestNum} votes</p>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const showRan = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);
  };
  const [votes, setVotes] = useState([1, 4, 6, 3]);
  const voteFor = (selectedIndex) => {
    const copy = [...votes];
    copy[selectedIndex] += 1;
    setVotes(copy);
  };

  return (
    <div>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <br />
      <button onClick={() => voteFor(selected)}>Vote</button>
      <button onClick={showRan}>Next Anecdote</button>
      <LargestVotes neededProps={[votes, anecdotes]}></LargestVotes>
    </div>
  );
};

export default App;
*/
