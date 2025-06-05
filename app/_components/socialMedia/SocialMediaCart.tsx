type CardProps = {
  title: string;
  value: string | number;
  change: string | number;
  icon: React.ReactNode;
  border: string;
  isNegative?: boolean;
};

function SocialMediaCart({
  title,
  value,
  change,
  icon,
  border,
  isNegative,
}: CardProps) {
  return (
    <div
      className={`bg-[#252B43] rounded-lg p-4 w-full max-w-xs border-t-4 ${border}`}
    >
      <div className="flex justify-center items-center gap-2 text-sm mb-4 text-slate-300">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-white">{value}</p>
        <p
          className={`text-xs mt-2 flex items-center justify-center gap-1 font-semibold ${
            isNegative ? "text-red-500" : "text-green-400"
          }`}
        >
          <span>{isNegative ? "▼" : "▲"}</span>
          <span>{change}</span>
        </p>
      </div>
    </div>
  );
}

export default SocialMediaCart;
