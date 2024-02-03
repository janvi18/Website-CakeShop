function showDetails(name, description) {
    document.getElementById('cake-name').textContent = name;
    document.getElementById('cake-description').textContent = description;
    document.getElementById('cake-details-modal').style.display = 'block';
}

function hideDetails() {
    document.getElementById('cake-details-modal').style.display = 'none';
}
