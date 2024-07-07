export default function UserInput({ onChange, UserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            required
            value={UserInput.initialInvestment}
            onChange={(e) => onChange("intialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            type="number"
            required
            value={UserInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={UserInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration Return</label>
          <input
            type="number"
            required
            value={UserInput.durationReturn}
            onChange={(e) => onChange("durationReturn", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
