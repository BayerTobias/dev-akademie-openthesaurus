async function getData() {
  let query = document.getElementById("search-input").value;
  let url = `https://www.openthesaurus.de/synonyme/${query}?q=test&format=application/json`;
  let response = await fetch(url);
  let responseJson = await response.json();
  const synsets = responseJson.synsets;
  renderResponse(synsets);
  console.log(synsets[0]);
}

function renderResponse(synsets) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  for (let i = 0; i < synsets.length; i++) {
    const synset = synsets[i];
    let terms = synset.terms;
    console.log(terms[0]);
    container.innerHTML += /*html*/ `
      <h2>Synset ID:<b>${synset.id}</b></h2>
    `;
    renderTerms(terms, container);
  }
}

function renderTerms(terms, container) {
  for (let j = 0; j < terms.length; j++) {
    const term = terms[j];

    container.innerHTML += /*html*/ `
      <div>${term.term}</div>
    `;
  }
}
