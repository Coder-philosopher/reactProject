import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App5() {
  return (
    <UserContextProvider>
      <h1 className="text-black bg-green-600">Made with Brain Blast</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App5;
