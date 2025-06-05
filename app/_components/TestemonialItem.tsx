import Image from "next/image";

interface TestemonialItemProps {
  title: string;
  subtitle: string;
  picture: string;
  highlight: string;
  description: string;
}

function TestemonialItem({
  title,
  subtitle,
  highlight,
  description,
  picture,
}: TestemonialItemProps) {
  return (
    <>
      <div className="flex gap-4">
        <Image
          src={picture}
          width={48}
          height={48}
          alt="photo"
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <span className="text-primary-50 text-sm">{subtitle}</span>
        </div>
      </div>
      <p className="font-semibold text-lg">{highlight}</p>
      <span className="text-primary-50">{description}</span>
    </>
  );
}

export default TestemonialItem;
