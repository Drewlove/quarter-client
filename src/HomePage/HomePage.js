import React from "react";
import PnlIcon from "../Assets/pnl.png";
import ScheduleIcon from "../Assets/schedule.png";
import COGSIcon from "../Assets/cogs.png";
import AccountingIcon from "../Assets/accounting.png";
import SignUpButton from "../Authentication/SignUpButton/SignUpButton";

function HomePage() {
  return (
    <>
      <main className="main main_home-page">
        <section className="home-page">
          <h2 className="home-page__h2">Quarter</h2>
          <p className="home-page__tagline">
            Model your food business with easy quarterly P&L projections.
          </p>
          <div className="home-page__container">
            <img
              className="home-page__img"
              alt="profit and loss icon"
              src={PnlIcon}
            />
            <div className="home-page__divider"></div>

            <SignUpButton optionalClass="home-page__user-link_authentication" />
          </div>
          <div className="home-page__container">
            <div className="home-page__divider"></div>
            <h3 className="home-page__h3">Scheduling</h3>
            <img
              className="home-page__img"
              alt="schedule icon"
              src={ScheduleIcon}
            />
            <p className="home-page__text">
              Evaluate how schedule changes affect labor costs.
            </p>
          </div>
          <div className="home-page__container">
            <div className="home-page__divider"></div>
            <h3 className="home-page__h3">COGS</h3>
            <img className="home-page__img" alt="COGS icon" src={COGSIcon} />
            <p className="home-page__text">
              Set a COGS % for sales categories to determine profitability.
            </p>
          </div>
          <div className="home-page__container">
            <div className="home-page__divider"></div>
            <h3 className="home-page__h3">Quarterly</h3>
            <img
              className="home-page__img"
              alt="accounting icon"
              src={AccountingIcon}
            />
            <p className="home-page__text">
              Weekly payroll, monthly rent, and more are all accounted for in a
              13 week quarterly cycle.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        Icons made by bqlqn, freepick, mangsaabguru, and srip from{" "}
        <a
          className="footer__link"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          Flaticon
        </a>
      </footer>
    </>
  );
}

export default HomePage;
