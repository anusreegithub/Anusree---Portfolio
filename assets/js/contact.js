
contactForm = document.querySelector("#contact-form");
submitBtn = document.querySelector(".submit-btn");
from_name = document.querySelector("#from_name");
email_address = document.querySelector("#email_address");
phone_number =document.querySelector("#phone_number");
subject =document.querySelector("#subject");
message = document.querySelector("#message");
errorElement = document.querySelector("#error-message");

const publickey = "Tj8_vfiBaMCfXGcYd";
const serviceID = "service_txduy44";
const templateID = "template_b3elz1w";

emailjs.init(publickey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const inputFields = {
        from_name: from_name.value,
        email_address: email_address.value,
        subject: subject.value,
        message: message.value,
        phone_number : phone_number.value
    };

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            submitBtn.innerText = "Sent";
            submitBtn.style.color = "white";
            submitBtn.style.backgroundColor = "green";
            setTimeout(() => {
                window.location.reload(); 
            }, 3000);
        }, (error) => {
            console.log(error);
            submitBtn.innerText = "Error";
        });
});
