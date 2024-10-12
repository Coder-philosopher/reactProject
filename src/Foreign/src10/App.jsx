import "./App.css";
import Color from "./Color.jsx";
document.body.style.backgroundColor = "#212121";
function App10() {
  return (
    <>
      <div className="h-14 w-[98%] bg-[#5F33CC] fixed bottom-10 left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center">
        <Color Name="Violet" Hexcode="#EE82EE" />
        <Color Name="Indigo" Hexcode="#4B0082" />
        <Color Name="Blue" Hexcode="#0000FF" />
        <Color Name="Green" Hexcode="#008000" />
        <Color Name="Yellow" Hexcode="#FFFF00" />
        <Color Name="Orange" Hexcode="#FFA500" />
        <Color Name="Red" Hexcode="#FF0000" />
        <Color Name="Lavender" Hexcode="#E6E6FA" />
        <Color Name="Black" Hexcode="#000000" />
        <Color Name="Pink" Hexcode="#FFC0CB" />
        <Color Name="Olive" Hexcode="#808000" />
      </div>
    </>
  );
}

export default App10;
