var Label = document.getElementById("TotalClicked");
var ClicksPerClick = document.getElementById("TotalClicksPerClick");

var IncreaseValuePerClickFor2 = document.getElementById("IncreaseValuePerClickFor2Button");
var IncreaseValuePerClickFor4 = document.getElementById("IncreaseValuePerClickFor4Button");
var IncreaseValuePerClickFor8 = document.getElementById("IncreaseValuePerClickFor8Button");
var IncreaseValuePerClickFor16 = document.getElementById("IncreaseValuePerClickFor16Button");

var ResetButton = document.getElementById("ResetButton");
var ResetClicksButton = document.getElementById("ResetClicksButton");
var ResetClicksPerClickButton = document.getElementById("ResetValuePerClicks");

const OpacityValue = "0.5";

let MainValue = 0;
let ValueToIncreasePerClick = 1;

Label.innerHTML = `Total Clicks: ${MainValue}`;
ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

function checkValue() {
    if (MainValue >= 20) {
        IncreaseValuePerClickFor2.style.opacity = "1";
        IncreaseValuePerClickFor2.style.pointerEvents = "auto";
    } else {
        IncreaseValuePerClickFor2.style.opacity = OpacityValue;
        IncreaseValuePerClickFor2.style.pointerEvents = "none";
    }

    if (MainValue >= 40) {
        IncreaseValuePerClickFor4.style.opacity = "1";
        IncreaseValuePerClickFor4.style.pointerEvents = "auto";
    } else {
        IncreaseValuePerClickFor4.style.opacity = OpacityValue;
        IncreaseValuePerClickFor4.style.pointerEvents = "none";
    }

    if (MainValue >= 80) {
        IncreaseValuePerClickFor8.style.opacity = "1";
        IncreaseValuePerClickFor8.style.pointerEvents = "auto";
    } else {
        IncreaseValuePerClickFor8.style.opacity = OpacityValue;
        IncreaseValuePerClickFor8.style.pointerEvents = "none";
    }

    if (MainValue >= 160) {
        IncreaseValuePerClickFor16.style.opacity = "1";
        IncreaseValuePerClickFor16.style.pointerEvents = "auto";
    } else {
        IncreaseValuePerClickFor16.style.opacity = OpacityValue;
        IncreaseValuePerClickFor16.style.pointerEvents = "none";
    }

    if (MainValue == 0 && ValueToIncreasePerClick == 1) {
        ResetButton.style.opacity = OpacityValue;
        ResetButton.style.pointerEvents = "none";

        ResetClicksButton.style.opacity = OpacityValue;
        ResetClicksButton.style.pointerEvents = "none"

        ResetClicksPerClickButton.style.opacity = OpacityValue;
        ResetClicksPerClickButton.style.pointerEvents = "none";
    } else {
        ResetButton.style.opacity = "1";
        ResetButton.style.pointerEvents = "auto";

        ResetClicksButton.style.opacity = "1";
        ResetClicksButton.style.pointerEvents = "auto"

        ResetClicksPerClickButton.style.opacity = "1";
        ResetClicksPerClickButton.style.pointerEvents = "auto";
    }
}

function increaseValue() {
    MainValue += ValueToIncreasePerClick;
    Label.innerHTML = `Total Clicks: ${MainValue}`;
    ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

    checkValue();
}

function increaseValuePerClickFor2() {
    if (MainValue >= 20) {
        MainValue -= 20;
        ValueToIncreasePerClick += 2;
    
        Label.innerHTML = `Total Clicks: ${MainValue}`;
        ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

        checkValue();
    }
}

function increaseValuePerClickFor4() {
    if (MainValue >= 40) {
        MainValue -= 40;
        ValueToIncreasePerClick += 4;
    
        Label.innerHTML = `Total Clicks: ${MainValue}`;
        ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

        checkValue();
    }
}

function increaseValuePerClickFor8() {
    if (MainValue >= 80) {
        MainValue -= 80;
        ValueToIncreasePerClick += 8;

        Label.innerHTML = `Total Clicks: ${MainValue}`;
        ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

        checkValue();
    }
}

function increaseValuePerClickFor16() {
    if (MainValue >= 160) {
        MainValue -= 160;
        ValueToIncreasePerClick += 16

        Label.innerHTML = `Total Clicks: ${MainValue}`;
        ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

        checkValue();
    }
}

function ResetAllValue() {
    checkValue();

    var Ask = confirm("Are you sure? (If you click 'Ok' you will lose all progress)");

    if (Ask) {
        MainValue = 0;
        ValueToIncreasePerClick = 1;
    }

    Label.innerHTML = `Total Clicks: ${MainValue}`;
    ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

    checkValue();
}

function ResetClicksValue() {
    checkValue();

    var Ask = confirm("Are you sure? (If you click 'Ok' you will lose all Clicks)");

    if (Ask) {
        MainValue = 0;
    }

    Label.innerHTML = `Total Clicks: ${MainValue}`;
    ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

    checkValue();
}

function ResetValuePerClicks() {
    checkValue();

    var Ask = confirm("Are you sure? (If you click 'Ok' you will lose all Clicks Per Click Value)");

    if (Ask) {
        ValueToIncreasePerClick = 1;
    }

    Label.innerHTML = `Total Clicks: ${MainValue}`;
    ClicksPerClick.innerHTML = `Clicks Per Click: ${ValueToIncreasePerClick}`

    checkValue();
}

checkValue();