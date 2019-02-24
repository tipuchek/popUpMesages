let blockPopUp = document.createElement('div'); //создаем елемент



function popupmessage(message = 'Ваше сообщение', border = '1px solid white', colorText = 'white', colorBackgorund = 'rgba(43, 42, 40, 0.616)', timeRemove = 4000) {

    if (!document.querySelector('.block_popUp')) { // проверяем на наличие елемента на странице, если нет то создаем и добавляем сообщение
        blockPopUp.classList.add('block_popUp');
        document.querySelector('body').appendChild(blockPopUp); //добавляем родительский блок для сообщений.
        addPopUpMessage(message, border, colorText, colorBackgorund, timeRemove); // создаем и добавляем сообщения

    } else {

        addPopUpMessage(message, border, colorText, colorBackgorund, timeRemove); // создаем и добавляем сообщения

    }
}

//функция создает сообщения.
function addPopUpMessage(message, border, colorText, colorBackgorund, timeRemove) {
    let b = 10000;
    let popUpMessage = document.createElement('p');
    popUpMessage.classList.add('popUp_message');
    popUpMessage.innerText = message;
    popUpMessage.style.border = border;
    popUpMessage.style.background = colorBackgorund;
    popUpMessage.style.color = colorText;
    popUpMessage.style.animationDelay = `${timeRemove/1000-2}s`;
    popUpMessage.style.border = `1px solid ${border}`;
    document.querySelector('.block_popUp').appendChild(popUpMessage); //добавляем сообщения

    setTimeout(function() {
        popUpMessage.style.transform = 'scale(1)';
    }, timeRemove - timeRemove);


    //  удаляем сообщение через время.
    setTimeout(function() {

        document.querySelector('.block_popUp').removeChild(popUpMessage);
        if (!document.querySelector('.popUp_message')) { // проверяем, если сообщений нет то удаляем родительский елемент.
            document.querySelector('body').removeChild(blockPopUp);
        }
    }, timeRemove)


}