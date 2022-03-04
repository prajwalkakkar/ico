import React, { useState } from "react";
import TextField from "./TextField";
// import { chainConnection } from "../functions/chainConnection";
const { ApiPromise } = require("@polkadot/api");
const { Keyring } = require("@polkadot/keyring");

const ContactForm = (props) => {
  const { provider } = props;
  let formValueWallet;
  let formValueToken;
  const [loading, setloading] = useState(false);

  function handleChange(event) {
    formValueWallet = event.target.value;
  }
  function handleChangeOne(event) {
    formValueToken = event.target.value;
  }

  async function onClick() {
    setloading(true);
    const decimal = 10 ** 12;
    const amnt = parseInt(formValueToken) * decimal;
    const api = await ApiPromise.create({ provider });

    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version(),
    ]);

    console.log(
      `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
    );

    try {
      const keyring = new Keyring({ type: "sr25519" });
      const alice = keyring.addFromUri("//Alice");

      const transact = api.tx.balances.transfer(formValueWallet, amnt);

      const hash = await transact.signAndSend(alice);

      console.log("Transfer sent with hash", hash.toHex());
    } catch (err) {
      console.log(err);
    }
  }

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
        style={{ flexDirection: "column", alignItems: "center" }}>
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
          }}></button>
        <div
          className=" d-flex mt-5"
          style={{ justifyContent: "space-evenly" }}>
          <div style={{ marginBottom: "2em" }}>
            <TextField
              label={"Wallet Address"}
              placeholder={"Address"}
              type={"text"}
              color={"#9FA0A3"}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "2em" }}>
            <TextField
              label={"Token amount"}
              placeholder={"Amount"}
              type={"text"}
              color={"#9FA0A3"}
              onChange={handleChangeOne}
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
          onClick={onClick}>
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
