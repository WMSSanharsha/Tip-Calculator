import "./App.css";
import { useState } from "react";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [yourRate, setYourRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);

  return (
    <div className="App">
      <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
      <YourServiceSatisfaction yourRate={yourRate} setYourRate={setYourRate} />
      <FriendServiceSatisfaction
        friendRate={friendRate}
        setFriendRate={setFriendRate}
      />
      <PayDisplay
        billAmount={billAmount}
        yourRate={yourRate}
        friendRate={friendRate}
      />
      <Reset
        setBillAmount={setBillAmount}
        setYourRate={setYourRate}
        setFriendRate={setFriendRate}
      />
    </div>
  );
}

function BillInput({ billAmount, setBillAmount }) {
  return (
    <div>
      How much was the bill?{" "}
      <input
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      ></input>
    </div>
  );
}

function YourServiceSatisfaction({ yourRate, setYourRate }) {
  return (
    <div>
      How did you like the service?
      <select
        value={yourRate}
        onChange={(e) => setYourRate(Number(e.target.value))}
      >
        <option value={0}>Dissatidfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FriendServiceSatisfaction({ friendRate, setFriendRate }) {
  return (
    <div>
      How did your friend like the service?
      <select
        value={friendRate}
        onChange={(e) => setFriendRate(Number(e.target.value))}
      >
        <option value={0}>Dissatidfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function PayDisplay({ billAmount, yourRate, friendRate }) {
  let averageTipPrecent = (yourRate + friendRate) / 2;

  let tip = billAmount * (averageTipPrecent / 100);

  let totalAmount = billAmount + tip;
  return (
    <div>
      <h2>
        You Pay ${totalAmount} (${billAmount} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ setBillAmount, setFriendRate, setYourRate }) {
  function handleRest() {
    setBillAmount(0);
    setFriendRate(0);
    setYourRate(0);
  }
  return (
    <div>
      <button onClick={handleRest}>Reset</button>
    </div>
  );
}
