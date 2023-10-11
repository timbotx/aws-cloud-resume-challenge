const counter = document.querySelector(".cntr");
async funtion updateCounter() {
      let response = await fetch("https://phootbbyoimfpmzmvyqqte2q7e0mopkm.lambda-url.eu-west-1.on.aws/");
      lt data = await response.json();
      counter.innerHTML = ' views: ${data}';

}

updateCounter();