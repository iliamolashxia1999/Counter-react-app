import {
    useState,
    useEffect,
  } from "react";
function Calculator(){
    const [number, count] = useState(function(){
        const lsNumber =localStorage.getItem('number');
        return lsNumber ? JSON.parse(lsNumber) : 0;
      });
      const increment = () =>{
        count(number + 1);
      }
      const decrement = () =>{
        if (number > 0){
          count(number - 1);
        }
      }
      const returnDefault = () =>{
        count(number - number);
      }
      useEffect(function(){
        localStorage.setItem('number', JSON.stringify(number));
      },[number]);
    return (
        <div className="container">
          <h1>{number}</h1>
          <div>
          <button className="DecrementButton" onClick={decrement}>-</button>
          <button className="IncrimentButton" onClick={increment}>+</button>
          <div>          
            <button className="GoToDefaultButton" onClick={returnDefault}>Restore</button>
          </div>

          </div>
        </div>
      );
};

export default Calculator;

