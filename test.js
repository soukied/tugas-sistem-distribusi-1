function writeOutput(out) {
	document.querySelector('#output').innerHTML += out + "<br>";
}

function welcome(user) {
	setTimeout(()=>writeOutput("Selamat Datang " + user), 2000); // fungsi asynchronous untuk memberikan timeout
	writeOutput("Menunggu " + user + " masuk.");
}

welcome("Adam");
