(() => {
    fetch('https://localhost:8443').then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err))
})()