import { Component, useState } from "react";

import * as React from "react";

import "../scss/Payment.scss";

import scanIcon from "../assets/payment-scan-card.svg";
import mastercard from "../assets/payment-mastercard.svg";

const Payment: React.FunctionComponent = () => {
  return (
    <div className="payment-page">
      <div className="payment-container">
        <button className="back">
          <i className="fas fa-chevron-left"></i> Back To Cart
        </button>
        <h3 className="title">Enter Card Information</h3>
        <div className="card">
          <img className="scan-icon" src={scanIcon} />
          <img className="mastercard" src={mastercard} />
          <div className="info-container">
            <h3 className="number">1234 1234 1234 1234</h3>
            <span className="name">John Doe</span>
            <span className="date">01/01</span>
          </div>
        </div>
        <div className="shadow"></div>
        <button className="re-scan">Scan Card</button>
        <form className="form-container">
          <div className="name form-section">
            <label>Card Holder Name</label>
            <input type="text" placeholder="i.e. John Doe"></input>
            <div className="bar"></div>
          </div>
          <div className="number form-section">
            <label>Card Number</label>
            <input type="text" placeholder="1234 1234 1234 1234"></input>
            <div className="bar"></div>
          </div>
          <div className="form-section">
            <div className="cvc form-section">
              <label>CVC</label>
              <input type="text" placeholder="123"></input>
              <div className="bar"></div>
            </div>
            <div className="date">
              <label>Expiration Date</label>
              <input type="text" placeholder="00/00"></input>
              <div className="bar"></div>
            </div>
          </div>
        </form>
        <button className="confirm">Confirm Payment</button>
      </div>
    </div>
  );
};

export default Payment;
