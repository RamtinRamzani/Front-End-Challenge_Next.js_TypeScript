type OverviewCardProps = {
  title: string;
  icon: React.ReactNode;
  value: string | number;
  change: string | number;
  isNegative?: boolean;
};

function OverviewSocialMediaCart({
  title,
  icon,
  value,
  change,
  isNegative,
}: OverviewCardProps) {
  return (
    <div className="bg-[#252B43] rounded-lg p-4 w-full max-w-xs">
      <div className="flex justify-between text-sm mb-4 text-slate-300">
        <span>{title}</span>
        {icon}
      </div>
      <div className="flex justify-between items-end">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p
          className={`text-sm font-semibold flex items-center gap-1 ${
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

export default OverviewSocialMediaCart;
