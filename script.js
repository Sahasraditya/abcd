function fetchData() {
    const filter = document.getElementById('filter').value;

    fetch(`/getData?filter=${filter}`)
        .then(response => response.json())
        .then(data => {
            displayGraph(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayGraph(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Data',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
