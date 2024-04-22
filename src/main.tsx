import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import { HashRouter } from "react-router-dom";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<StrictMode>
		<TonConnectUIProvider
			manifestUrl="https://devxmone.github.io/ton-configs/tonconnect-manifest.json"
			uiPreferences={{ theme: THEME.DARK }}
			walletsListConfiguration={{
				includeWallets: [
					{
						appName: "safepalwallet",
						name: "SafePal",
						imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
						aboutUrl: "https://www.safepal.com/download",
						jsBridgeKey: "safepalwallet",
						platforms: ["ios", "android", "chrome", "firefox"],
					},
					{
						appName: "tonwallet",
						name: "TON Wallet",
						imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
						aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
						universalLink: "https://wallet.ton.org/ton-connect",
						jsBridgeKey: "tonwallet",
						bridgeUrl: "https://bridge.tonapi.io/bridge",
						platforms: ["chrome", "android"],
					},
				],
			}}
			actionsConfiguration={{
				twaReturnUrl: "https://t.me/DemoDappWithTonConnectBot/demo",
			}}
		>
			<FixedGlobalStyle />
			<ThemeProvider>
				<ThemedGlobalStyle />
				<HashRouter>
					<App />
				</HashRouter>
			</ThemeProvider>
		</TonConnectUIProvider>
	</StrictMode>
);
