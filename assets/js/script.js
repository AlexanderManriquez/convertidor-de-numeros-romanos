document.getElementById('convert-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const number = parseInt(document.getElementById('number').value);
    const output = document.getElementById('output');

    if (number === "") {
        output.textContent = "Por favor ingresa un número válido mayor a 0.";
        return;
    }

    if (number <= 0) {
        output.textContent = "Por favor ingresa un número positivo mayor a 0.";
        return;
    }

    if (number >= 4000) {
        output.textContent = "Número máximo soportado: 3999.";
        return;
    }

    output.textContent = convertToRoman(number);
});

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let roman = '';

    romanNumerals.forEach(function(item) {
        while (num >= item.value) {
            roman += item.symbol;
            num -= item.value;
        }
    });

    return roman;
}
