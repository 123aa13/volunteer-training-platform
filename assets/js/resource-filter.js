document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('resource-filter');
    const cards = document.querySelectorAll('.resource-card');

    filterSelect.addEventListener('change', function() {
        const selected = this.value;
        cards.forEach(card => {
            if (selected === 'all' || card.dataset.type === selected) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});