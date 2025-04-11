import Lottie from "lottie-react";
import animation from "./animation.json";
import img1 from "./1.png";
import img2 from "./2.png";

function Book() {
  return (
    <div>
      <div className="book-container">
        <div className="book">
          <input type="checkbox" name="page1" id="page1" />
          <input type="checkbox" name="page2" id="page2" />
          <input type="checkbox" name="page3" id="page3" />
          <input type="checkbox" name="page4" id="page4" />
          <div className="pages">
            <div className="page1">
              <label htmlFor="page1">
                <div className="fade-target">
                  <div className="" style={{ height: "180px" }}>
                    <Lottie
                      className="d-flex justify-content-center align-items-center m-auto h-100"
                      animationData={animation}
                      loop={true}
                    />
                    <p className="text-white mt-2">Click Me :{")"}</p>
                  </div>{" "}
                </div>
              </label>
            </div>
            <div className="page2">
              <label htmlFor="page2">
                <div className="fade-target">
                  <div className="imgbd rounded">
                    <img
                      src={img1}
                      className="w-100 rounded "
                      style={{ maxWidth: "145px", height: "auto" }}
                    />
                  </div>
                  <div
                    className="text-white fw-bold text-center mb-0 mt-2 px-1"
                    style={{ lineHeight: "16px", fontSize: "12px" }}
                  >
                    I hope that in the future you will not only be one year
                    older but also become wiser
                  </div>
                </div>
              </label>
            </div>
            <div className="page3">
              <label htmlFor="page3">
                <div className="fade-target">
                  <div className="imgbd rounded">
                    <img
                      src={img2}
                      className="w-100 rounded "
                      style={{ maxWidth: "145px", height: "auto" }}
                    />
                  </div>

                  <div
                    className="text-white fw-bold text-center mb-0 mt-2 px-1"
                    style={{ lineHeight: "16px", fontSize: "12px" }}
                  >
                    May in this new age, all your dreams come true one by one.{" "}
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
