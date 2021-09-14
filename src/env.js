import { version, name } from '../package.json';

export const APP_NAME = process.env.VUE_APP_NAME || name
export const APP_VERSION = process.env.VUE_APP_VERSION || version
export const NETWORK = process.env.VUE_APP_NETWORK || "testnet"
export const RPC_URL = NETWORK == 'mainnet' ? "https://mainnet.infura.io/v3/421c476531114da083b1d77d099c5b94" : 'https://rinkeby.infura.io/v3/a5b86c268be9408ea2b0cd00ae19fd42'
export const CHAIN_ID = NETWORK == 'mainnet' ? 1 : 4
export const CHAIN_NAME = NETWORK == 'mainnet' ? "Ethereum Mainnet" : 'Rinkeby Test Network'
export const CHAIN_NATIVE_CURRENCY = { name: "ETH", symbol: "ETH", decimals: 18 }
export const EXPLORER_URL = NETWORK == 'mainnet' ? "https://etherscan.io" : "https://rinkeby.etherscan.io"
export const API_URL = process.env.VUE_APP_BASE_URL || "https://poc-roulette-api.vinaweb.app/api/v1"
export const LOCALE = process.env.VUE_APP_I18N_LOCALE || "en"
//CONTRACTs
