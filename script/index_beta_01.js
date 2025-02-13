// 从JSON文件中加载诗句
async function loadPoem() {
	try {
		const response = await fetch('../poems.json');
		const poems = await response.json();
		const randomIndex = Math.floor(Math.random() * poems.length);
		const selectedPoem = poems[randomIndex];

		// 显示诗句和作者
		document.getElementById('poem').innerText = `"${selectedPoem.content}"`;
		// document.getElementById('author').innerText = `——${selectedPoem.author}（${selectedPoem.dynasty}）`;
	} catch (error) {
		console.error('加载诗句失败:', error);
		document.getElementById('poem').innerText = '加载诗句失败';
		// document.getElementById('author').innerText = '';
	}
}

// 页面加载完成后加载诗句
window.onload = loadPoem;

function changeSearchEngine() {
	document.getElementById('search-input').value = '';
}

// 搜索功能
function search() {
	var searchEngine = document.getElementById('search-engine').value;
	var searchTerm = document.getElementById('search-input').value;

	if (searchTerm) {
		var searchUrl;
		switch (searchEngine) {
			case 'google':
				searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
				break;
			case 'bing':
				searchUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(searchTerm);
				break;
			case 'baidu':
				searchUrl = 'https://www.baidu.com/s?wd=' + encodeURIComponent(searchTerm);
				break;
			case 'yandex':
				searchUrl = 'https://yandex.com/search/?text=' + encodeURIComponent(searchTerm);
				break;
			case '360':
				searchUrl = 'https://www.so.com/s?q=' + encodeURIComponent(searchTerm);
				break;
			case 'sougo':
				searchUrl = 'https://www.sogou.com/web?query=' + encodeURIComponent(searchTerm);
				break;
			case 'github':
				searchUrl = 'https://github.com/search?q=' + encodeURIComponent(searchTerm);
				break;
			default:
				alert('无效的搜索引擎！');
				return;
		}
		window.location.href = searchUrl;
	} else {
		alert('请输入搜索关键词！');
	}
}