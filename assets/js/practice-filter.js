document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('practice-filter');
    const cards = document.querySelectorAll('.practice-card');

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