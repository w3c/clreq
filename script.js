var switched = false;

function switch2zh () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var en = document.querySelectorAll('[data-lang=en]')
	for (var i=0;i<en.length;i++) en[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	document.documentElement.lang = 'zh'
	switched = true;
	}
	
	
function switch2en () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var zh = document.querySelectorAll('[data-lang=zh]')
	for (var i=0;i<zh.length;i++) zh[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	document.documentElement.lang = 'en'
	switched = true;
	}


function addLangAttrs () {
	// adds lang attributes wherever there is a data-lang attribute
	// this is done by js to reduce burden on editors
	// if there's already a lang attribute in the tag, that tag is skipped
	// note that this may still produce temporarily incorrect labelling where text is awaiting translation
	
	var zh = document.querySelectorAll('[data-lang=zh]')
	for (i=0;i<zh.length;i++) { if (zh[i].lang == '') { zh[i].lang='zh'} }
	}
