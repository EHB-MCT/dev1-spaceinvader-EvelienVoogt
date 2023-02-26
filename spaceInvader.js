"use strict";

drawSpaceInvader();

function drawSpaceInvader() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = "black";
    context.fillRect(0, 0, 300, 300);

    context.fillStyle = "#00FF00";
    context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(275, 25);
    context.lineTo(275, 75);
    context.lineTo(25, 75);
    context.lineTo(25, 25);
    context.fill();

    context.beginPath();
    context.fillRect(25, 125, 100, 100);

    context.beginPath();
    context.fillRect(175, 125, 100, 100);

    context.beginPath();
    context.moveTo(75, 225);
    context.lineTo(225, 225);
    context.lineTo(225, 275);
    context.lineTo(75, 275);
    context.lineTo(75, 2250);
    context.fill();

}