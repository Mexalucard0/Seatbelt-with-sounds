const container = document.getElementById('container');

window.addEventListener('message', function(e) {
	container.classList.toggle('active', e.data.displayWindow == 'true');
});

