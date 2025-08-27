
const form = document.querySelector('.widget form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    if (email.trim() !== '') {
      alert(`✅ Thank you for subscribing, ${email}!`);
      form.reset();
    } else {
      alert('❌ Please enter a valid email address.');
    }
  });
}

// Optional: Smooth scroll to sections (if you use anchors in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



// সব 'read-more-btn' বাটনে event listener লাগানো
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    // প্যারাগ্রাফ নির্বাচন যেখানে লেখা আছে
    const description = this.previousElementSibling;

    // expanded ক্লাস টগল করা (যোগ বা বাদ)
    description.classList.toggle('expanded');

    // বাটনের টেক্সট পরিবর্তন করা
    if (description.classList.contains('expanded')) {
      this.textContent = 'Read Less ←';
    } else {
      this.textContent = 'Read More →';
    }
  });
});





