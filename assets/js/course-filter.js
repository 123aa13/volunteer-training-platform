// 等待页面加载完成后再执行代码（避免找不到页面元素）
document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取页面中的筛选下拉框（通过id="course-filter"定位）
    const filterSelect = document.getElementById('course-filter');
    
    // 2. 获取所有课程卡片（通过class="course-card"定位，所有卡片都有这个class）
    const courseCards = document.querySelectorAll('.course-card');

    // 3. 给下拉框添加“选择变化”事件：当用户选不同分类时，触发筛选
    filterSelect.addEventListener('change', function() {
        // 获取用户选中的分类值（比如选“国学经典”时，值是"guoxue"）
        const selectedType = this.value;

        // 4. 遍历所有课程卡片，判断是否显示
        courseCards.forEach(card => {
            // 获取当前卡片的分类（在HTML中通过data-type属性定义，比如data-type="guoxue"）
            const cardType = card.dataset.type;
            
            // 5. 筛选逻辑：
            // - 如果选“全部课程”（值为"all"），则显示所有卡片
            // - 否则，只显示分类匹配的卡片
            if (selectedType === 'all' || cardType === selectedType) {
                card.style.display = 'block'; // 显示卡片
            } else {
                card.style.display = 'none'; // 隐藏卡片
            }
        });
    });
});