const display = document.getElementById("display");

// Ekrana girdi ekleme işlevi
function appendToDisplay(input) {
    display.value += input;
}

// Ekranı temizleme işlevi
function clearDisplay() {
    display.value = "";
}

// Hesaplama işlevi
function calculate() {
    try {
        // eval fonksiyonu ile hesaplama
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; // Hata durumunda ekranda hata mesajı göster
    }
}
