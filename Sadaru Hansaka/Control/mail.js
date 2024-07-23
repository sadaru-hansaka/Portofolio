import {key} from './key.js';

const form = document.querySelector('form');
const name = document.getElementById('name');
const mail = document.getElementById('email');
const messege = document.getElementById('message');
const subject = document.getElementById('subject');



function sendEmail() {
    const msg = `Name : ${name.value}<br> Email : ${mail.value}<br><br> ${messege.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hansakas305@gmail.com",
        Password : key,
        To : 'hansakas305@gmail.com',
        From : "hansakas305@gmail.com",
        Subject : subject.value,
        Body : msg,
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    sendEmail();
    this.reset();
})