import React from "react";
import SignUpButton from "../Authentication/SignUpButton/SignUpButton";

function HomePage() {
  return (
    <>
      <main className="main main_home-page">
        <section className="home-page">
          <div>
            <h2 className="home-page__h2">Quarter</h2>
            <p className="home-page__text">
              Model your business for easy quarterly P&L projections.
            </p>
            <div className="home-page__hero-image"></div>
            <SignUpButton optionalClass="home-page__user-link_authentication" />
          </div>
          <div className="home-page__container">
            <div className="home-page__divider"></div>
            <h3 className="home-page__h3">Scheduling</h3>
            <div className="home-page__promo-image"></div>
            <p className="home-page__text">
              Evaluate how schedule changes affect your labor costs.
            </p>
          </div>
          <div className="home-page__container">
            <div className="home-page__divider"></div>
            <h3 className="home-page__h3">COGS</h3>
            <div className="home-page__promo-image"></div>
            <p className="home-page__text">
              Set your COGS % to determine profitability as sales volume
              increases.
            </p>
          </div>
          <div className="home-page__container">
            <div className="home-page__divider"></div>
            <h3 className="home-page__h3">Quarterly</h3>
            <div className="home-page__promo-image"></div>
            <p className="home-page__text">
              Weekly payroll, monthly rent, and more are all accounted for in a
              4-4-5 accounting cycle.
            </p>
          </div>
        </section>
        <footer className="footer">
          Icons made by bqlqn from{" "}
          <a
            className="footer__link"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            Flaticon
          </a>
        </footer>
      </main>
    </>
  );
}

export default HomePage;
