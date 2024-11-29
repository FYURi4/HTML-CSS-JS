var hp_mico_container = document.createElement("div");
    hp_mico_container.id = "hp_mico_container";
    hp_mico_container.onclick = function(event) {
        event.stopPropagation();
    };

    var hp_mico_container_mico = document.createElement("div");
        hp_mico_container_mico.className = "hp_mico_container_mico";

    var hp_mico_container_layer = document.createElement("div");
        hp_mico_container_layer.className = "hp_mico_container_layer";

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

    var hp_button_tuch = document.createElement("button");
        hp_button_tuch.className = "hp_button_tuch";
        hp_button_tuch.style.top = '92px';
        hp_button_tuch.onclick = function(event) {
            event.stopPropagation();
        };

    var hp_button_tuch1 = document.createElement("button");
        hp_button_tuch1.className = "hp_button_tuch";
        hp_button_tuch1.onclick = function(event) {
            event.stopPropagation();
        };

    
hp_mico_container.appendChild(hp_mico_container_mico);
hp_mico_container.appendChild(hp_mico_container_layer);
hp_mico_container.appendChild(hp_button_scroller);
hp_mico_container.appendChild(hp_button_scroller1);
hp_mico_container.appendChild(hp_button_tuch);
hp_mico_container.appendChild(hp_button_tuch1);



document.querySelector('.high_panel').appendChild(hp_mico_container);


var hp_button_circle = [
    {
        'name': 'Bluetooth',
        'icon_circle': ''
    },
    {
        'name': 'GPay',
        'icon_circle': ''
    },
    {
        'name': 'Фонарик',
        'icon_circle': ''
    },
    {
        'name': 'Автояркость',
        'icon_circle': ''
    },
    {
        'name': 'Без звука',
        'icon_circle': ''
    },
    {
        'name': 'Снимок экрана',
    },
    {
        'name': 'Режим полета',
        'icon_circle': ''
    },
    {
        'name': 'Местоположение',
        'icon_circle': ''
    }
    
];

hp_button_circle.forEach(function(item) {
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "hp_button_circle_tuch_container";

    let isOriginalColor = true;

    var button = document.createElement("button");
    button.className = "hp_button_circle_tuch";
    button.style.backgroundImage = 'url(' + item.icon_circle + ')';
    button.style.backgroundSize = 'cover';

    button.onclick = function(event) {
        event.stopPropagation();
        if (item.link) {
            window.location.href = item.link;
        }
    };

    button.addEventListener('click', (event) => {
        if (isOriginalColor) {
            button.style.backgroundColor = '#28b0ff86';
        } else {
            button.style.backgroundColor = '#b4b4b486';
        }
        isOriginalColor = !isOriginalColor;
    });
    
    var span = document.createElement("span");
    span.className = "button_label";
    span.textContent = item.name;

    buttonContainer.appendChild(button);
    buttonContainer.appendChild(span);

    document.querySelector('.hp_mico_container_mico').appendChild(buttonContainer);

});
