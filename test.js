var Timer;var TotalSeconds;function CreateTimer(TimerID,Time){Timer=document.getElementById(TimerID);TotalSeconds=Time;Timer.innerHTML=TotalSeconds;window.setTimeout("CountDown()",10);}
function CountDown(){if(TotalSeconds<=1)
{location.reload(true);return;}
TotalSeconds-=1;Timer.innerHTML=TotalSeconds;window.setTimeout("CountDown()",10);}