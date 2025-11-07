// small UI helpers
document.addEventListener('DOMContentLoaded', function(){
  // year fillers
  const yearEls = ['year','year2','year3','year4'];
  yearEls.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // responsive nav toggles
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(t => {
    const idx = t.getAttribute('id') || '';
    t.addEventListener('click', () => {
      const nav = t.closest('header').querySelector('.main-nav');
      if(nav) nav.classList.toggle('show');
    });
  });

  // recipe expand/collapse
  const heads = document.querySelectorAll('.recipe-head[data-toggle]');
  heads.forEach(h=>{
    h.addEventListener('click', ()=>{
      const body = h.nextElementSibling;
      if(!body) return;
      const open = body.style.display === 'block';
      // close any other open card (optional)
      // document.querySelectorAll('.recipe-body').forEach(b=>b.style.display='none');

      body.style.display = open ? 'none' : 'block';
      const chev = h.querySelector('.chev');
      if(chev) chev.textContent = open ? '▾' : '▴';
      // smooth scroll into view when opening
      if(!open) h.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
});
