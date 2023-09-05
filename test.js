// https://xdykxnsdtkqynuixtakq.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E
// Vælger alle items med en bestemt kategori med "select" https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?select=id,navn,kategori
// Vælger items i en bestemt kategori ""=eq"  https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?kategori=eq.Svampe
// De kan kombineret kateogir=eq.Svampe&select=navn,id

fetch("https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?kategori=eq.Svampe&select=navn", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach(item);
}

//function showitem(oneItem) {}
