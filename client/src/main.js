const API_URL = "https://week-04-build-a-full-stack-guestbook.onrender.com/messages";

const messageForm = document.querySelector("#messageForm");
const messagesList = document.querySelector("#messagesList");

async function loadMessages() {
  const res = await fetch(API_URL);
  const messages = await res.json();

  console.log("Fetched messages:", messages); 

  messagesList.innerHTML = "";

  messages.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = `${msg.msg_name}: ${msg.content}`;
    messagesList.appendChild(li);
  });
}

messageForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#nameInput").value;
  const content = document.querySelector("#contentInput").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ msg_name: name, content }),
  });

  messageForm.reset();
  loadMessages();
});

loadMessages();
