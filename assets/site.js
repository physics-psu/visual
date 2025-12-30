(function(){
  // Simple client-side search for the catalog page
  const search = document.querySelector('[data-search]');
  const cards = Array.from(document.querySelectorAll('[data-card]'));
  if(search && cards.length){
    const normalize = (s)=> (s||'').toLowerCase().replace(/ё/g,'е');
    const filter = ()=>{
      const q = normalize(search.value.trim());
      for(const card of cards){
        const hay = normalize(card.getAttribute('data-haystack'));
        card.style.display = hay.includes(q) ? '' : 'none';
      }
    };
    search.addEventListener('input', filter);
    filter();
  }
})();
