import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import { useState, useEffect } from "react";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { UserRoleContext, UserRoleContextConsumer } from "./utils/contextApi";
const { useContext } = React;
function App() {
  const [api, setApi] = useState();
  const [apiReady, setApiReady] = useState(false);
  const roleContext = useContext(UserRoleContext);
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
  const provider = new WsProvider("ws://127.0.0.1:9944");
  useEffect(() => {
    

    ApiPromise.create({ provider })
      .then((api) => {
        setApi(api);
        const updateContext = roleContext.updateContext;
        updateContext({ apiData: api });
        api.isReady.then(() => setApiReady(true));
      })
      .catch((err) => console.log(err));

    // set the context when apiReady is true
   
  }, []);

  return (
    <UserRoleContextConsumer>
      {(value) =>
        <Router>
          <Routes>
            <Route path="/" element={<ContactPage provider={provider} />} />
          </Routes>
        </Router>
      }
    </UserRoleContextConsumer>
  );
}

export default App;
