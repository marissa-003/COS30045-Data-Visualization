const accordionTitles = document.querySelectorAll(".accordionTitle");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        if (accordionTitle.classList.contains("is-open")) {
            accordionTitle.classList.remove("is-open");
        } else {
            const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");

            accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                accordionTitleWithIsOpen.classList.remove("is-open");
            });
            accordionTitle.classList.add("is-open");
        }
    });
});

function powerUsage () {
     let x = document.getElementById("apu").value;
}

function hoursUse () {
     let x = document.getElementById("ahu").value;
}

function electricityPrice () {
     let x = document.getElementById("eprice").value;
}

function calculateResults () {
    let powerUsage = document.getElementById("apu").value;
    let hoursUse = document.getElementById("ahu").value;
    let electricityPrice = document.getElementById("eprice").value;
let message;

if (isNaN(powerUsage) || isNaN(hoursUse)) {
    message = "Please enter both Appliance power usage (in watts) and Average hours of use per day values.";
} else {
    message = "";
}


document.getElementById("dailyEnergy").innerHTML = dailyEnergyConsumption(powerUsage,hoursUse);

document.getElementById("monthlyEnergy").innerHTML = monthlyEnergyConsumption(powerUsage,hoursUse);

document.getElementById("yearlyEnergy").innerHTML = yearlyEnergyConsumption(powerUsage,hoursUse);

document.getElementById("estMonthly").innerHTML = estCostOverTimeMonthly (powerUsage, hoursUse, electricityPrice);

document.getElementById("estYearly").innerHTML = estCostOverTimeMonthly (powerUsage, hoursUse, electricityPrice);
}

function dailyEnergyConsumption () {
    document.getElementById("dailyEnergy").innerHTML = (powerUsage() * hoursUse()) / 1000;

    if (isNaN(powerUsage) || isNaN(hoursUse)) {
    message = "Please enter both Appliance power usage (in watts) and Average hours of use per day values.";
} else {
    message = ""; }

}

function monthlyEnergyConsumption () {
    document.getElementById("monthlyEnergy").innerHTML = (powerUsage() * hoursUse() * 30) / 1000;
}

function yearlyEnergyConsumption () {
    document.getElementById("yearlyEnergy").innerHTML = (powerUsage() * hoursUse() * 365) / 1000;
}

function estCostOverTimeMonthly () {
    document.getElementById("estMonthly").innerHTML = monthlyEnergyConsumption() * electricityPrice();
}

function estCostOverTimeYearly () {
    document.getElementById("estYearly").innerHTML = yearlyEnergyConsumption() * electricityPrice();
}