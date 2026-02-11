dinosscript.script.js
// ページ読み込み時にメッセージを表示
window.addEventListener('load', function() {
    console.log('恐竜図鑑へようこそ！');
});

// カードをクリックしたときに背景色を変更
const cards = document.querySelectorAll('.dinosaur-card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const colors = ['#f0f9ff', '#fef3c7', '#fce7f3'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
        
        setTimeout(() => {
            this.style.backgroundColor = 'white';
        }, 1000);
    });
});
