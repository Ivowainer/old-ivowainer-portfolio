interface CardStackProps {
    className?: string;
    icon: React.ReactNode;
}

const CardStack = ({ className, icon }: CardStackProps) => {
  return (
    <div className={`${className} dark:bg-gray-600  bg-gray-200 px-10 py-7 flex justify-center items-center`}> {/* dark:border dark:border-gray-400 dark:bg-gray-700 dark:text-gray-100 */}
        {icon}
    </div>
  )
}

export default CardStack