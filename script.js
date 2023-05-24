async function getData() {
  let url =
    "https://www.openthesaurus.de/synonyme/​search?q=test&format=application/json";
  let response = await fetch(url);
  let responseJson = await response.json();
  console.log("Response", responseJson);
}
