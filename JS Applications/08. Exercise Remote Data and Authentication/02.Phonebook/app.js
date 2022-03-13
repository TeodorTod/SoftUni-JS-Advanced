function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadEntries);
    document.getElementById("btnCreate").addEventListener("click", addEntries);
}
attachEvents();

const phonebookEntries = document.getElementById("phonebook");
const personEl = document.getElementById("person");
const phoneEl = document.getElementById("phone");
phonebookEntries.addEventListener("click", onDelete);

//ondelete function
async function onDelete(event) {
    const id = event.target.dataset.id;
    if (id !== undefined) {
        await deleteEntries(id);
        event.target.parentNode.remove();
    }
}

//add entries
async function addEntries() {
    const person = personEl.value;
    const phone = phoneEl.value;

    const result = await createEntries({
        person,
        phone
    });

    personEl.value = "";
    phoneEl.value = "";

    phonebookEntries.value += `${person}: ${phone}`;
}

//load entries
async function loadEntries() {
    const url = "http://localhost:3030/jsonstore/phonebook";

    const res = await fetch(url);
    const data = await res.json();

    phonebookEntries.replaceChildren();

    Object.values(data).forEach((el) => {
        let liEl = document.createElement("li");
        liEl.innerHTML = `${el.person}: ${el.phone} <button data-id=${el._id}>Delete</button>`;
        phonebookEntries.append(liEl);
    });
}

//create entries
async function createEntries(entries) {
    const url = "http://localhost:3030/jsonstore/phonebook";

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
    };

    const res = await fetch(url, option);
    const result = await res.json();

    return result;
}

//delete entries
async function deleteEntries(id) {
    const url = "http://localhost:3030/jsonstore/phonebook/" + id;

    const option = {
        method: "delete",
    };

    const res = await fetch(url, option);
    const result = await res.json();

    return result;
}