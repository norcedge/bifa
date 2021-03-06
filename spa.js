javascript:(function(){
    var additionalString = "# 購入<br># 図書館<br># 読みたい<br># 読んだ<br>";
    var titleElm = document.getElementById('productTitle');
    if (!titleElm) var titleElm = document.getElementById("ebooksProductTitle");
    var title = titleElm.innerText;
    var imageElm = document.getElementById("imageBlockContainer");
    if (!imageElm) var imageElm = document.getElementById("ebooksImageBlockContainer");
    var imgUrl = imageElm.getElementsByTagName("img")[0].getAttribute("src");

    var authors = document.getElementsByClassName("author");
    var author = "";
    for (var i = 0; i < authors.length ;i++) {
	let si = authors[i].getElementsByTagName("script");
	while (si.length > 0) {
	    si[0].parentNode.removeChild(si[0]);
	}
	si = authors[i].getElementsByClassName("a-popover-preload");
	while (si.length > 0) {
	    si[0].parentNode.removeChild(si[0]);
	}
	author += authors[i].innerText;
    }

    var detail_bullets = document.getElementById("detail_bullets_id");
    var infos = detail_bullets.getElementsByTagName("li");
    var info = [];
    for (i=0; i < infos.length ;i++) {
	let j = infos[i].innerText;
	if (/ページ$/.test(j)) {
	    info.push(infos[i].innerText.replace(/<br>/, "\n"));
	} else if (/^(出版社|言語|ISBN|ASIN|発売日)/.test(j)) {
	    info.push(infos[i].innerText.replace(/<br>/, "\n"));
	}
    }

    var amazonURL = location.href;
    amazonURL = amazonURL.replace(/www.amazon.co.jp\/.*\/dp\//, "www.amazon.co.jp/dp/");
    amazonURL = amazonURL.replace(/\/dp\/([^\/]+)\/.*$/, "/dp/$1/");
    
    var body = "";
    body += "<h1>" + title + "</h1>";
    body += "<p></p>";
    body += "<ul>";
    body += "<li>書名: " + title + "</li>";
    body += "<li>著者: " + author + "</li>";
    if (infos.length > 0) {
	body += "<li>";
	body += info.join("</li><li>");
	body += "</li>";
    }
    body += "<li>amazon URL: <a href = \"" + amazonURL + "\">" + amazonURL + "</a></li>";
    body += "</ul>";
    body += "<img src=\"" + imgUrl + "\"><br>";
    body += additionalString;
    document.body.innerHTML = body;
})();
