#persistent

F1::
    SetTimer, Timed, 50
    curTime = 1800

Timed:
--curTime
timed := round(curTime/20)
ToolTip, A new Twilight Strand instance is ready in %timed%, 0,0
if (%timed% == 0){
    Reload
}