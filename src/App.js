import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import { useState, useEffect } from "react";
import { WsProvider, ApiPromise } from "@polkadot/api";

function App() {
  const [api, setApi] = useState();
  const [apiReady, setApiReady] = useState(false);

  // You can use this function to get the data from state
  // const [chain, nodeName, nodeVersion] = await Promise.all([
  //   api.rpc.system.chain(),
  //   api.rpc.system.name(),
  //   api.rpc.system.version(),
  // ]);

  // The following can be implemented in the ContactForm page
  // const [chainData, setChainData] = useState({
  //   chainName: "",
  //   nodeName: "",
  //   nodeVersion: "",
  // });

  // setChainData({
  //   chainName: `${chain}`,
  //   nodeName: `${nodeName}`,
  //   nodeVersion: `${nodeVersion}`,
  // });

  useEffect(() => {
    const provider = new WsProvider("ws://127.0.0.1:9944");

    ApiPromise.create({ provider })
      .then((api) => {
        setApi(api);
      })
      .catch((err) => console.log(err));

    // set the context when apiReady is true
    api.isReady.then(() => setApiReady(true));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage provider={provider} />} />
      </Routes>
    </Router>
  );
}

export default App;
