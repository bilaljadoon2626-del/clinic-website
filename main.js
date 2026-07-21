document.getElementById('year').textContent = new Date().getFullYear();

  // Header scroll state
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const navToggle = document.getElementById('navToggle');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const scrim = document.getElementById('scrim');
  const openMenu = () => { mobileMenu.classList.add('open'); scrim.classList.add('show'); navToggle.setAttribute('aria-expanded','true'); };
  const closeMenu = () => { mobileMenu.classList.remove('open'); scrim.classList.remove('show'); navToggle.setAttribute('aria-expanded','false'); };
  navToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  scrim.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .divider');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Appointment form
  const form = document.getElementById('apptForm');
  const success = document.getElementById('formSuccess');
  const dateInput = document.getElementById('date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()){
      form.reportValidity();
      return;
    }
    success.classList.add('show');
    form.reset();
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
