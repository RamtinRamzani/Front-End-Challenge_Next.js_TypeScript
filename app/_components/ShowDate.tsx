// ShowDate.tsx
interface DateInput {
  title: string;
  number: number | string; // Allow string for "--" placeholder
}

interface ShowDateProps {
  showDate: DateInput[];
}

const ShowDate = ({ showDate }: ShowDateProps) => {
  return (
    <div>
      {showDate.length === 0 ? (
        <p className="text-red-500 font-semibold">
          Please enter a valid past date (DD/MM/YYYY)
        </p>
      ) : (
        showDate.map((item) => (
          <div
            className="flex items-center gap-[clamp(0.2rem,4vw,0.5rem)] font-extrabold text-[clamp(2rem,4vw,4rem)] mt-3"
            key={item.title}
          >
            <span className="text-blue-600">{item.number}</span>
            <p className="capitalize text-black">{item.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowDate;
