'use strict';

angular.module('buzzApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/card', {
                templateUrl: 'app/card/card.html',
                controller: 'CardCtrl'
            });
    });

function yellBingo() {
    //placeholder for basic win indicator
    var bingo = document.getElementById('card').rows[0].cells[0];
    bingo.style.background = '#c00';
}

function noBingo() {
    //removes basic indicator
    var bingo = document.getElementById('card').rows[0].cells[0];
    bingo.style.background = '#45adc5';
}

function checkForBingo() {
    //basic logic
    var card = document.getElementById('card');
    if ((card.rows[1].cells[0].marker && // 1st row
            card.rows[1].cells[1].marker &&
            card.rows[1].cells[2].marker &&
            card.rows[1].cells[3].marker &&
            card.rows[1].cells[4].marker) ||
        (card.rows[2].cells[0].marker && // 2nd row
            card.rows[2].cells[1].marker &&
            card.rows[2].cells[2].marker &&
            card.rows[2].cells[3].marker &&
            card.rows[2].cells[4].marker) ||
        (card.rows[3].cells[0].marker && // 3rd row
            card.rows[3].cells[1].marker &&
            //card.rows[3].cells[2].marker && // free space
            card.rows[3].cells[3].marker &&
            card.rows[3].cells[4].marker) ||
        (card.rows[4].cells[0].marker && // 4th row
            card.rows[4].cells[1].marker &&
            card.rows[4].cells[2].marker &&
            card.rows[4].cells[3].marker &&
            card.rows[4].cells[4].marker) ||
        (card.rows[5].cells[0].marker && // 5th row
            card.rows[5].cells[1].marker &&
            card.rows[5].cells[2].marker &&
            card.rows[5].cells[3].marker &&
            card.rows[5].cells[4].marker) ||
        (card.rows[1].cells[0].marker && // 1st column
            card.rows[2].cells[0].marker &&
            card.rows[3].cells[0].marker &&
            card.rows[4].cells[0].marker &&
            card.rows[5].cells[0].marker) ||
        (card.rows[1].cells[1].marker && // 2nd column
            card.rows[2].cells[1].marker &&
            card.rows[3].cells[1].marker &&
            card.rows[4].cells[1].marker &&
            card.rows[5].cells[1].marker) ||
        (card.rows[1].cells[2].marker && // 3rd column
            card.rows[2].cells[2].marker &&
            //card.rows[3].cells[2].marker && // free space
            card.rows[4].cells[2].marker &&
            card.rows[5].cells[2].marker) ||       
        (card.rows[1].cells[3].marker && // 4th column
            card.rows[2].cells[3].marker &&
            card.rows[3].cells[3].marker &&
            card.rows[4].cells[3].marker &&
            card.rows[5].cells[3].marker) ||       
        (card.rows[1].cells[4].marker && // 5th column
            card.rows[2].cells[4].marker &&
            card.rows[3].cells[4].marker &&
            card.rows[4].cells[4].marker &&
            card.rows[5].cells[4].marker) ||       
        (card.rows[1].cells[0].marker && /* Diagonal l-r */
            card.rows[2].cells[1].marker &&
            //card.rows[3].cells[2].marker && // free space
            card.rows[4].cells[3].marker &&
            card.rows[5].cells[4].marker) ||
        (card.rows[1].cells[4].marker && /* Diagonal / */
            card.rows[2].cells[3].marker &&
            //card.rows[3].cells[2].marker && // free space
            card.rows[4].cells[1].marker &&
            card.rows[5].cells[0].marker)) {
        yellBingo();
    } else {
        noBingo();
    }
}

function select(square) {
    if (square.marker == '1') {
        square.marker = 0;
        $(square).css('background', '#f7f2ef');
        $(square).css('color', '#756d66');
    } else {
        square.marker = 1;
        $(square).css('background', '#45adc5');
        $(square).css('color', '#fff');
    }
    checkForBingo();
}