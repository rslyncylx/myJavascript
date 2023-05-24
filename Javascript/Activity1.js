//array for skills
const skills = ["HTML", "CSS", "Java", "VBA", "SQL"];

//button to view skills
function mySkillsButton(){
	var btnText = document.getElementById('mybtn');
	var mySkills ='';
	//condition if skills already displayed
	if (btnText.innerText == "Hide") {
		mySkills ='';
		document.getElementById('skill').innerHTML = mySkills;
		document.getElementById('mybtn').innerText = "Click me to display Skills";
		document.getElementById('divAddSkill').style.display = 'none';
	} else {
	//condition if skills not displayed
		for (i=0; i < skills.length; i++){
			
			mySkills = mySkills + skills[i] + "<br>"; 
		}
		document.getElementById('skill').innerHTML = mySkills;
		document.getElementById('mybtn').innerText = "Hide";
		document.getElementById('divAddSkill').style.display = 'block';
		document.getElementById('txtSkill').value = "";
	}
	
}	

