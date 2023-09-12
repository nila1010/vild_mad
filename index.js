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
  .then((res) => res.json)
  .then(showData);

function showData(data) {
  data.forEach(showItem);
}

function showItem(item) {
    const template = 
}
