function sendEmail() {
    const form = document.querySelector("form")
    const templateParams = {
        name : document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        subject:document.querySelector("#subject").value,
        message:document.querySelector("#message").value,
    }

    emailjs
        .send("service_wi8lczj","template_ziy9nuq",templateParams)
        .then(()=> {
            alert("Email Sent!");
            form.reset();
        })
        .catch(()=>{
            alert("Email Not Sent!!")
        });

}
