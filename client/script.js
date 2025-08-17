const fromOption = document.getElementById("fromCurrency");
const toOption = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const button = document.getElementById("button");
const result = document.getElementById("result");

async function callApi() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromOption.value,
        to: toOption.value,
        value: amount.value,
      }),
    });

    const data = await response.json();

    return [data, response.status];
  } catch (e) {
    console.log(e);
  }
}

button.addEventListener("click", async (e) => {
  e.preventDefault();

  const response = await callApi();
  if (response[1] > 399) {
    result.style.color = "red";
    result.innerText = response[0].message;
    result.style.fontSize = "18px";
  } else {
    result.style.color = "green";
    result.innerText = response[0].result.toFixed(2);
    result.style.fontSize = "45px";
  }
});
