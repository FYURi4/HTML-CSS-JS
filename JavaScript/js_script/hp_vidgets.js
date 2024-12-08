// Create the main container for the UI
var hp_mico_container = document.createElement("div");
hp_mico_container.id = "hp_mico_container";
hp_mico_container.onclick = function(event) {
    event.stopPropagation();
};

// Create additional containers
var hp_mico_container_mico_two = document.createElement("div");
hp_mico_container_mico_two.id = "hp_mico_container_mico_two";
hp_mico_container_mico_two.onclick = function(event) {
    event.stopPropagation();
};

var hp_mico_container_mico = document.createElement("div");
hp_mico_container_mico.className = "hp_mico_container_mico";

var hp_mico_container_layer = document.createElement("div");
hp_mico_container_layer.className = "hp_mico_container_layer";

// Create buttons
function createButton(className, backgroundImage, textContent1, textContent2, top, left, color) {
    var button = document.createElement("button");
    button.className = className;
    button.style.backgroundImage = `url(${backgroundImage})`;
    button.style.backgroundSize = 'contain';
    button.style.backgroundRepeat = 'no-repeat';
    button.style.backgroundPosition = 'center';
    button.style.backgroundColor = color;
    button.style.position = 'absolute';
    button.style.top = top;
    button.style.left = left;

    var span1 = document.createElement("span");
    span1.style.color = '#ffffff';
    span1.style.fontSize = '14px';
    span1.style.position = 'absolute';
    span1.style.top = '19px';
    span1.style.left = '55px';
    span1.textContent = textContent1;

    var span2 = document.createElement("span");
    span2.style.color = '#ffffff';
    span2.style.fontSize = '14px';
    span2.style.position = 'absolute';
    span2.style.top = '32px';
    span2.style.left = '55px';
    span2.textContent = textContent2;

    button.appendChild(span1);
    button.appendChild(span2);
    button.onclick = function(event) {
        event.stopPropagation();
    };

    return button;
}

// Create specific buttons
var hp_button_scroller = document.createElement("button");
hp_button_scroller.className = "hp_button_scroller";
hp_button_scroller.style.backgroundColor = '#e7e7e79a';
hp_button_scroller.onclick = function(event) {
    event.stopPropagation();
};

var hp_button_scroller1 = document.createElement("button");
hp_button_scroller1.className = "hp_button_scroller";
hp_button_scroller1.style.left = '200px';
hp_button_scroller1.onclick = function(event) {
    event.stopPropagation();
};

var hp_button_tuch = createButton("hp_button_tuch", "image/Enthernet.png", "Goida", "Вкл.", '92px', '0px', '#28b0ff86');
var hp_button_tuch1 = createButton("hp_button_tuch", "image/Wifi.png", "Wi-Fi", "Откл.", '0px', '0px', '#b4b4b486');

// Create info container for alarms
var hp_mico_container_info = document.createElement("div");
hp_mico_container_info.id = "hp_mico_container_info";
hp_mico_container_info.onclick = function(event) {
    event.stopPropagation();
};

// Sample alarm info (currently empty)
var alarm_info = []; // Populate this array with alarm objects

alarm_info.forEach(function(item) {
    var infoButton = document.createElement("button");
    infoButton.className = "hp_mico_container_info_button";
    infoButton.onclick = function(event) {
        event.stopPropagation();
    };

    var infoButtonName = document.createElement("div");
    infoButtonName.className = "info_button_name_span";
    infoButtonName.textContent = item.name;

    var infoButtonDescription = document.createElement("div");
    infoButtonDescription.className = "info_button_description_span";
    infoButtonDescription.textContent = item.description;

    var infoButtonTime = document.createElement("div");
    infoButtonTime.className = "info_button_time_span";
    infoButtonTime.textContent = item.time_send || '01:19'; // Default time if not provided

    infoButton.appendChild(infoButtonName);
    infoButton.appendChild(infoButtonDescription);
    infoButton.appendChild(infoButtonTime);
    hp_mico_container_info.appendChild(infoButton);
});

// Append all components to the main container
hp_mico_container.appendChild(hp_mico_container_mico);
hp_mico_container.appendChild(hp_mico_container_layer);
hp_mico_container.appendChild(hp_button_scroller);
hp_mico_container.appendChild(hp_button_scroller1);
hp_mico_container.appendChild(hp_button_tuch);
hp_mico_container.appendChild(hp_button_tuch1);

// Append containers to the high panel
document.querySelector('.high_panel').appendChild(hp_mico_container_info);
document.querySelector('.high_panel').appendChild(hp_mico_container);
document.querySelector('.high_panel').appendChild(hp_mico_container_mico_two);

// Button circle configuration
var hp_button_circle = [
    { 'name': 'Bluetooth', 'icon_circle': 'image/Bluethooth.png' },
    { 'name': 'GPay', 'icon_circle': 'image/GPay.png' },
    { 'name': 'Фонарик', 'icon_circle': 'image/Light.png' },
    { 'name': 'Автояркость', 'icon_circle': 'image/AutoLight.png' },
    { 'name': 'Без звука', 'icon_circle': 'image/No_sing.png' },
    { 'name': 'Снимок экрана', 'icon_circle': 'image/Screen.png' },
    { 'name': 'Режим полета', 'icon_circle': 'image/Flight.png' },
    { 'name': 'Местоположение', 'icon_circle': 'image/GPS.png' },
    { 'name': 'Сканер', 'icon_circle': 'image/Scaner.png' },
    { 'name': 'Режим чтения', 'icon_circle': 'image/Eye_ride.png' },
    { 'name': 'Не беспокоить', 'icon_circle': '' },
    { 'name': 'Модуль NFC', 'icon_circle': '' },
    { 'name': 'Dolby Atmos', 'icon_circle': '' },
    { 'name': 'Вибрация', 'icon_circle': '' }
];

// Function to create button circles
function createCircleButtons(items, container) {
    items.forEach(function(item) {
        var buttonContainer = document.createElement("div");
        buttonContainer.className = "hp_button_circle_tuch_container";

        var button = document.createElement("button");
        button.className = "hp_button_circle_tuch";
        button.style.backgroundImage = `url(${item.icon_circle})`;

        var span = document.createElement("span");
        span.className = "button_label";
        span.textContent = item.name;

        buttonContainer.appendChild(button);
        buttonContainer.appendChild(span);
        container.appendChild(buttonContainer);
    });
}

// Create buttons for the first ten items and remaining items
createCircleButtons(hp_button_circle.slice(0, 10), hp_mico_container_mico);
createCircleButtons(hp_button_circle.slice(10), hp_mico_container_mico_two);

// Mouse event handling for swiping between containers
const container = document.getElementById('hp_mico_container');
const container_info = document.getElementById('hp_mico_container_info');
const container2 = document.getElementById('hp_mico_container_mico_two');
let isMouseDown = false;
let startX = 0;

function handleMouseDown(event) {
    isMouseDown = true;
    startX = event.clientX;
    event.stopPropagation();
}

function handleMouseUp(event) {
    isMouseDown = false;
    event.stopPropagation();
}

function handleMouseLeave(event) {
    isMouseDown = false;
    event.stopPropagation();
}

function handleMouseMove(event) {
    if (!isMouseDown) return;

    const deltaX = event.clientX - startX;

    if (container.style.display === 'block' && deltaX <= -200) {
        container_info.style.display = 'block';
        container.style.display = 'none';
    } else if (container_info.style.display === 'block' && deltaX >= 200) {
        container.style.display = 'block';
        container_info.style.display = 'none';
    } else if (container.style.display === 'block' && deltaX >= 200) {
        container.style.display = 'none';
        container2.style.display = 'flex'; // Убедитесь, что это условие выполняется
    } else if (container2.style.display === 'flex' && deltaX <= -200) {
        container.style.display = 'block';
        container2.style.display = 'none';
    }
}

// Attach event listeners for mouse actions
container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseup', handleMouseUp);
container.addEventListener('mouseleave', handleMouseLeave);
container.addEventListener('mousemove', handleMouseMove);

container_info.addEventListener('mousedown', handleMouseDown);
container_info.addEventListener('mouseup', handleMouseUp);
container_info.addEventListener('mouseleave', handleMouseLeave);
container_info.addEventListener('mousemove', handleMouseMove);

container2.addEventListener('mousedown', handleMouseDown);
container2.addEventListener('mouseup', handleMouseUp);
container2.addEventListener('mouseleave', handleMouseLeave);
container2.addEventListener('mousemove', handleMouseMove);
