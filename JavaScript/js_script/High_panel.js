function toggleHighPanel() {
    var highPanel = document.querySelector('.high_panel');
    var hpInfo = document.querySelector('.hp_info');
    var dateDisplay = document.getElementById("dateDisplay");
    var hpMicoContainer = document.getElementById("hp_mico_container");
    var hpMicoContainerMicoTwo = document.getElementById("hp_mico_container_mico_two");
    var clock = document.getElementById("clock");

    // Проверяем текущее состояние панели
    if (highPanel.style.height === '578px') {
        // Закрытие панели
        highPanel.style.borderRadius = '25px 25px 0px 0px'; 
        highPanel.style.height = '23px';
        hpInfo.style.top = "4px";
        // Настройка часов
        clock.style.top = "1px"; 
        clock.style.left = "26px"; 
        clock.style.fontSize = "20px"; 
        // Скрыть дату
        dateDisplay.style.display = 'none';
        hpMicoContainer.style.display = 'none';
        hp_mico_container_info.style.display = 'none';
        hpMicoContainerMicoTwo.style.display = 'none';

    } else {
        // Открытие панели
        highPanel.style.borderRadius = '25px'; 
        highPanel.style.height = '578px'; // Открыть панель на весь экран
        hpInfo.style.top = "20px";
        // Настройка часов
        clock.style.top = "40px"; 
        clock.style.left = "30px"; 
        clock.style.fontSize = "43px"; 
        // Показать дату
        dateDisplay.style.display = 'block';
        hpMicoContainer.style.display = 'block';
    }
}
