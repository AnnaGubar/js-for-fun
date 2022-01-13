function saySomething(message = "goodbye", whisper = false) {
  if (whisper) {
    console.log(`%c${message}`, "font-size:25px");
  } else {
    console.log(`%c${message} 🔅`, "color:grey; font-size:15px");
  }
}

saySomething("hello", true);
saySomething();

console.log("------------------------------------");

console.group("Strings' methods");
console.log("💜".repeat(10));
console.log("this is a string".startsWith("this")); //true
console.groupEnd;

console.log("------------------------------------");

console.log(+"1" + "1" + "2"); //112
console.log("a" - "b" + "2"); //NaN2
console.log("a" - "b" + 2); //NaN

console.log("------------------------------------");
