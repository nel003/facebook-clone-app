const Component = ({ active, navigate, to ,Icon }) => {
  const LineClasses = "absolute h-2 w-full -bottom-2.5 rounded-full";
  const IconClasses = "text-[1.5rem] text-gray-500 hover:text-blue-500";
  
  return <div onClick={() => navigate('/'+to)} className="relative flex justify-center p-2 hover:bg-gray-100 border-blue-700">
    <Icon className={active === to ? IconClasses+' text-blue-500' : IconClasses} />
          {/*bottom line*/}
      <div className={active === to ? LineClasses+' bg-blue-500' : LineClasses}>
      </div>
  </div>
}

export default Component;