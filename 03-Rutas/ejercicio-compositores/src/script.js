export default function changeText(e) {
    // PASO 1: document.getElementById("p").textContent = e.target.value;
    document.getElementById("p").textContent = document.getElementById("text").value;
}