what is k positions rotation ?
“Rotate by k positions” means you move the elements of an array k steps to the left or right.

Example: Right Rotation - Array: [1, 2, 3, 4, 5]

k = 1 → move every element 1 step to the right: [5, 1, 2, 3, 4]
k = 2 → move every element 1 step to the right: [4, 5, 1, 2, 3]
k = 3 → move every element 1 step to the right: [3, 4, 5, 1, 2]
k = 4 → move every element 1 step to the right: [2, 3, 4, 5, 1]
k = 5 → move every element 1 step to the right: [1, 2, 3, 4, 5] // here the array will same as original


Example: Left Rotation - Array: [1, 2, 3, 4, 5]

k = 1 → move every element 1 step to the left: [2, 3, 4, 5, 1]
k = 2 → move every element 1 step to the left: [3, 4, 5, 1, 2]
k = 2 → move every element 1 step to the left: [4, 5, 1, 2, 3]
k = 2 → move every element 1 step to the left: [5, 1, 2, 3, 4]
k = 2 → move every element 1 step to the left: [1, 2, 3, 4, 5] // here the array will same as original


So basically, k tells you how many positions you shift the array elements.


why we need to do it  k = k % arr.length ??

so the problem without k % arr.length will be like 
let arr = [1, 2, 3, 4, 5];
let k = 7;

so we want to rotate right by 7 positions.
If we try to rotate 7 times, we would be doing extra work because: Rotating 5 times (the length of the array) brings the array back to the same position. as we see the upper.


Why k % arr.length ?? 
% is the modulo operator, it gives the remainder.
k % arr.length ensures k never exceeds the array length. like - k = 7 % 5; // 7 divided by 5 leaves remainder 2 so this means rotating by 7 is the same as rotating by 2

In short: k = k % arr.length → keep k within array size so rotation works correctly and efficiently.

note - So 7 rotations = 5 (full cycle) + 2 extra rotations → same as 2 rotations 
// you can get idia like if length is 5 of the array and you are tring 7 time so whatever out will be of 2 same will be 7 