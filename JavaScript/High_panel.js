function toggleHighPanel() {
    var highPanel = document.querySelector('.high_panel');
    var dateDisplay = document.getElementById("dateDisplay");
    var clock = document.getElementById("clock");

    // Проверяем текущее состояние панели
    if (highPanel.style.height === '578px') {
        // Закрытие панели
        highPanel.style.borderRadius = '25px 25px 0px 0px'; 
        highPanel.style.height = '23px';
        // Настройка часов
        clock.style.top = "0px"; 
        clock.style.left = "26px"; 
        clock.style.fontSize = "20px"; 
        // Скрыть дату
        dateDisplay.style.display = 'none';

    } else {
        // Открытие панели
        highPanel.style.borderRadius = '25px'; 
        highPanel.style.height = '578px'; // Открыть панель на весь экран
        // Настройка часов
        clock.style.top = "30px"; 
        clock.style.left = "30px"; 
        clock.style.fontSize = "43px"; 
        // Показать дату
        dateDisplay.style.display = 'block';
    }
}
