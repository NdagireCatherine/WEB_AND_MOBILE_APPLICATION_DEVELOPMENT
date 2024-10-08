let expired = "false";
let quality = 7;
if(expired=== "false"){
    console.log("Do not use");
}else{
    if(quality> 8){
        console.log("Good quality");
    } else if(quality >= 5 && quality <= 8){
        console.log("Average Quality");
    }else if(quality < 5){
        console.log("Poor Quality")
    }
}