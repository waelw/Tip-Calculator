const billInput = document.querySelector("#bill")

const tipButtons = document.querySelectorAll(".grid button")

const customTip = document.querySelector("#customRate")

const numberOfPeople = document.querySelector("#number")

const total = document.querySelector("#total")

const amount = document.querySelector("#amount")

const reset = document.querySelector("#reset")

let bill = 0
let number = 1
billInput.addEventListener("input", (e) => {
    bill = e.target.value;
    calculate()
})

let tip = 0
let currentActive = null
tipButtons.forEach(t => {
    t.addEventListener("click", (e) => {
        if (currentActive != e.target) {
            tipButtons.forEach(t => {
                t.classList.remove("active");
            })
            currentActive = e.target
            tip = currentActive.dataset.value
            if (!currentActive.classList.contains("active"))
                t.classList += " active"
        }
        else {
            console.log("hello")
            currentActive.classList.remove("active")
            currentActive = null
        }




        calculate()
    })
})

customTip.addEventListener("input", (e) => {
    tipButtons.forEach(t => {
        t.classList.remove("active");
    })

    tip = e.target.value
})

numberOfPeople.addEventListener("input", (e) => {
    number = e.target.value;
    calculate()

})

function calculate() {
    let amountRes = bill * (1 + tip / 100) / number
    let tipRes = bill * (tip / 100) / number
    amount.innerText = "$" + `${tipRes}`
    total.innerText = "$" + `${amountRes}`
}