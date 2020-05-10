# WebTurtle

Commands : 
1.	Move N units : **forward X**, X can be negative
2.	Rotate in XZ : **rotate X Angle**. Defaults to right turns. Can be turned left if X is replaced with -X or angle is negative.
3.  Rotate in XY : **rotate Y Angle**. Defaults to right turns. Can be turned left if Y is replaced with -Y or angle is negative.
// Note Rotation along YZ is not supported as it would be functionally similar to other two since there is symmetry along one axis.
4.	Lift pen: **up**
5.  Put down pen: **down**
4.	Repeat Sequence : **repeat (Count) , [Sequence,]** . Repeat a series of actions for n counts. Actions are separated by a comma (,). 
5.	Curve(Angle, Radius) : This can be accomplished using a suitable Repeat Command. So, repeat 32, forward 3, rotate X 11.25 would create a circle (not made of smooth splines arguably, but still)
6.	Recurse (Start) (Intervals), [Sequence,] : Recurse on a sequence. Regrettably, this is a hack at best and isn’t perfect. While it works, results are not as intended and there is still work required to draw figures like trees/leaves.
