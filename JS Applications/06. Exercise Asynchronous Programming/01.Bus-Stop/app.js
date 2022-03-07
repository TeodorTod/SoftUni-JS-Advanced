async function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const buses = document.getElementById("buses");
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId} `;

    try {
        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error("ID not found");
        }

        const data = await res.json();
        document.getElementById("stopName").textContent = data.name;
        buses.replaceChildren();
        for (let el of Object.entries(data.buses)) {
            let liEl = document.createElement("li");
            liEl.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
            buses.appendChild(liEl);
            // console.log(`Bus ${el[0]} arrives in ${el[1]} minutes`);
        }
    } catch (error) {
        document.getElementById("stopName").textContent = 'Error';
    }
}