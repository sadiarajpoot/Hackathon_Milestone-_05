var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get the profile picture input element
    var profilePicture = document.getElementById("Profile-Picture");
    // Get the selected profile picture file (if any)
    var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
    // Generate a URL for the selected profile picture (temporary for preview)
    var profilePicURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    var username = document.getElementById('username').value;
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("Email Address").value;
    var phone = document.getElementById("Phone Number").value;
    var education_InstitudeName = document.getElementById("Institude Name").value;
    var Degree = document.getElementById("Degree").value;
    var Years_Of_Education = document.getElementById("Years Of Education").value;
    var education_text_area = document.getElementById("education-text-area").value;
    var Campany_Name = document.getElementById("Campany Name").value;
    var Your_Last_job = document.getElementById("Your Last job").value;
    var Job_Description = document.getElementById("Job Description").value;
    var skills = document.getElementById("Skills").value;
    var resumeData = {
        username: username,
        name: name,
        email: email,
        phone: phone,
        education_InstitudeName: education_InstitudeName,
        Degree: Degree,
        Years_Of_Education: Years_Of_Education,
        education_text_area: education_text_area,
        Campany_Name: Campany_Name,
        Your_Last_job: Your_Last_job,
        Job_Description: Job_Description,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var ResumeGenerate = "\n\t   <h2><b>Resume Builder</b></h2>\n\t     <h3>Personal Information</h2>\n\t\t\t".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile_picture\" style=\"width:150px;height:150px;border-radius:50%;\">") : "", "\n\t<p><b>Name :</b><span contenteditable=\"true\">").concat(Name, "</span></p>\n\t<p><b>Email Address :</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\t<p><b>Phone Number :</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n<hr>\n\t    <h3>Education</h2>\n\t<p><b>Institude Name:</b><span contenteditable=\"true\">").concat(education_InstitudeName, "\n\t</span></p>\n\t<p><b>Degree :</b>").concat(Degree, "</p>\n\t<p><b>Year Of Education :</b><span contenteditable=\"true\">").concat(Years_Of_Education, "\n\t</span></p>\n\t<p><b>Education Details :</b><span contenteditable=\"true\">").concat(education_text_area, "\n\t</span></p>\n\t<hr>\n\t\n\t\t<h3>Work Experience</h2>\n\t<p><b>Company Name :</b><span contenteditable=\"true\">").concat(Campany_Name, "</span></p>\n\t<p><b>Your Last Job :</b><span contenteditable=\"true\">").concat(Your_Last_job, "</span></p>\n\t<p><b>Job Description :</b><span contenteditable=\"true\">").concat(Job_Description, "</span></p>\n\t<p><b>Education Details :</b><span contenteditable=\"true\">").concat(education_text_area, "\n\t</span></p>\n\t<hr>\n\n\t\t\t<h3>Skills</h3>\n\t<p><b>Skills :</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n\t");
    // Display the generated resume
    resumeDisplayElement.innerHTML = ResumeGenerate;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
