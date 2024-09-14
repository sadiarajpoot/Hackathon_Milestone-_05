const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as
HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as
HTMLButtonElement;
form.addEventListener("submit", (event: Event) => {
	event.preventDefault();
	// Get the profile picture input element
	const profilePicture = document.getElementById("Profile-Picture") as HTMLInputElement;
  
  // Get the selected profile picture file (if any)
	const profilePictureFile = profilePicture.files?.[0];

  // Generate a URL for the selected profile picture (temporary for preview)
	const profilePicURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
	const username = (document.getElementById('username') as HTMLInputElement).value;
	const Name = (document.getElementById("Name") as HTMLInputElement).value;
	const email = (document.getElementById("Email Address") as HTMLInputElement).value
	const phone = (document.getElementById("Phone Number") as HTMLInputElement).value
	const education_InstitudeName = (document.getElementById("Institude Name") as HTMLInputElement).value
	const Degree = (document.getElementById("Degree") as HTMLInputElement).value
	const Years_Of_Education = (document.getElementById("Years Of Education") as HTMLInputElement).value
	const education_text_area = (document.getElementById("education-text-area") as HTMLInputElement).value;
	const Campany_Name = (document.getElementById("Campany Name") as HTMLInputElement).value
	const Your_Last_job = (document.getElementById("Your Last job") as HTMLInputElement).value
	const Job_Description = (document.getElementById("Job Description") as HTMLInputElement).value;
	const skills = (document.getElementById("Skills") as HTMLInputElement).value;
	const resumeData = {
		username,
    name,
    email,
		phone,
		education_InstitudeName,
		Degree,
		Years_Of_Education,
		education_text_area,
		Campany_Name,
		Your_Last_job,
		Job_Description,
		skills
}
	localStorage.setItem(username, JSON.stringify(resumeData));	
	const ResumeGenerate = `
	   <h2><b>Resume Builder</b></h2>
		 <hr>
	     <h3>Personal Information</h2>
			${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profile_picture" style="width:150px;height:150px;border-radius:50%;">` : ""}
	<p><b>Name :</b><span contenteditable="true">${Name}</span></p>
	<p><b>Email Address :</b><span contenteditable="true">${email}</span></p>
	<p><b>Phone Number :</b><span contenteditable="true">${phone}</span></p>
<hr>
	    <h3>Education</h2>
	<p><b>Institude Name:</b><span contenteditable="true">${education_InstitudeName}
	</span></p>
	<p><b>Degree :</b>${Degree}</p>
	<p><b>Year Of Education :</b><span contenteditable="true">${Years_Of_Education}
	</span></p>
	<p><b>Education Details :</b><span contenteditable="true">${education_text_area}
	</span></p>
	<hr>
	
		<h3>Work Experience</h2>
	<p><b>Company Name :</b><span contenteditable="true">${Campany_Name}</span></p>
	<p><b>Your Last Job :</b><span contenteditable="true">${Your_Last_job}</span></p>
	<p><b>Job Description :</b><span contenteditable="true">${Job_Description}</span></p>
	<p><b>Education Details :</b><span contenteditable="true">${education_text_area}
	</span></p>
	<hr>

			<h3>Skills</h3>
	<p><b>Skills :</b><span contenteditable="true">${skills}</span></p>
	`;
	// Display the generated resume
resumeDisplayElement.innerHTML = ResumeGenerate;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
	const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});