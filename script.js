document.addEventListener("DOMContentLoaded", function () {
  fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
      const jokeText = jokeData.attachments[0].text;
      const jokeElement = document.getElementById("jokeElement");

      jokeElement.innerHTML = jokeText;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
});
