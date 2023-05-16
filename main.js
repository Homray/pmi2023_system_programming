var boss = document.getElementById("boss")

boss.onclick = function(){
    boss.style.color = "red";
}

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .menu').toggleClass('active');
    });
});
