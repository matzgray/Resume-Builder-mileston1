/* Getting the section and button elements*/
const educationSections = document.getElementById('education') as HTMLElement;
const toggleeducationButtons = document.getElementById('toggle-education') as HTMLButtonElement;

// Adding an event listener
toggleeducationButtons.addEventListener('click', () => {
  // Toggle the visibility of section
  // educationSections.style.display = educationSections.style.display === 'none' ? 'block' : 'none';
  if (educationSections.style.display === "none") {
    educationSections.style.display = "block"
  } else {
    educationSections.style.display = "none"
  }
});

const skillsSections = document.getElementById('skills') as HTMLElement;
const toggleSkillsButtons = document.getElementById('toggle-skills') as HTMLButtonElement;

// Adding an event listener
toggleSkillsButtons.addEventListener('click', () => {
  // Toggle the visibility of section
  skillsSections.style.display = skillsSections.style.display === 'none' ? 'block' : 'none';
});
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;
const toggleWorkExperienceButton = document.getElementById('toggle-work-experience') as HTMLButtonElement;
//adding an event listener
toggleWorkExperienceButton.addEventListener('click', () => {

  //toggle the visibility of section
  workExperienceSection.style.display = workExperienceSection.style.display === 'none' ? 'block' : 'none';
});