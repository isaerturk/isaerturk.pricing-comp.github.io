const monthly = document.querySelectorAll(".monthly");
const annual = document.querySelectorAll(".annual");
const checkbox = document.querySelector("#checkbox-btn");

checkBox = document.getElementById('checkbox-btn').addEventListener('click', event => {
	if(event.target.checked) {
		annual[0].style.display="none";
		annual[1].style.display="none";
		annual[2].style.display="none";
		monthly[0].style.display="block";
		monthly[1].style.display="block";
		monthly[2].style.display="block";
	}
});
checkBox = document.getElementById('checkbox-btn').addEventListener('click', event => {
	if(event.target.checked == false) {
		annual[0].style.display="block";
		annual[1].style.display="block";
		annual[2].style.display="block";
		monthly[0].style.display="none";
		monthly[1].style.display="none";
		monthly[2].style.display="none";
	}
});
