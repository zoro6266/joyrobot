const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-nav');
const backdrop=document.querySelector('.menu-backdrop');
let lastScroll=0;
function setMenu(open,restoreFocus=true){
  if(open===!menu.hidden)return;
  menu.hidden=!open;backdrop.hidden=!open;
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'关闭导航菜单':'打开导航菜单');
  document.body.classList.toggle('menu-open',open);
  if(open){lastScroll=window.scrollY;document.body.style.top=`-${lastScroll}px`;document.body.style.position='fixed';document.body.style.width='100%';menu.querySelector('a').focus()}
  else{document.body.style.position='';document.body.style.width='';document.body.style.top='';window.scrollTo({top:lastScroll,behavior:'instant'});if(restoreFocus)menuButton.focus()}
}
menuButton.addEventListener('click',()=>setMenu(menu.hidden));
backdrop.addEventListener('click',()=>setMenu(false));
menu.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false,false)});
document.addEventListener('keydown',e=>{if(menu.hidden)return;if(e.key==='Escape'){e.preventDefault();setMenu(false)}if(e.key==='Tab'){const f=[menuButton,...menu.querySelectorAll('a')];const i=f.indexOf(document.activeElement);if(e.shiftKey&&i===0){e.preventDefault();f.at(-1).focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}});
const mobile=window.matchMedia('(max-width: 760px)');
const menuMobile=window.matchMedia('(max-width: 960px)');
menuMobile.addEventListener('change',e=>{if(!e.matches&&!menu.hidden)setMenu(false,false)});
document.querySelectorAll('img').forEach(image=>{function fail(){image.hidden=true;const parent=image.closest('.media');if(parent){const fallback=parent.querySelector('.media-fallback');if(fallback)fallback.hidden=false}}image.addEventListener('error',fail);if(image.complete&&!image.naturalWidth)fail()});
document.querySelectorAll('video').forEach(video=>{const report=()=>{const p=video.parentElement.querySelector('.video-error');if(p)p.hidden=false};video.addEventListener('error',report);video.querySelectorAll('source').forEach(s=>s.addEventListener('error',report));if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){video.pause();video.autoplay=false}});
document.querySelectorAll('.copy').forEach(button=>button.addEventListener('click',async()=>{let result=button.parentElement.querySelector('.copy-result')||button.closest('.email-application,.download-card').querySelector('.copy-result');try{await navigator.clipboard.writeText(button.dataset.copy);result.textContent=button.dataset.kind==='email'?'邮箱已复制':'下载链接已复制'}catch{result.textContent='请长按或选中以下内容手动复制：';let value=document.createElement('span');value.className='manual-copy';value.textContent=button.dataset.copy;result.append(value)}}));
document.querySelectorAll('.qr-toggle').forEach(button=>button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.textContent=open?'隐藏二维码':'显示二维码';document.getElementById(button.getAttribute('aria-controls')).classList.toggle('qr-open',open)}));
if(/Android/i.test(navigator.userAgent)){const grid=document.querySelector('.downloads-grid');const card=grid?.querySelector('[data-platform="android"]');if(grid&&card&&mobile.matches)grid.prepend(card)}
if(mobile.matches)document.querySelectorAll('.download-link').forEach(a=>a.removeAttribute('target'));
