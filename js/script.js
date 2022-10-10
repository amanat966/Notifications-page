const unReadMessages = document.querySelectorAll(".unread");
const unRead = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");


unRead.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", ()=> {
        message.classList.remove("unread");
        const newUnReadMessages = document.querySelectorAll(".unread");
        unRead.innerText = newUnReadMessages.length;
    })
})

markAll.addEventListener("click", ()=> {
    unReadMessages.forEach((message) => {
            message.classList.remove("unread");
        })
        const newUnReadMessages = document.querySelectorAll(".unread");
        unRead.innerText = newUnReadMessages.length;
})