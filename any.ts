// let myFavNum: any = 5;
// myFavNum = "Divyanshi";
// console.log(myFavNum);

let _unknown: unknown;
_unknown = 5;
_unknown = true;
_unknown = "Div";

if (typeof _unknown === "string") {
  console.log("true");
} else {
  console.log("false");
}
