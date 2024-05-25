import { useState } from "react";
import Message from "./Message";
import { split } from "postcss/lib/list";

export default function Form() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const [display, setDisplay] = useState(false);

  const avgTip = (tip + friendTip) / 2;
  const tipAmount = Number(((avgTip / 100) * bill).toFixed(2));
  const total = tipAmount + bill;
  const split = Number((total / 2).toFixed(2));

  function handleSubmit(e) {
    e.preventDefault();
    setDisplay(true);
  }

  function handleReset() {
    setBill("");
    setTip(0);
    setFriendTip(0);
    setDisplay(false);
  }

  return (
    <div className="container mx-auto max-w-md p-6 bg-white rounded-md shadow-lg">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6">
          <label htmlFor="bill" className="block mb-2 text-gray-600">
            Enter Bill Amount:
          </label>
          <input
            type="number"
            name="bill"
            id="bill"
            value={bill}
            min="0"
            max="100000"
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="tip" className="block mb-2 text-gray-600">
            How did you find the service?
          </label>
          <select
            name="tip"
            id="tip"
            value={tip}
            onChange={(e) => setTip(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="0">It was awful (0%)</option>
            <option value="5">It was good (5%)</option>
            <option value="10">It was great (10%)</option>
            <option value="20">It was amazing (20%)</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="friendTip" className="block mb-2 text-gray-600">
            How did your friend find the service?
          </label>
          <select
            name="friendTip"
            id="friendTip"
            value={friendTip}
            onChange={(e) => setFriendTip(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="0">It was awful (0%)</option>
            <option value="5">It was good (5%)</option>
            <option value="10">It was great (10%)</option>
            <option value="20">It was amazing (20%)</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>
      <button
        className="w-full mt-4 bg-red-500 text-white py-3 rounded-md hover:bg-red-600"
        onClick={handleReset}
      >
        Reset
      </button>
      {display && (
        <Message className="message mt-8 p-6 bg-gray-100 border border-gray-200 rounded-md shadow-md">
          Your total is ${total} (${bill} + ${tipAmount} tip)
        </Message>
      )}
      {display && (
        <Message className="message mt-8 p-6 bg-gray-100 border border-gray-200 rounded-md shadow-md">
          Your split bill amount is ${split} each
        </Message>
      )}
    </div>
  );
}
