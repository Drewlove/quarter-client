import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

function HomePage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <main className="main">
      <section className="home-page">
        <div>
          <h2 className="home-page__h2">Project the Future</h2>
          <p className="home-page__text">
            Model your business and make better decisions with fast intuitive
            P&L projections.
          </p>
          <div className="home-page__hero-image"></div>
          <button
            className="home-page__user-link_register"
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </button>
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
    </main>
  );
}

export default HomePage;
