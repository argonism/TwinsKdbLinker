
let CreateAtagFromLink = (link) => {
  let dom_link = document.createElement("a"); 
  dom_link.textContent = "シラバス";
  dom_link.href = link;
  dom_link.target = "_blank"
  dom_link.rel="noopener"
  return dom_link;
}

let mainFrame = document.getElementById('main-frame-if');

mainFrame.onload = () => 
{
  let rows = mainFrame.contentWindow.document.querySelector('.rishu-koma > tbody');
  for (let i = 0; i < rows.children.length ; i++) {
    let htmlc_komas = rows.children[i].querySelectorAll('td[bgcolor="#ffcc99"]');
    let komas = Array.from(htmlc_komas);
    if (komas.length === 0) continue;
    komas.forEach((koma) => {
      let subject_id = koma.querySelector('tbody td').children[0].innerHTML.trim();
      if (!subject_id) {
        subject_id = koma.querySelectorAll('tbody td')[0].childNodes[0].textContent.trim();
      }
      
      let year = new Date().getFullYear();
      let str_kdblink = `https://kdb.tsukuba.ac.jp/syllabi/${year}/${subject_id}/jpn/`
      let dom_kdblink = CreateAtagFromLink(str_kdblink);

      koma.style.position = "relative";
      dom_kdblink.style.position = "absolute"; 
      dom_kdblink.style.top = '1px'; 
      dom_kdblink.style.right = '1px';
      koma.insertBefore(dom_kdblink, null);
    })
  };
};
