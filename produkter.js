document.querySelector(".cardarrow").addEventListener("click", flip);

function flip() {
  document.querySelector(".produktcard").classList.remove("cardarrowfliptilbage");
  document.querySelector(".produktcard").classList.add("cardarrowflip");
  document.querySelector(".cardarrow").removeEventListener("click", flip);
  document.querySelector(".cardarrowbagside").addEventListener("click", flipBagside);
}

function flipBagside() {
  document.querySelector(".produktcard").classList.add("cardarrowfliptilbage");
  document.querySelector(".produktcard").classList.remove("cardarrowflip");
  document.querySelector(".cardarrow").addEventListener("click", flip);
  document.querySelector(".cardarrowbagside").removeEventListener("click", flip);
}

// Vælger alle items med en bestemt kategori med "select" https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?select=id,navn,kategori
// Vælger items i en bestemt kategori ""=eq"  https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?kategori=eq.Svampe
// De kan kombineret kateogir=eq.Svampe&select=navn,id

const urlParams = new URLSearchParams(window.location.search);
const kategori = urlParams.get("kateogir");
const produkt = urlParams.get("produkt");

fetch(`https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?select=navn&landskab=eq.${kategori}&kategori=eq.${produkt}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(kats) {
  console.log(kats);
}
