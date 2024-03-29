import MainImg from "../images/chooseUs/main.jpg";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                If your idea of a perfect day doesn't involve endless sunbathing or city hustle, we've got an exciting alternative. Explore the stunning Algarve on a Sur Ron, a ride that is as powerful as a dirt bike but also easier to use, safer, and good for the planet. No complicated gears, no loud noise – just you, the beautiful views, and a joy ride.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Easy Rider</h4>
                    <p>
                    Whether you're eager to discover a new passion or seeking excitement as an experienced rider, Sur Ron offers enjoyable experiences at all levels. With the assistance of our skilled guide, you'll operate the bike with confidence, ensuring a fun and safe adventure.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Less Noise</h4>
                    <p>
                    Cruise around the Algarve quietly without disturbing the peace. Sur Ron's electric power makes your journey in tune with the beauty around you.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Eco-Adventure</h4>
                    <p>
                    Sur Ron represents a commitment to a greener planet. Experience the beauty of the Algarve while leaving a minimal footprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
