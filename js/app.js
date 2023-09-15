const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Loading
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", () => {
    // Remove the 'e' parameter, or you can keep it if you intend to use it.
    // e.preventDefault();

    convertToCelsius();

    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>converting..</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>convert</span>";
    }, 1000);
});

function convertToCelsius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} °C`;
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} °C`;
        }
    }, 1100);
}
