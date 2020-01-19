
define('addLayer.js',
async function addServiceLayer(){
    var lyrUrl = await document.getElementById("inBox").value;

    console.log("Text value:", lyrUrl);
    fl2 = new featurelayer({
        url:  lyrUrl,
        outFields: ["*"]
    })
    
    map1.add(fl2);
    
})