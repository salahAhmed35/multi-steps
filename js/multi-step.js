let stepsForms = document.querySelectorAll(".step-form");
let nextButton = document.querySelectorAll(".step-form .submit button");
let goBackButton = document.querySelectorAll(".step-form .submit .go-back");
let activeStepNumber = 0;
let stepNumber = document.querySelectorAll(".multi-step .step-number .number")
let pillingWay = document.querySelector(".step-form .pilling span");
let yearlyPara = document.querySelector(".pilling .yearly")
let monthlyPara = document.querySelector(".pilling .monthly")


console.log(stepNumber)

nextButton.forEach((e) => {
    e.onclick = () => {
        stepsForms.forEach((e) => {
            e.classList.remove("active");
        });
        stepNumber.forEach(e => {
            e.classList.remove("active")
        })
        activeStepNumber += 1;
        stepsForms[activeStepNumber].classList.add("active");
        stepNumber[activeStepNumber].classList.add("active");
    };
});

goBackButton.forEach((e) => {
    e.onclick = () => {
        stepsForms.forEach((e) => {
            e.classList.remove("active");
        });
        stepNumber.forEach(e => {
            e.classList.remove("active")
        })
        activeStepNumber -= 1;
        stepsForms[activeStepNumber].classList.add("active");
        stepNumber[activeStepNumber].classList.add("active");
    };
});



function toTheNextStep(Next, prev) {

}

stepsForms[activeStepNumber].classList.add("active");
stepNumber[activeStepNumber].classList.add("active");

// choose pilling way 

pillingWay.onclick = function () {
    if (this.classList.contains("yearly")) {
        this.classList.remove("yearly");
        monthlyPara.classList.add("active");
        yearlyPara.classList.remove("active")
    } else {
        this.classList.add("yearly");
        yearlyPara.classList.add("active")
        monthlyPara.classList.remove("active")
    }
};
