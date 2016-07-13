// ==UserScript==
// @name          GisMeteo_face_mod
// @namespace     https://greasyfork.org
// @description	  ћодификаци€ вида сайта GisMeteo.
// @author        ALeXkRU
// @license       CC BY-SA
// @homepage      https://greasyfork.org/ru/scripts/11538-gismeteo-face-mod
// @icon          http://www.refropkb.ru/Images/gismeteo11.png
// @run-at        document-start
// @include       /^https?://(www|beta)\.gismeteo\.(ru|ua|com)/
// @version       0.20160706230005
// @grant         GM_addStyle
// ==/UserScript==

(function () {
    (function() {var css = "";
		css += ["@namespace url(http://www.w3.org/1999/xhtml);",
				"",
				"/* модификаци€ вида */"
		].join("\n");
		if (false || (document.domain == "gismeteo.ru" || document.domain.substring(document.domain.indexOf(".gismeteo.ru") + 1) == "gismeteo.ru") || (document.domain == "gismeteo.ua" || document.domain.substring(document.domain.indexOf(".gismeteo.ua") + 1) == "gismeteo.ua") || (document.domain == "gismeteo.com" || document.domain.substring(document.domain.indexOf(".gismeteo.com") + 1) == "gismeteo.com")) 
			css += [
		 // !! правка структуры from Ru-Board
				" #canvas,.cleft{width: 988px!important;}#weather-maps,#map-view,#weather-old,#weather-busy{width: 986px!important;}#weather-cities,#weather-weekly,#weather-daily,#weather-hourly,#geomagnetic{width:738px!important;}#weather-news{width:362px!important;}.wtab{width:228px!important;}.wtabs .wttr{left:224px!important;}.wbfull tbody th{width:85px!important;}.wdata thead th,.wdata tbody th{text-align: center!important;}.workday,tbody tr .weekend{width: 40px!important;}.wbshort .wbday{left:450px!important;}.wbshort .wbnight{left:70px!important;}.rframe{background-color: rgba(255,255,255,0.4)!important;}.wsection, .wbshort, .wbfull, .rfc{background:transparent!important;}.wbshort:hover{background-color:rgb(255,255,225)!important;}body,.content{background:url(http://www.refropkb.ru/Images/685414393.jpg)!important;background-attachment: fixed!important;}#weather-maps .fcontent{height:280px!important;}#weather-maps li{width:108px!important;} .wsection table{width: 690px!important;}",
				" .soft-promo, #soft-promo{display:none !important;}",
		// !!?		" #graph{float:none !important;}", //проверить
				" div#post-container,div#pre-container,.soft-promo{background:url(\"\")!important;}",
				" td.content.editor{background:url(\"\")!important;} ",
		// !! оставим меню: снежинки вырезать, на бету сходить
				" #header, #header .fcontent{height:26px !important;}",
				" #menu{top:0px !important;}",
				" li#tourism_button{display:none !important;}"
			].join("\n");
		if (typeof GM_addStyle != "undefined") {
			GM_addStyle(css);
		} else if (typeof PRO_addStyle != "undefined") {
			PRO_addStyle(css);
		} else if (typeof addStyle != "undefined") {
			addStyle(css);
		} else {
			var node = document.createElement("style");
			node.type = "text/css";
			node.appendChild(document.createTextNode(css));
			var heads = document.getElementsByTagName("head");
			if (heads.length > 0) {
				heads[0].appendChild(node); 
			} else {
				// no head yet, stick it whereever
				document.documentElement.appendChild(node);
			}
		}
	}())  

	 function removeA() {
		var s = document.querySelectorAll('yatag,#yandex_ad_horiz,#ad-left,#ad-lb-content,#ad-right.rframe,#rbc,.cright,.media_top,#soft-promo,.soft-promo,.soft-promo-wrap,#yandex_ad,#informer.rframe,#footer,footer.footer,.rframe.awad,#ad-lb.rframe,[id*=yandex],#weather-news,#bottom_shadow,a#logo,#smi2,[id*=MarketGid],.news_frame,.media_left,.media_content,.media_frame,#counter,#adfox_catfish,[id*=banner],iframe,#soft-promo.soft-promo,div.media_middle,div.media-frame,#ad-top,#rek-top,[id*=AdFox],[id^=rek-]');
		for (var l = 0; l < s.length; l++) {
			  if(s[l].parentNode)  s[l].parentNode.removeChild(s[l]);
		}
	}
	(function(s){
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		if (s) (new MutationObserver(removeA)).observe(s,{childList:true});
	})(document.querySelector('.measure'));
		
    // Google Chrome trick: sometimes the script is executed after that DOMContentLoaded was triggered, in this case we directly run our code
    if (document.readyState == "complete") {
        removeA();
    } else {
        window.addEventListener('DOMContentLoaded', removeA)
    }
}())
