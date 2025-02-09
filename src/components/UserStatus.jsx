const UserStatus = ({ isAdmin, isLoggedIn }) => {
  return (
    <div>
      <p>
        {isAdmin && isLoggedIn
          ? "User is logged in as an Admin"
          : isAdmin && !isLoggedIn
          ? "Admin privilegaes exist, but the user is not logged in"
          : !isAdmin && isLoggedIn
          ? "user is Logged in as a regular user"
          : "User is not looged in"}
      </p>
    </div>
  );
};

export default UserStatus;
