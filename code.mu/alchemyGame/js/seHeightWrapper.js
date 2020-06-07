const elementsWrapper = document.getElementById('elementsWrapper');

setHeghtWrapper();
window.addEventListener('resize', setHeghtWrapper);

function setHeghtWrapper() {
    const windowHeight = window.innerHeight;
    elementsWrapper.style.height = windowHeight - 100 + 'px';
};
