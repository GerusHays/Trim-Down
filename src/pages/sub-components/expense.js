import Icon from "./icon";

const Expense = () => {
  return (
    <div className="p-6 w-full  mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between">
      <div className="flex flex-row items-center space-x-4">
        <div className="shrink-0">
          <Icon iconName={"vaping"} iconSize={"sm"} />
        </div>
        <div>
          <div className="text-left text-xl font-medium text-black">
            Vape Juice
          </div>
          <p className="text-slate-500">August 12, 2022</p>
        </div>
      </div>
      <div>
        <h2>-$25.00</h2>
      </div>
    </div>
  );
};

export default Expense;
