function openNav() {
    document.getElementById('sidebar').style.left = '0px';
    document.getElementById('openBtn').style.visibility = 'hidden';
}
function closeNav() {
    if (window.innerWidth < 700) {
        document.getElementById('sidebar').style.left = '-200px';
        document.getElementById('openBtn').style.visibility = 'visible';
    }
}

window.onresize = () => {
    if (window.innerWidth > 700)
        openNav();
    else
        closeNav();
}