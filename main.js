document.querySelectorAll('.sidebar .nav > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const submenu = e.currentTarget.nextElementSibling;
      if (submenu) {
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  // Modal functionality
  const modal = document.getElementById("profileModal");
  const profilePic = document.querySelector(".profile-pic");
  const span = document.getElementsByClassName("close")[0];
  
  profilePic.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }