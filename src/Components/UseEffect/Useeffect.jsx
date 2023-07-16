import { useState, useEffect } from "react";
import styles from './Useeffect.module.css';
function State() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);

  return (
   <div className={styles.parent}>
     <div className={styles.container}>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Click me</button>
      <button className={styles.button} onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
    <div className={styles.cards}>
    <div className={styles.card}>
    <h1>useEffect</h1>
    <p>useEffect is like the name it carries out an effect each time when the sate is changed. By default it runs after the first render, also used to fetch data from external system</p>
    </div>
    <div className={styles.card}>
    <h1>Eaxmple - explained</h1>
    <p>We are applying the change whenever the button click on frontend we applying the value to the console how many times that the button1 and button 2 clicked is clicked</p>
    </div>
    </div>
   </div>
  );
}

export default State;