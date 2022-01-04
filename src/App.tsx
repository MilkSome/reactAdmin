import { AuthenticatedApp } from "authenticatedApp";
import { useAuth } from "context/authContext";
import React from "react";
import { UnauthenticatedApp } from "unauthenticatedApp";

function App() {
  const { user } = useAuth();
  console.log(user, "user");
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
