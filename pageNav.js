function goTo(page) {
    // The pages that you can be sent to
    var resource = "";
    
    switch (page) {
case "table":
    resource = "https://sammygulp.github.io/Interactive-Chemistry-Project/pTable";
break;
case "journal":
    resource = "https://sammygulp.github.io/Interactive-Chemistry-Project/journal";
break;
case "exps":
    resource = "https://sammygulp.github.io/Interactive-Chemistry-Project/exps";
break;
default:
    resource = "https://sammygulp.github.io/Interactive-Chemistry-Project/pTable";
break;
    
    //Should replace the site with another.
    window.open(resource, "_parent");
}
}