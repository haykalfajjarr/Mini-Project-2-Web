document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    animateSkillBar(bar, percent);
  });
});

function animateSkillBar(bar, percent) {
  let width = 0;
  const interval = setInterval(frame, 10);
  
  function frame() {
    if (width >= percent) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + '%';
    }
  }
}


