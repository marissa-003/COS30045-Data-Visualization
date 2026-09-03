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

let daily = document.getElementById('daily').value;
document.getElementById("dailyEnergy").innerHTML = dailyEnergyConsumption(powerUsage,hoursUse);
let monthly = document.getElementById('monthly').value;
document.getElementById("monthlyEnergy").innerHTML = monthlyEnergyConsumption(powerUsage,hoursUse);
let yearly = document.getElementById('yearly').value;
document.getElementById("yearlyEnergy").innerHTML = yearlyEnergyConsumption(powerUsage,hoursUse);
let estM = document.getElementById('estM').value;
document.getElementById("estMonthly").innerHTML = estCostOverTimeMonthly (powerUsage, hoursUse, electricityPrice);
let estY = document.getElementById('estY').value;
document.getElementById("estYearly").innerHTML = estCostOverTimeMonthly (powerUsage, hoursUse, electricityPrice);
}

function dailyEnergyConsumption (powerUsage, hoursUse) {
    return (powerUsage * hoursUse) / 1000;
}

function monthlyEnergyConsumption (powerUsage, hoursUse) {
    return (powerUsage * hoursUse * 30) / 1000;
}

function yearlyEnergyConsumption (powerUsage, hoursUse) {
    return (powerUsage * hoursUse * 365) / 1000;
}

function estCostOverTimeMonthly (powerUsage, hoursUse, electricityPrice) {
    return (monthlyEnergyConsumption(powerUsage, hoursUse)) * electricityPrice;
}

function estCostOverTimeMonthly (powerUsage, hoursUse, electricityPrice) {
    return (yearlyEnergyConsumption(powerUsage, hoursUse)) * electricityPrice;
}