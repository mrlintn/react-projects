import "./App.css";
import dentist from "./dentist.jpg";

function Home() {
  return (
    <div class="centre">
      <img src={dentist} alt="" width="400px" />
      <p>
        Here at Dentists online, we love teeth. They are our most favouritist
        things. One day, you will love your teeth as much as we do.
      </p>
    </div>
  );
}

export { Home };
