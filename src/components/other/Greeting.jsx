const Greeting = () => {
  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div className='hidden lg:inline-block ml-auto'>
      <h1 className='text-2xl font-semibold text-purple-500'>
        {getGreetingMessage()}
      </h1>
    </div>
  );
};

export default Greeting;
