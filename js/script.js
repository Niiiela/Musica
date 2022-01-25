var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

    icon.onclick = function()
    {
        if(mysong.paused)
        {
            mysong.play();
            icon.scr = "../img/2.jpg";
        }else
        {
            mysong.pause();
            icon.src="../img/play.png";
        }
    }