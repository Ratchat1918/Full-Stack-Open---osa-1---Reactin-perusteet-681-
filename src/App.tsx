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
