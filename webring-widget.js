(async () => {

  const webring = {
  "ukszWeb": "https://webring.uksz.org",
  "Jae": "https://jae.gg",
  // "m0th": "https://mothtonoth.art",
  "m4ddy": "https://maddyka.nekoweb.org",
  "error": "https://oerrorpage.neocities.org",
  "yoyledotcity": "https://yoyle.city",
  "YEESITE": "https://yeepsite.nekoweb.org",
  "ockolus": "https://ockolus.neocities.org",
  "Nameless": "https://music-and-more-and-more.nekoweb.org",
  "kellin": "https://kellin09.nekoweb.org",
  "reliquia": "https://ancientcrypt.neocities.org",
  "tapeykatt": "https://tapeykatt.neocities.org",
  "TUFFGROUNDS": "https://tuffgong.nekoweb.org",
  "sctech": "https://sctech.qzz.io",
  "SyntaxError":"https://errorsyntax.neocities.org",
  "hml":"https://hml.nekoweb.org",
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
      widget.innerHTML = `<style>span.update{text-align:center;animation:flickering 4s infinite;position:absolute;width:150px;top:0px;z-index:999;display:block;background-color:#1118;border-radius:20px;border:1px #b876d6 solid;}@keyframes flickering{0%{color:#b876d6}50%{color:#e00}100%{color:#b876d6}}</style><div style="position:relative"><span class="update">update widget <a href="//web.jae.gg" target="_blank">here</a>!</span><div style="width:62px;height:31px;float:left;display:flex;text-align:center;align-items: center;position:relative"><span style="width:100%;user-select:none;">waiting<br>to join</span></div><div style="width:88px;height:31px;display:inline"><a href="https://web.jae.gg" target="_blank"><img src="https://web.jae.gg/images/JaeWEB.gif" alt="JaeWEB"></a></div></div>`;
      widget.style.backgroundColor=`#7133AB80`;
      widget.style.borderRadius=`4px`;
      return;
    }
    widget.innerHTML = `<style>span.update{text-align:center;animation:flickering 4s infinite;position:absolute;width:150px;top:0px;z-index:999;display:block;background-color:#1118;border-radius:20px;border:1px #b876d6 solid;}@keyframes flickering{0%{color:#b876d6}50%{color:#e00}100%{color:#b876d6}}</style><div style="position:relative"><span class="update">update widget <a href="//web.jae.gg" target="_blank">here</a>!</span><a href="https://web.jae.gg/r?${slug}&prev"><img src="https://web.jae.gg/images/prev.gif" alt="previous"></a><a href="https://web.jae.gg" target="_blank" rel="noopener"><img src="https://web.jae.gg/images/JaeWEB.gif" alt="web.jae.gg webring"></a><a href="https://web.jae.gg/r?${slug}&next"><img src="https://web.jae.gg/images/next.gif" alt="next"></a></div>`
})();