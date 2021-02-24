function calc(e, setRangeDisplay, setDisabledInput, fastMode, setDotCount, setDotsInside, setPi, setDotCountRange, limit) {
    e.preventDefault();

    setRangeDisplay("hidden");
    setDisabledInput(true);

    removeDots();

    if (!fastMode) {
        getPiAnimated();
    }
    else {
        getPiFast()
    }

    function getPi(i, j) {
        setDotCount(i);

        let punto = document.createElement("div");
        punto.classList.add("punto");
        document.getElementById("circle").append(punto);

        let randomTop = ~~(Math.random() * 600);
        let randomLeft = ~~(Math.random() * 600);
        if (Math.pow(randomTop, 2) + Math.pow(randomLeft, 2) <= Math.pow(600, 2)) {
            j++;
            setDotsInside(j);
            setPi(((j * 4) / i).toString().substr(0, 5));
            setDotCountRange(j);
        }

        punto.style.top = `${randomTop}px`;
        punto.style.left = `${randomLeft}px`;
        return j;
    }

    function getPiAnimated() {
        let i = 0, j = 0;
        const interval = setInterval(() => {
            i++;
            j = getPi(i, j);

            if (i === limit) {
                setDotCountRange(j)
                setDisabledInput(false);
                setRangeDisplay("visible");
                clearInterval(interval);
            }
        }, 0);
    }

    function getPiFast() {
        for (let i = 0, j = 0; i <= limit; i++) {
            j = getPi(i, j);
            if (i === limit) {
                setDotCountRange(j)
                setDisabledInput(false);
            }
        }
    }

    function removeDots() {
        let dots = document.getElementsByClassName("punto");
        while (dots[0]) {
            dots[0].parentNode.removeChild(dots[0]);
        }
    }
}

export default calc;