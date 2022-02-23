const formRef = document.querySelector(".fun-form");

formRef.addEventListener("submit", reverseInputValueHandler);

function reverseInputValueHandler(e) {
  e.preventDefault();

  let inputValue = e.currentTarget.input;
  let reversedInputValue = inputValue.value.split("").reverse().join('');

  console.log('entered value:',inputValue.value);

  inputValue.value = reversedInputValue;

  console.log('reversed value:',inputValue.value);

  // const x = setTimeout(() => {
  //   console.log(555)
  //   inputRef.innerHTML = reversedInputValue}, 1000)
}