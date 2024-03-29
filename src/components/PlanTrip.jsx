import SelectCar from "../images/plan/suricon1.png";
import Contact from "../images/plan/suricon2.png";
import Drive from "../images/plan/suricon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              {/* <h3>Plan your trip now</h3> */}
              <h2>Explore the Algarve in a sustainable way
</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Powered by sun</h3>
                <p>
                  We offer a big range of surrons for all your driving needs.
                  We have the perfect surron to meet your needs
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Driver’s licence required</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Safety gear included</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of surrons
                </p>
              </div>
              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>No gearbox</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of surrons
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
