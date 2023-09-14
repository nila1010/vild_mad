// Vælger alle items med en bestemt kategori med "select" https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?select=id,navn,kategori
// Vælger items i en bestemt kategori ""=eq"  https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?kategori=eq.Svampe
// De kan kombineret kateogir=eq.Svampe&select=navn,id

const urlParams = new URLSearchParams(window.location.search);
//Landskab
const kategori = urlParams.get("kategori");
//Svampe, Urter, Buske, Tang
const produkt = urlParams.get("produkt");

fetch(`https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?select=navn,landskab,landskab2,landskab_sub1,landskab_sub2,image&kategori=eq.${produkt}&find=eq.${kategori}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(produkter) {
  produkter.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);
  copy.querySelector(".cardbillede img").src = product.image;
  copy.querySelector("h2").textContent = product.navn;
  copy.querySelector(".h2").textContent = product.navn;
  copy.querySelector(".findmig").textContent = product.landskab;
  copy.querySelector(".findmig2").textContent = product.landskab2;
  copy.querySelector(".levergodt").textContent = product.landskab_sub1;
  copy.querySelector(".levergodt2").textContent = product.landskab_sub2;
  copy.querySelector(".produktcard").addEventListener("click", flip);
  document.querySelector(".card").appendChild(copy);
}

function flip() {
  console.log("test");
  this.classList.toggle("cardarrowflip");
}
