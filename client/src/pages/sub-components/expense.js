import Icon from "./icon";

const Expense = ({expenseName, expenseAmount, expenseDate}) => {
  return (
    <div className="p-6 w-full  mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between m-2">
      <div className="flex flex-row items-center space-x-4">
        <div className="shrink-0">
          <Icon iconName={expenseName.toLowerCase()} iconSize={"sm"} />
        </div>
        <div>
          <div className="text-left text-xl font-medium text-black">
            {expenseName}
          </div>
          <p className="text-slate-500">{expenseDate}</p>
        </div>
      </div>
      <div>
        <h2>{`-$${expenseAmount}`}</h2>
      </div>
    </div>
  );
};

export default Expense;
