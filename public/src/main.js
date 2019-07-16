document.addEventListener("keydown", (e) => {
    document.querySelector(`li[data-key="${e.keyCode}"]`).classList = ['active'];
});

document.addEventListener("keyup", (e) => {
    document.querySelector(`li[data-key="${e.keyCode}"]`).classList = [];
});