import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();


export const API = publicRuntimeConfig.PRODUCTION ? '' : 'http://localhost:8000';
export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;


export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;