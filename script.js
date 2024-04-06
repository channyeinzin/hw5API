fetch("https://randomuser.me/api/?results=5")
.then(response => response.json())
.then(jsonData => {
    const tbody = document.getElementById('user-data');
    jsonData.results.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${user.name.first}</td>
        <td>${user.location.city}</td>
        `;
        tbody.appendChild(tr);
    });
})
.catch(error => console.error("Fetching data failed:", error));
