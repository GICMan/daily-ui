import { Component, useState } from "react";

import * as React from "react";

import "../scss/Payment.scss";

import scanIcon from "../assets/payment-scan-card.svg";
import mastercard from "../assets/payment-mastercard.svg";

const Payment: React.FunctionComponent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  function handleNumber(value: string) {
    let v: string = value.replace(/\s+/g, "").replace(/[^-0-9]/gi, ""); //remove spaces and non-digits
    let parts: RegExpMatchArray = v.match(/.{1,4}/g); // split up into groups of 4 numbers
    setNumber(parts ? parts.slice(0, 4).join(" ") : "");
  }

  function handleDate(value: string) {
    let v: string = value.replace(/\s+/g, "").replace(/[^-0-9]/gi, ""); //remove spaces and non-digits
    let parts: RegExpMatchArray = v.match(/.{1,2}/g); //split into two groups of two numbers

    setDate(parts ? parts.slice(0, 2).join("/") : "");
  }

  function reset() {
    setNumber("");
    setDate("");
    setName("");
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <button className="back">
          <i className="fas fa-chevron-left"></i> Back To Cart
        </button>
        <h3 className="title">Enter Card Information</h3>
        <div className="card">
          {name || number || date ? (
            <React.Fragment>
              <h3 className="number">{number}</h3>
              <div className="info-container">
                <span className="name">{name}</span>
                <span className="date">{date}</span>
              </div>
              <img className="mastercard" src={mastercard} />
            </React.Fragment>
          ) : (
            <img className="scan-icon" src={scanIcon} />
          )}
        </div>
        <div className="shadow"></div>
        <button className="re-scan" onClick={e => reset()}>
          Scan Card
        </button>
        <form className="form-container">
          <div className="name form-section">
            <label>Card Holder Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="i.e. John Doe"
            ></input>
            <div className="bar"></div>
          </div>
          <div className="number form-section">
            <label>Card Number</label>
            <input
              type="text"
              value={number}
              onChange={e => handleNumber(e.target.value)}
              placeholder="1234 1234 1234 1234"
            ></input>
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
              <input
                type="text"
                placeholder="00/00"
                value={date}
                onChange={e => handleDate(e.target.value)}
              ></input>
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
