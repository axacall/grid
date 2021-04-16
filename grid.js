let imgs = document.querySelectorAll(".wrap div");
let btn = document.querySelectorAll("#header ul li");
btn.forEach((buton) => {
    buton.addEventListener("click", (e) => {
        e.preventDefault();
        let animasyonSil = Array.from(imgs)
        for (let index = 0; index < animasyonSil.length; index++) {
            //--------------------
            const element = animasyonSil[index];

            if (element.classList.contains("itm")) {
                element.classList.add("animasyonDelete")
            }

            setTimeout(() => {

                let durum = e.target.getAttribute("data-name");
                tikla(durum)
                element.classList.remove("animasyon")
            }, 400);
        }
        if (e.target.getAttribute("data-name") === "all") {
            sonElement = Array.from(imgs)
            for (let index = 0; index < sonElement.length; index++) {
                const element = sonElement[index];

                if (element.classList.contains("itm")) {
                    element.classList.add("animasyonDelete")
                }
                setTimeout(() => {
                    element.classList.remove("animasyonDelete")
                    if (element.classList.contains("itm")) {
                        element.classList.add("animasyon")
                    }
                }, 1000);
            }
        }
    });
})
//--------------------
function tikla(durum) {

    let arr = Array.from(imgs)
    let result = arr.filter(item => item.getAttribute("data-name") == durum);
    for (let index = 0; index < result.length; index++) {
        const element = result[index];

        setTimeout(() => {
            element.classList.remove("animasyonDelete")
            if (element.classList.contains("itm")) {
                element.classList.add("animasyon")
            }
        }, 400);
    }
    let all = document.querySelector("#header ul li:last-child")
    all.addEventListener("click", function () {
        if (all.getAttribute("data-name") === "all") {
            sonElement = Array.from(imgs)
            for (let index = 0; index <= sonElement.length; index++) {
                const element = sonElement[index];
                if (element.classList.contains("itm")) {
                    element.classList.add("animasyonDelete")

                }
                setTimeout(() => {
                    element.classList.remove("animasyonDelete")
                }, 400);
                setTimeout(() => {
                    if (element.classList.contains("itm")) {
                        element.classList.add("animasyon")
                    }

                }, 800);
                return
            }
        }
    })
}
