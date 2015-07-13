function switch2zh () {
	var en = document.querySelectorAll('[data-lang=en]')
	for (var i=0;i<en.length;i++) en[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	document.documentElement.lang = 'zh'
	}
	
	
function switch2en () {
	var zh = document.querySelectorAll('[data-lang=zh]')
	for (i=0;i<zh.length;i++) zh[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	document.documentElement.lang = 'en'
	}
