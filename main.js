const currency  = "USD";
const date_from = "20220707";
const date_to   = "20220719";

const base = new URL("https://bank.gov.ua/");
const endpoint = new URL("/NBUStatService/v1/statdirectory/exchange", base);

endpoint.searchParams.set("valcode", currency);
endpoint.searchParams.set("start", date_from);
endpoint.searchParams.set("end", date_to);
endpoint.searchParams.set("json", "");

console.log(endpoint.toString());

