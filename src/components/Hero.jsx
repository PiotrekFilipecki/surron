import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          {/* <img className="bg-shape" src={BgShape} alt="bg-shape" /> */}
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Nothing fun to do today?</h4>
              <h1>
                Let's <span>joyride</span> with us!
              </h1>
              <p>
                Rent surron of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            {/* <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            /> */}
          </div>
          <video
      autoPlay
      playsInline
      loop
      muted
      className="absolute z-10 w-full h-full object-cover"
    >
      <source
        src="https://lxxritrdxhhwdqdiutme.supabase.co/storage/v1/object/sign/assets/pexels-musko-io-8518105%20(1440p).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvcGV4ZWxzLW11c2tvLWlvLTg1MTgxMDUgKDE0NDBwKS5tcDQiLCJpYXQiOjE3MTA0NzUwNTEsImV4cCI6MTc0MjAxMTA1MX0.J8AGFrQ92urvVOXH-5pB86-zy7bEwYyghILOBTNUsQI&t=2024-03-15T03%3A57%3A31.797Z"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
