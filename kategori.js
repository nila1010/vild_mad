fetch("https://xdykxnsdtkqynuixtakq.supabase.co/rest/v1/data?subkategori", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWt4bnNkdGtxeW51aXh0YWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzcwMTUsImV4cCI6MjAwOTE1MzAxNX0.fjEwMgmSK8h0wye_IlwHu2uE21eB2hofndsJH0IKa3E",
  },
})
    .then(res => res.json())
    .then(showCategories)

    function showCategories(cats){
        console.log(cats);
        cats.forEach(showCategory)
    }

    function showCategory(cat){
        const template = document.querySelector("template").content;

        const clone = template.cloneNode(true);

        clone.querySelector("a").textContent=cat.category;
        clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

        document.querySelector("#categories").appendChild(clone);
    }
