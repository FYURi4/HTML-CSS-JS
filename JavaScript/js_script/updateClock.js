function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    // Форматирование времени
    var time = (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes;

    // Получение дня недели, числа и месяца
    var options = { weekday: 'short', month: 'short', day: 'numeric' };
    var dateString = date.toLocaleDateString('ru-RU', options);
    
    // Объединение времени и даты
    clockDisplay = time;
    dateDisplay = dateString.charAt(0).toUpperCase() + dateString.slice(1);

    // Обновление элемента с часами
    document.getElementById("clock").innerHTML = clockDisplay;
    document.getElementById("dateDisplay").innerHTML = dateDisplay;
}

setInterval(updateClock, 1000);
