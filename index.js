// https://xdykxnsdtkqynuixtakq.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E

// Vi begynder med at fetch data
// Så vil vi lave en funtion der tager al dataen

fetch("https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/kategorier", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E",
  },
})
  .then((res) => res.json())
  .then(showItems);

function showItems(items) {
  console.log(items);
  // Vi looper dataen og kalder funktionen showItem
  items.forEach(showItem);
}

//Laver en function for at få fat på template
function showItem(item) {
  console.log(item);
  // fanger template
  const template = document.querySelector("template").content;
  //laver en kopi
  const copy = template.cloneNode(true);

  copy.querySelector(".location_text").textContent = item.kategorier;
  copy.querySelector(".location_img").src = item.billeder;
  copy.querySelector(".location_link").href = `kategori.html?kategori=${item.kategorier}`;

  //Så kan vi appendere
  document.querySelector("main").appendChild(copy);
}
