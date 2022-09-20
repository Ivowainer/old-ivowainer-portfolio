interface CardStackProps {
    className?: string;
    icon: React.ReactNode;
}

const CardStack = ({ className, icon }: CardStackProps) => {
  return (
    <div className={`${className} bg-gray-200 px-10 py-7 flex justify-center items-center`}>
        {icon}
    </div>
  )
}

export default CardStack