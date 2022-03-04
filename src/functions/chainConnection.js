const { WsProvider, ApiPromise } = require("@polkadot/api");

const main = async () => {
	const WS_PORT = "wss://ws.azero.dev";
	const provider = new WsProvider(WS_PORT);
	const api = await ApiPromise.create({ provider });
	const [chain, nodeName, nodeVersion] = await Promise.all([
		api.rpc.system.chain(),
		api.rpc.system.name(),
		api.rpc.system.version(),
	]);
	console.log(
		`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
	);
};
main().catch((err) => console.log(err));
