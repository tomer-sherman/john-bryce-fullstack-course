
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Calculate percentages
    const total = Object.values(data).reduce((sum, val) => sum + parseFloat(val) || 0, 0);
    
    if (total === 0) {
        alert('Please enter valid numbers');
        return;
    }
    
    const percentages = {};
    
    for (const [key, value] of Object.entries(data)) {
        const pct = (parseFloat(value) / total) * 100;
        percentages[key] = Number.isFinite(pct) ? Number(pct.toFixed(2)) : 0;
    }
    
    // Update pie chart
    updatePieChart(percentages);
    
    // Display percentages in UI
    displayPercentages(percentages);
}

function updatePieChart(percentages) {
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    
    const chartData = {
        labels: Object.keys(percentages),
        datasets: [{
            data: Object.values(percentages),
            backgroundColor: colors.slice(0, Object.keys(percentages).length)
        }]
    };
    
    // Update your chart library (e.g., Chart.js)
    if (window.myChart) {
        window.myChart.data = chartData;
        window.myChart.update();
    }

    // Fallback: update CSS conic-gradient on #pie-chart
    const container = document.getElementById('pie-chart');
    if (container) {
        const keys = Object.keys(percentages);
        const values = keys.map(k => Number(percentages[k]) || 0);
        let start = 0;
        const stops = values.map((v, i) => {
            const from = start;
            const to = start + v;
            start = to;
            return `${colors[i % colors.length]} ${from}% ${to}%`;
        });
        container.style.background = `conic-gradient(${stops.join(', ')})`;
    }
}

function displayPercentages(percentages) {
    const container = document.getElementById('percentages-display');
    container.innerHTML = '';
    
    const html = Object.entries(percentages)
        .map(([key, value]) => `<p>${key}: ${value}%</p>`)
        .join('');
    
    container.innerHTML = html;
}

document.querySelector('form').addEventListener('submit', handleSubmit);