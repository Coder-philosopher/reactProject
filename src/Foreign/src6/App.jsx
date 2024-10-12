import "./App.css";
import Card from "./components/card.jsx";
//Code Reusability A PowerFull feature of React
function App6() {
  return (
    <>
      <span className="text-2xl from-neutral-900 bg-orange-500 p-2 rounded shadow-red-700">
        Europe Diaries
      </span>
      <div className="flex justify-evenly flex-wrap mt-2">
        <Card
          place="Milan"
          country="Italy"
          person="Abdullah S."
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="Madrid"
          country="Spain"
          person="Ferdinand"
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="London"
          country="UK"
          person="Leonard"
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="Berlin"
          country="Germany"
          person="Fuhrer S."
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="Moscow"
          country="Russia"
          person="Dmitri A."
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="Kiev"
          country="Ukraine"
          person="Peskov"
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="Athens"
          country="Greece"
          person="Romuscus"
          link="https://images.pexels.com/photos/27301572/pexels-photo-27301572/free-photo-of-a-black-and-white-photo-of-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          place="Oslo"
          country="Denmark"
          person="Alexander Ts."
          link="https://images.pexels.com/photos/27035492/pexels-photo-27035492/free-photo-of-black-and-white-photo-of-cows-on-a-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
      </div>
    </>
  );
}

export default App6;
