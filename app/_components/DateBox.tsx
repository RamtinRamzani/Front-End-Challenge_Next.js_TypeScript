interface DateBoxItem {
  title: string;
  number: string;
}

interface DateBoxProps {
  dateBox: DateBoxItem[];
  onInputChange: (title: string, value: string) => void;
}

const DateBox = ({ dateBox, onInputChange }: DateBoxProps) => {
  return (
    <div className="flex gap-3 border-b">
      {dateBox.map((item: DateBoxItem) => (
        <div className="flex flex-col gap-2 md:w-1/4 pb-16" key={item.title}>
          <label
            htmlFor={item.title}
            className="text-gray-500 font-semibold uppercase"
          >
            {item.title}
          </label>
          <input
            type="text"
            id={item.title}
            className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-400 placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-pulse h-14 placeholder:font-bold"
            placeholder={item.number.toString()}
            onChange={(e) => onInputChange(item.title, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default DateBox;
