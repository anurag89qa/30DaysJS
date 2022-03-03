const addItem = document.querySelector(".add-items");
const itemList = document.querySelector(".items-list");
const selectAll = document.querySelector(".selectAll");

const items = JSON.parse(localStorage.getItem("items")) || [];

populateList(items, itemList);
function handleSubmit(e) {
  e.preventDefault();

  const getTextValue = this.querySelector("[name=item]").value;
  items.push({
    text: getTextValue,
    done: false,
  });
  populateList(items, itemList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function onToggleChange(e) {
  if (!e.target.matches("input") && !e.target.matches("span")) return; // skip this unless it's an input
  const el = e.target;
  const indexValue = el.dataset.index;

  if (e.target.matches("span")) {
    items.splice(indexValue, 1);
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemList);
  } else {
    items[indexValue].done = !items[indexValue].done;
    localStorage.setItem("items", JSON.stringify(items));
  }
}

function populateList(plates = [], itemList) {
  itemList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input class='checkbox-item' type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.text}</label>
          <span data-index=${i} class='delete'>🗑️</span>
        </li>
      `;
    })
    .join("");
}

function onSelectAll(e) {
  const isChecked = document.getElementsByName("selectAll")[0].checked;
  const updatedItem = items.map((i) => ({ ...i, done: !isChecked }));
  document.getElementsByName("selectAll")[0].checked = !isChecked;
  populateList(updatedItem, itemList);
}

addItem.addEventListener("submit", handleSubmit);
itemList.addEventListener("click", onToggleChange);
selectAll.addEventListener("click", onSelectAll);
