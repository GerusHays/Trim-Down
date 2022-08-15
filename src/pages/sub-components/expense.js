import Icon from "./icon";

const Expense = () => {
  return (
    <div className="p-6 w-full  mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between">
      <div className="flex flex-row items-center space-x-4">
        <div className="shrink-0">
          <Icon iconName={"vaping"} iconSize={"sm"} />
        </div>
        <div>
          <div class="wrapper">
            <div class="total">
              <div class="total">
                Your total is: $<span id="total">0</span>
              </div>
            </div>
            <div>
              <label for="vice-names">Choose a vice:</label>
              <select name="vice-names" id="vice-names">
                <option value="vapejuice">Vape Juice</option>
                <option value="alcohol">Alcohol</option>
                <option value="drugs">Recreational Drugs</option>
                <option value="streaming">
                  Streaming Service Subscriptions
                </option>
              </select>
            </div>
            <input
              type="number"
              min="0"
              id="t-amount"
              placeholder="Amount Spent"
            />
            <button id="add-btn">
              <i class="fa fa-plus buttons"></i> Add to Monthly Budget
            </button>

            <button id="sub-btn">
              <i class="fa fa-minus"></i> Subtract amount spent
            </button>
            <p class="error"></p>
          </div>
          <div class="transactions">
            <table>
              <thead>
                <th>Vice</th>
                <th>Amount</th>
              </thead>
              <tbody id="tbody"></tbody>
            </table>
          </div>

          <canvas id="myChart"></canvas>
          <p className="text-slate-500">August 12, 2022</p>
        </div>
      </div>
      <div>
        <span id="total">0</span>
      </div>
    </div>
  );
};

export default Expense;
