interface NumberCardProps {
  number: number;
  text: string;
  icon: React.ReactNode;
}

const NumberCard = ({number, text, icon}: NumberCardProps) => {
  return (
    <div className="text-5xl flex gap-4">
      {icon}
      <div className="flex flex-col">
        <p className="text-3xl font-bold">+{number}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  )
}

export default NumberCard
