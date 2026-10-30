fetch("dane.txt")
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById("wynik").textContent = data;
    });