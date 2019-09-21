(function () {
  const header = document.querySelector('.header');
	const icon = document.querySelector('.icon-container');
	icon.onclick = function () {
		header.classList.toggle('menu-open');
	}
}());

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.buttonMsg').addEventListener('click', function() {
    	refireAnim("anim");
    })
});

function refireAnim(anim) {
    document.querySelector('.buttonMsg').classList.remove(anim);
    setTimeout(function() {
        document.querySelector('.buttonMsg').classList.add(anim);
    }, 0);
}
