function toggleHighPanel() {
    var highPanel = document.querySelector('.high_panel');
    var dateDisplay = document.getElementById("dateDisplay"); // Получаем элемент даты
    var clock = document.getElementById("clock");
    var hpAlarmContainer = document.getElementById("hp_alarm_container");

    // Проверяем текущее состояние панели
    if (highPanel.style.height === '578px') {
        // Закрытие панели
        highPanel.style.borderRadius = '25px 25px 0px 0px'; 
        highPanel.style.height = '23px'; // Закрыть панель
        // Настройка часов
        clock.style.top = "0px"; 
        clock.style.left = "26px"; 
        clock.style.fontSize = "20px"; 
        // Скрыть дату
        dateDisplay.style.display = 'none';
        hpAlarmContainer.style.display = 'none';
    } else {
        // Открытие панели
        highPanel.style.borderRadius = '25px'; 
        highPanel.style.height = '578px'; // Открыть панель на весь экран
        highPanel.style.backdropFilter = 'blur(5px)';
        // Настройка часов
        clock.style.top = "30px"; 
        clock.style.left = "30px"; 
        clock.style.fontSize = "43px"; 
        // Показать дату
        dateDisplay.style.display = 'block';
        hpAlarmContainer.style.display = 'block';
    }
}
