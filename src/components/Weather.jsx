const Weather = () => {
  const temp = 46;

  if (temp < 15) {
    return <h1>Its Cold Outside</h1>;
  } else if (temp < 25 && temp > 15) {
    return <h1>Its nice Outside</h1>;
  } else {
    return <h1>Its hot Outside</h1>;
  }
};

export default Weather;
