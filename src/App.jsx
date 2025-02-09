import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <>
      <Weather />
      <UserStatus isAdmin={true} isLoggedIn={true} />
      <Greeting />
    </>
  );
};

export default App;
