// Apply styles dynamically using JavaScript
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.backgroundColor = '#f4f4f9';
document.body.style.textAlign = 'center';
document.body.style.margin = '20px';

const h1 = document.querySelector('h1');
h1.style.color = '#333';

const chartContainers = document.querySelectorAll('.chart-container');
chartContainers.forEach(container => {
    container.style.width = '90%';
    container.style.maxWidth = '700px';
    container.style.margin = '30px auto';
    container.style.padding = '20px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    container.style.backgroundColor = 'white';
});

const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [{
        data: [10, 20, 30, 25, 15],
        backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
    }]
};

const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: "Monthly Sales",
        data: [120, 190, 300, 500, 700],
        backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 2
    }]
};

const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: "Product Growth",
        data: [150, 220, 350, 460, 600],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        borderWidth: 3
    }]
};

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: 'Color Distribution',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                padding: {
                    top: 20,
                    bottom: 10
                }
            }
        }
    }
});

// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: 'Sales Growth (Monthly)',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                padding: {
                    top: 20,
                    bottom: 10
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: 'Product Growth Over Time',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                padding: {
                    top: 20,
                    bottom: 10
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});
