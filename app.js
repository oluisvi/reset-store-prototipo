const PROFILE_URL = 'https://www.instagram.com/_resetstore_2/';
const names = { editorial: '01 · Editorial', storefront: '02 · Loja direta', lookbook: '03 · Lookbook' };
const items = [
  { name: 'Look urbano', type: 'Combinação de referência', category: 'looks', img: 'assets/duo-look.jpg', alt: 'Dois modelos usando looks escuros em cenário urbano' },
  { name: 'Moletom street', type: 'Referência de estilo', category: 'moletons', img: 'assets/streetwear-portrait.jpg', alt: 'Modelo com moletom preto diante de uma parede clara' },
  { name: 'Camada urbana', type: 'Referência de estilo', category: 'jaquetas', img: 'assets/urban-look.jpg', alt: 'Modelo com roupa streetwear em uma rua urbana' },
  { name: 'Visual de rua', type: 'Referência de estilo', category: 'looks', img: 'assets/graffiti-look.jpg', alt: 'Modelo com roupa escura em ambiente urbano com grafite' },
  { name: 'Kit casual', type: 'Combinação de referência', category: 'kits', img: 'assets/duo-look.jpg', alt: 'Duas combinações de roupa urbana em tons escuros' },
  { name: 'Essenciais', type: 'Referência de estilo', category: 'camisetas', img: 'assets/urban-look.jpg', alt: 'Look casual masculino fotografado na cidade' }
];
const main = document.getElementById('conteudo');
const trigger = document.getElementById('designTrigger');
const menu = document.getElementById('designMenu');
const currentName = document.getElementById('activeDesignName');
const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');
const search = document.getElementById('catalogSearch');
let currentFilter = 'all';

function photo(src, alt) {
  return '<img src="' + src + '" alt="' + alt + '" width="900" height="1125" loading="lazy" decoding="async">';
}
function card(item) {
  return '<article class="product-card reveal" data-category="' + item.category + '" data-search-text="' + (item.name + ' ' + item.type + ' ' + item.category).toLowerCase() + '"><a class="product-image" href="' + PROFILE_URL + '" target="_blank" rel="noopener noreferrer" aria-label="Consultar ' + item.name + ' no Instagram">' + photo(item.img, item.alt) + '<span class="reference-tag">Referência</span></a><div class="product-meta"><h3>' + item.name + '</h3><p>' + item.type + ' · consulte disponibilidade com a loja</p><a class="product-link" href="' + PROFILE_URL + '" target="_blank" rel="noopener noreferrer">Perguntar no Instagram <span aria-hidden="true">↗</span></a></div></article>';
}
function categoryButtons(extraClass) {
  const list = [['all','Tudo'],['looks','Looks'],['camisetas','Camisetas'],['moletons','Moletons'],['jaquetas','Jaquetas'],['kits','Kits']];
  return list.map(function(entry){return '<button type="button" class="filter-button ' + (extraClass || '') + '" data-filter="' + entry[0] + '" aria-pressed="' + (currentFilter === entry[0]) + '">' + entry[1] + '</button>';}).join('');
}
function editorial() {
  return '<div class="route design-editorial" id="inicio"><section class="hero hero-editorial"><div class="hero-copy"><h1>Seu próximo<br>look começa aqui.</h1><p>Uma vitrine para explorar roupas, calçados e kits com calma. Encontre uma referência e converse com a loja sobre as opções disponíveis.</p><a class="primary-link" href="#novidades">Ver referências <span aria-hidden="true">↘</span></a></div><div class="hero-media">' + photo('assets/streetwear-portrait.jpg','Retrato streetwear em preto e branco') + '<span class="editorial-marker">Imagem de referência</span></div></section><section class="editorial-categories" id="colecao"><div class="category-index"><span>Explore por estilo</span>' + categoryButtons('') + '</div><div class="editorial-catalog" id="novidades"><div class="section-heading"><h2>Novidades</h2><p>Referências para inspirar sua escolha</p></div><div class="editorial-products product-list">' + items.map(card).join('') + '</div></div></section><section class="kits-band" id="kits"><div class="kit-photo">' + photo('assets/duo-look.jpg','Duas pessoas com looks streetwear em cenário urbano') + '</div><div class="kits-copy"><span class="eyebrow">COMBINAÇÕES</span><h2>Monte seu<br>kit.</h2><p>Veja uma ideia de composição e pergunte à equipe quais peças e tamanhos estão disponíveis.</p><a class="primary-link" href="' + PROFILE_URL + '" target="_blank" rel="noopener noreferrer">Falar com a Reset <span aria-hidden="true">↗</span></a></div></section></div>';
}
function storefront() {
  return '<div class="design-storefront" id="inicio"><section class="hero hero-storefront"><div class="hero-copy"><h1>Encontre seu estilo.</h1><p>Uma consulta rápida por categoria para descobrir referências de roupa, calçado e kits.</p><a class="primary-link" href="#novidades">Explorar a vitrine <span aria-hidden="true">↘</span></a></div><div class="hero-media">' + photo('assets/graffiti-look.jpg','Modelo streetwear em cenário urbano com grafite') + '</div></section><section class="route store-layout" id="novidades"><aside class="store-sidebar"><h2>Vitrine</h2><div class="filter-group"><p>Categorias</p>' + categoryButtons('') + '</div><div class="filter-group"><p>Como funciona</p><span class="sidebar-note">As imagens são referências visuais. Consulte a loja para confirmar modelos e disponibilidade.</span></div></aside><div class="store-content"><div class="section-heading"><div><h2>Peças e kits</h2><p>Escolha uma categoria para filtrar a seleção.</p></div><span class="result-count" id="resultCount">6 referências</span></div><div class="store-products product-list">' + items.map(card).join('') + '</div></div></section><section class="store-kit" id="kits"><div class="store-kit-copy"><span class="eyebrow">ENCONTRO PELO DIRECT</span><h2>Já sabe o que procura?</h2><p>Leve a referência escolhida para a conversa e confirme as opções com a equipe.</p><a class="primary-link" href="' + PROFILE_URL + '" target="_blank" rel="noopener noreferrer">Chamar no Instagram <span aria-hidden="true">↗</span></a></div><div class="store-kit-image">' + photo('assets/duo-look.jpg','Looks urbanos como referência para composição de kit') + '</div></section></div>';
}
function lookbook() {
  return '<div class="design-lookbook" id="inicio"><section class="hero hero-lookbook"><div class="hero-media">' + photo('assets/duo-look.jpg','Dois modelos em looks streetwear em um cenário urbano') + '</div><div class="hero-copy"><h1>Peças que<br>acompanham<br>seu ritmo.</h1><p>Uma seleção visual de referências para você descobrir combinações e consultar os detalhes com a loja.</p><a class="primary-link" href="#colecao">Ver referências <span aria-hidden="true">↘</span></a></div></section><section class="route lookbook-intro" id="colecao"><div><span class="eyebrow">DO SEU JEITO</span><h2>Um look,<br>várias ideias.</h2><p>Explore combinações e leve para o direct a peça ou o estilo que chamou sua atenção.</p><div class="category-strip">' + categoryButtons('') + '</div></div><div class="lookbook-mosaic"><figure>' + photo('assets/urban-look.jpg','Look streetwear fotografado em uma rua') + '</figure><figure>' + photo('assets/streetwear-portrait.jpg','Modelo com moletom preto') + '</figure></div></section><section class="route lookbook-products" id="novidades"><div class="section-heading"><h2>Escolha por inspiração</h2><p>Fotos ilustrativas · consulte modelos disponíveis</p></div><div class="lookbook-product-grid product-list">' + items.map(card).join('') + '</div><div class="lookbook-note" id="kits"><strong>Kits e combinações</strong><span>Consulte tamanhos, valores e disponibilidade diretamente com a Reset Store.</span></div></section></div>';
}
const renderers = { editorial: editorial, storefront: storefront, lookbook: lookbook };
function applyFilters() {
  const query = (search.value || '').trim().toLowerCase();
  const cards = main.querySelectorAll('.product-card');
  let visible = 0;
  cards.forEach(function(el){
    const matchesCategory = currentFilter === 'all' || el.dataset.category === currentFilter;
    const matchesQuery = !query || el.dataset.searchText.includes(query);
    const show = matchesCategory && matchesQuery;
    el.classList.toggle('is-filtered-out', !show);
    el.classList.toggle('is-filtered-in', show);
    if (show) visible++;
  });
  const count = document.getElementById('resultCount');
  if (count) count.textContent = visible + (visible === 1 ? ' referência' : ' referências');
  main.querySelectorAll('[data-filter]').forEach(function(button){button.setAttribute('aria-pressed',String(button.dataset.filter === currentFilter));});
  let empty = main.querySelector('.empty-results');
  const grid = main.querySelector('.product-list');
  if (visible === 0 && grid) { if (!empty) { empty = document.createElement('p'); empty.className = 'empty-results'; empty.textContent = 'Nenhuma referência encontrada. Tente outra busca ou categoria.'; grid.appendChild(empty); } }
  else if (empty) empty.remove();
}
function revealEntries() {
  const nodes = main.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) { nodes.forEach(function(el){el.classList.add('is-visible');}); return; }
  const observer = new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08});
  nodes.forEach(function(el){observer.observe(el);});
}
function render(design, first) {
  const valid = renderers[design] ? design : 'editorial';
  document.body.dataset.design = valid;
  currentName.textContent = names[valid];
  menu.querySelectorAll('.design-option').forEach(function(btn){btn.setAttribute('aria-pressed',String(btn.dataset.design === valid));});
  if (!first) document.body.classList.add('is-changing');
  window.setTimeout(function(){
    main.innerHTML = renderers[valid]();
    currentFilter = 'all';
    applyFilters();
    revealEntries();
    document.body.classList.remove('is-changing');
    history.replaceState(null,'',location.pathname + '?design=' + valid + location.hash);
  },first ? 0 : 160);
}
trigger.addEventListener('click',function(){const open=trigger.getAttribute('aria-expanded')==='true';trigger.setAttribute('aria-expanded',String(!open));menu.hidden=open;});
menu.addEventListener('click',function(event){const button=event.target.closest('[data-design]');if(!button)return;try{localStorage.setItem('reset-store-design',button.dataset.design);}catch(error){}render(button.dataset.design,false);menu.hidden=true;trigger.setAttribute('aria-expanded','false');});
document.addEventListener('click',function(event){if(!event.target.closest('.design-menu')&&!event.target.closest('.design-trigger')){menu.hidden=true;trigger.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',function(event){if(event.key==='Escape'){menu.hidden=true;searchPanel.hidden=true;trigger.setAttribute('aria-expanded','false');searchToggle.setAttribute('aria-expanded','false');}});
searchToggle.addEventListener('click',function(){const open=searchPanel.hidden;searchPanel.hidden=!open;searchToggle.setAttribute('aria-expanded',String(open));if(open)search.focus();});
document.getElementById('clearSearch').addEventListener('click',function(){search.value='';applyFilters();search.focus();});
search.addEventListener('input',applyFilters);
main.addEventListener('click',function(event){const button=event.target.closest('[data-filter]');if(button){currentFilter=button.dataset.filter;applyFilters();}});
const queryDesign=new URLSearchParams(location.search).get('design');
let savedDesign='editorial';
try{savedDesign=localStorage.getItem('reset-store-design')||savedDesign;}catch(error){}
render(renderers[queryDesign]?queryDesign:(renderers[savedDesign]?savedDesign:'editorial'),true);
