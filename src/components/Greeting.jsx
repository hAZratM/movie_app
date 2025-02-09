const Greeting = () => {
  const time = new Date().getHours();

  return (
    <div>
      <p>Good {time > 12 ? "Evening " : "Morning"}</p>
    </div>
  );
};

export default Greeting;
