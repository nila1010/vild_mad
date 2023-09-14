const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("kategori");

// Denne linje bruger Fetch API til at sende en GET-anmodning til den angivne URL.
// Den henter data fra en ekstern kilde (https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?subkategori).
fetch("https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/subkategorier", {
  method: "GET",
  headers: {
    // API-nøglen sendes som en del af headeren for at godkende anmodningen.
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E",
  },
})
  // Den følgende linje konverterer svaret til JSON-format.
  .then(res => res.json())
  // Når JSON-dataen er klar, kaldes funktionen "showCategories" med dataen som argument.
  .then(showCategories);

// Denne funktion viser kategorierne i konsollen og kalder funktionen "showCategory" for hver kategori.
function showCategories(cats){
    console.log(cats);
    cats.forEach(showCategory)
}

// Denne funktion tager en kategori som argument og opretter et klon af en HTML-skabelon.
function showCategory(cat){
  const template = document.querySelector("template").content;

  const clone = template.cloneNode(true);

  // Sæt produktets navn og billedkilde
  clone.querySelector(".product-name").textContent = cat.produkter;
  clone.querySelector(".product-image").src = cat.billeder;
  clone.querySelector(".product-image").alt = cat.produkter;

  // Sæt href-attributten
  clone.querySelector(".akat").href = `produkter.html?produkt=${cat.produkter}&kategori=${category}`;

  // Tilføj den klonede kategori til DOM'en.
  document.querySelector("#categories").appendChild(clone);
}

