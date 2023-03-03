const people = [
  { name: "david" },
  { name: "dave" },
  { name: "desmond" },
  { name: "peter" },
  { name: "mary" },
  { name: "amy" },
  { name: "jane" },
  { name: "ben" },
  { name: "bryant" },
  { name: "lily" },
];

const listOutput = document.querySelector("#list");

function setList(group) {
  clearList();
  for (const person of group) {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    const text = document.createTextNode(person.name);
    item.appendChild(text);
    listOutput.appendChild(item);
  }
  if (group.length === 0) setNoResults();
}

function clearList() {
  while (listOutput.firstChild) {
    listOutput.removeChild(listOutput.firstChild);
  }
}

function setNoResults() {
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  const text = document.createTextNode("No results");
  item.appendChild(text);
  listOutput.appendChild(item);
}

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else {
    return -1;
  }
}

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(
      people
        .filter((person) => {
          return person.name.includes(value);
        })
        .sort((personA, personB) => {
          return (
            getRelevancy(personA.name, value) -
            getRelevancy(personB.name, value)
          );
        })
    );
  } else {
    clearList();
  }
});
