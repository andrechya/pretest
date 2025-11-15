/**
 * Global Configuration for the Knowledge Center Application.
 * Berisi URL endpoint Google Apps Script untuk fetching data.
 */
const GLOBAL_CONFIG = {
  // URL Deployment GAS Anda untuk mengakses data API (Menu, Dashboard, Guidance)
  GAS_WEB_APP_URL:
    "https://script.google.com/macros/s/AKfycbwM1ncwFG4F1PPyySpwCAOmBEQyxUXPSnTQZE64kIkGXNFOLc-tQOb2ZWf3Lz1WFKk1/exec",
};

// Pastikan variabel ini tersedia secara global setelah diimpor.
window.GLOBAL_CONFIG = GLOBAL_CONFIG;
