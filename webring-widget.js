(async () => {
  const response = await fetch(`https://web.jae.gg/webring.json?${Date.now()}`);
  const webring = await response.json();
  const baseUrl = location.origin;
  const widget = document.getElementById(`JaeWEB`);
  if(!widget) return;
  Object.assign(widget.style,{
    display: `inline-block`,
    height: `31px`,
    width: `150px`,
    fontFamily: `monospace`,
    fontSize: `10px`
  })
    let slug;
    for(const [name, url] of Object.entries(webring)){
      if(url === baseUrl){
        slug = name;
        break;
      }
    }
    if(!slug){
      widget.innerHTML = `<div style="width:62px;height:31px;float:left;display:flex;text-align:center;align-items: center;"><span style="width:100%;user-select:none;">waiting<br>to join</span></div><div style="width:88px;height:31px;display:inline"><a href="https://web.jae.gg" target="_blank"><img src="https://web.jae.gg/images/JaeWEB.gif" alt="JaeWEB"></a></div>`;
      widget.style.backgroundColor=`#7133AB80`;
      widget.style.borderRadius=`4px`;
      return;
    }
    widget.innerHTML = `<a href="https://web.jae.gg/r?${slug}&prev"><img src="https://web.jae.gg/images/prev.gif" alt="previous"></a><a href="https://web.jae.gg" target="_blank" rel="noopener"><img src="https://web.jae.gg/images/JaeWEB.gif" alt="web.jae.gg webring"></a><a href="https://web.jae.gg/r?${slug}&next"><img src="https://web.jae.gg/images/next.gif" alt="next"></a>`
})();