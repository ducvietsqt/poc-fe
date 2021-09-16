import { version, name } from '../package.json';

export const APP_NAME = process.env.VUE_APP_NAME || name
export const APP_VERSION = process.env.VUE_APP_VERSION || version
export const EXPLORER_URL = "https://igniscan.io"
export const API_URL = process.env.VUE_APP_BASE_URL || "https://poc-roulette-api.vinaweb.app/api/v1"
export const LOCALE = process.env.VUE_APP_I18N_LOCALE || "en"
//CONTRACTs
