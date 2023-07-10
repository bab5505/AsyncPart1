const favNumber = 5;
const baseURL = "http://numbersapi.com";

// 1.
async function part1() {
  try {
    const response = await fetch(`${baseURL}/${favNumber}?json`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
part1();

// 2.
const favNumbers = [7, 11, 22];
async function part2() {
  try {
    const response = await fetch(`${baseURL}/${favNumbers.join(",")}?json`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
part2();

// 3.
async function part3() {
  try {
    const responses = await Promise.all(
      Array.from({ length: 4 }, () => fetch(`${baseURL}/${favNumber}?json`))
    );
    const facts = await Promise.all(responses.map(response => response.json()));
    facts.forEach(data => {
      const paragraph = document.createElement('p');
      paragraph.textContent = data.text;
      document.body.appendChild(paragraph);
    });
  } catch (error) {
    console.error(error);
  }
}
part3();
