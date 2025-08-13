(async () => {

  const webring = {
  "ukszWeb": "https://webring.uksz.org",
  "uksz": "https://uksz.org",
  "m0th": "https://mothtonoth.art",
  "m4ddy": "https://maddyka.neocities.org",
  "error": "https://oerrorpage.neocities.org",
  "yoyledotcity": "https://yoyle.city",
  "YEESITE": "https://yeepsite.nekoweb.org",
  "ockolus": "https://ockolus.neocities.org",
  "Nameless": "https://music-and-more-and-more.nekoweb.org"
  };

  const baseUrl = location.origin;
  const widget = document.getElementById(`ukszWeb`);
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
      widget.innerHTML = '<div style="width:62px;height:31px;float:left;display:flex;text-align:center;align-items: center;"><span style="width:100%;user-select:none;">waiting<br>to join</span></div><div style="width:88px;height:31px;display:inline"><a href="https://webring.uksz.org" target="_blank"><img src="https://webring.uksz.org/images/ukszWeb.gif" alt="ukszWeb"></a></div>';
      widget.style.backgroundColor=`#7133AB80`;
      widget.style.borderRadius=`4px`;
      return;
    }
    widget.innerHTML = `<a href="https://webring.uksz.org/r?${slug}&prev"><img src="https://webring.uksz.org/images/prev.gif" alt="previous"></a><a href="https://webring.uksz.org" target="_blank" rel="noopener"><img src="https://webring.uksz.org/images/ukszWeb.gif" alt="ukszWeb webring"></a><a href="https://webring.uksz.org/r?${slug}&next"><img src="https://webring.uksz.org/images/next.gif" alt="next"></a>`
})();