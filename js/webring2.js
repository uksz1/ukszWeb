(async()=>{
  const params = new URLSearchParams(window.location.search);
  const keys = [...params.keys()];
  if(keys.length===0){
    window.location.href = '/index.html';
    return;
  }
  const slug = keys[0];
  const direction = keys[1];
  if(!['next','prev','previous','p','n'].includes(direction)){
    document.getElementById('msg').textContent = 'error: wrong dir';
    return;
  }
  const response = await fetch('/webring.json');
  if(!response.ok){
    document.getElementById('msg').textContent = 'error: failed to load webring data';
    return;
  }
  const mapping = await response.json();
  if(!(slug in mapping)){
    document.getElementById('msg').textContent = 'error: unknown slug';
    return;
  }
  const slugs = Object.keys(mapping);
  const currentIndex = slugs.indexOf(slug);
  let dir = direction;
  if (dir==='previous'||dir==='p') dir = 'prev';
  else if(dir==='n') dir='next';
  const newIndex = dir === 'next'
    ? (currentIndex+1) % slugs.length
    : (currentIndex-1+slugs.length) % slugs.length;
  const targetUrl = mapping[slugs[newIndex]];
  if(targetUrl){
    window.location.href = targetUrl;
  }
})();