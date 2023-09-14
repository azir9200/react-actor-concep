import Cart from "./Cart/Cart";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="card-container" >
        <div className="card" >
          <div className="card-img" >
            <img className="photo" src="https://i.ibb.co/2Mrw0Vr/handsome-man-with-glasses.jpg" alt="" />
          </div>
          <h1 className='text-4xl bg-red-400' >See Actors React</h1>

        </div>

      </div>

    </div>
  );
};

export default Home;