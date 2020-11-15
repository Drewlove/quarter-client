import React from "react";
import Header from "../Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main class="main">
        <section class="home-page">
          <div>
            <h2 class="home-page__h2">Project the Future</h2>
            <p class="home-page__text">
              Model your business and make better decisions with fast intuitive
              P&L projections.
            </p>
          </div>
          <div class="home-page__hero-image"></div>
          <a class="home-page__user-link_register" href="/register">
            Register
          </a>
        </section>
        <section class="home-page">
          <div class="home-page__container">
            <div class="home-page__divider"></div>
            <h3 class="home-page__h3">Scheduling</h3>
            <div class="home-page__promo-image"></div>
            <p class="home-page__text">
              Evaluate how schedule changes affect your labor costs.
            </p>
          </div>
          <div class="home-page__container">
            <div class="home-page__divider"></div>
            <h3 class="home-page__h3">COGS</h3>
            <div class="home-page__promo-image"></div>
            <p class="home-page__text">
              Set your COGS % to determine profitability as sales volume
              increases
            </p>
          </div>
          <div class="home-page__container">
            <div class="home-page__divider"></div>
            <h3 class="home-page__h3">Quarterly</h3>
            <div class="home-page__promo-image"></div>
            <p class="home-page__text">
              Weekly payroll, monthly rent, and more are all accounted for in a
              4-4-5 accounting cycle.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
