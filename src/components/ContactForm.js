import axios from "axios";
import React, { useState } from "react";
import TextField from "./TextField";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const onClick = (event) => {
    // console.log(`address : ${address} || amount : ${amount}`);
    setLoading(true);
    axios
      .post("/chain/send-tokens", {
        account: address,
        amount,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row" style={{ padding: "3em 6em" }}>
      <div className="container header-ico text-center">
        <h1>
          <span>
            NGV <br />{" "}
          </span>
          The <span>Revolution </span>In <br /> Crypto <span>Coin</span>
        </h1>
      </div>
      <div
        className="row"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <div className="container text-center">
          <h2 style={{ fontSize: "medium", color: "#828282" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            ab soluta, sequi perferendis amet et. Aperiam nostrum fugit velit.
            Cupiditate facilis rem soluta iure sed libero dignissimos
            consectetur aspernatur inventore! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi, fugit, dicta dignissimos
            architecto quos illum doloremque rem, totam veniam aliquam alias
            perferendis explicabo? Quas, sunt officia ex alias unde aliquam?
            Necessitatibus maxime, ab soluta architecto repellat esse
            repudiandae sit dolorum exercitationem officiis non unde provident,
            laudantium ratione corrupti reprehenderit culpa quas fugit deserunt
            dicta in omnis recusandae. Veritatis, voluptatibus accusamus?
            Blanditiis, cupiditate nihil rerum nam iusto, earum veritatis amet
            mollitia iste deserunt error at quod veniam minima optio quae
            nostrum iure dicta ut molestias magni temporibus. Exercitationem
            soluta non quidem!
          </h2>
        </div>
        <div className="text-center">
          <br />
          <h2 style={{ fontSize: "medium" }}>
            Buy now and get +40% extra bonus Minimum pre-sale amount 25 Cryptic
            Coin. We accept BTC crypto-currency.
          </h2>
        </div>

        <button
          onClick={() =>
            (document.getElementById("dis").style.display = "none")
          }
          id="dis"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        ></button>
        <div
          className=" d-flex mt-5"
          style={{ justifyContent: "space-evenly" }}
        >
          <div style={{ marginBottom: "2em" }}>
            <TextField
              label={"Wallet Address"}
              placeholder={"Address"}
              type={"text"}
              value={address}
              color={"#9FA0A3"}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "2em" }}>
            <TextField
              label={"Token amount"}
              placeholder={"Amount"}
              type={"text"}
              value={amount}
              color={"#9FA0A3"}
              onChange={(e) => setAmount(e.target.value)}
              name="amount"
            />
          </div>
        </div>
        <button
          disabled={loading}
          style={{
            backgroundColor: "#0D74D7",
            borderRadius: "35px",
            color: "white",
            padding: "1em 3em",
            border: "none",
            width: "30%",
          }}
          onClick={(e) => onClick(e)}
        >
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Transfer token"
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
