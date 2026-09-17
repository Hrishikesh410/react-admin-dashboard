import { useState } from "react";
import Card from "../components/common/Card";
import ProfileEditor from "../components/profile/ProfileEditor";

const Dashboard = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
    setCount((previousCount) => previousCount + step);
  };

  const handleDecrement = () => {
    setCount((previousCount) => previousCount - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  const label = count > 0
    ? "Positive"
    : count < 0
      ? "Negative"
      : "Zero";

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="cards">
        <Card
          title="Total Products"
          value="1,240"
          description="Products in inventory"
        />
        <Card
          title="Total Users"
          value="8,540"
          description="Registered Users"
        />
        <Card
          title="Total Orders"
          value="3,240"
          description="Orders this month"
        />

      </div>
      <section className="demo-section">
        <h2>Counter</h2>

        <h3>Count: {count}</h3>

        <p>Status: {label}</p>

        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(event) =>
              setStep(Number(event.target.value))
            }
          />
        </label>

        <div className="button-group">
          <button onClick={handleIncrement}>
            Increment
          </button>

          <button onClick={handleDecrement}>
            Decrement
          </button>

          <button onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
      <ProfileEditor/>
    </div>
  );
};

export default Dashboard;
