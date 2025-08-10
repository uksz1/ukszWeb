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
    document.getElementById('msg').innerHTML = 'ERROR 1<br>wrong dir: "' + direction + '"';
    return;
  }
  const response = await fetch('/webring.json');
  if(!response.ok){
    document.getElementById('msg').innerHTML = 'ERROR 2<br>failed to load webring data';
    return;
  }
  const mapping = await response.json();
  if(slug == 'YOUR-SLUG'){
    document.getElementById('msg').innerHTML = 'ERROR 3<br>seems like you forgot to change "' + slug + '" into your chosen slug';
    return;
  }
  if(!(slug in mapping)){
    document.getElementById('msg').innerHTML = 'ERROR 4<br>unknown slug: "' + slug + '"';
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