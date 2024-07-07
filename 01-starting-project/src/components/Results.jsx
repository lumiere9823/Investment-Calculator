import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ UserInput }) {
  const resultsData = calculateInvestmentResults(UserInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].annualInvestment -
    resultsData[0].interest;
  return (
    <>
      {resultsData.length > 0 && (
        <section id="results">
          <table id="result">
            <thead>
              <tr>
                <th>Year</th>
                <th>Interest</th>
                <th>Value at End of Year</th>
                <th>Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {resultsData.map((data) => {
                const totalInterest =
                  data.valueEndOfYear -
                  data.annualInvestment * data.year -
                  initialInvestment;
                return (
                  <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
