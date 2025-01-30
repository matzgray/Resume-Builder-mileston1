/* Getting the section and button elements*/
var educationSections = document.getElementById('education');
var toggleeducationButtons = document.getElementById('toggle-education');
// Adding an event listener
toggleeducationButtons.addEventListener('click', function () {
    // Toggle the visibility of section
    // educationSections.style.display = educationSections.style.display === 'none' ? 'block' : 'none';
    if (educationSections.style.display === "none") {
        educationSections.style.display = "block";
    }
    else {
        educationSections.style.display = "none";
    }
});
var skillsSections = document.getElementById('skills');
var toggleSkillsButtons = document.getElementById('toggle-skills');
// Adding an event listener
toggleSkillsButtons.addEventListener('click', function () {
    // Toggle the visibility of section
    skillsSections.style.display = skillsSections.style.display === 'none' ? 'block' : 'none';
});
var workExperienceSection = document.getElementById('work-experience');
var toggleWorkExperienceButton = document.getElementById('toggle-work-experience');
//adding an event listener
toggleWorkExperienceButton.addEventListener('click', function () {
    //toggle the visibility of section
    workExperienceSection.style.display = workExperienceSection.style.display === 'none' ? 'block' : 'none';
});
