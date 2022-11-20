// function alertButton() {
//     alert('クリックされました')
// }

// const redOpa = document.querySelector('.red');
// const redOpapa = addEventListener('click', () => {
//     redOpa.classList.toggle('.open');
// });

// const openMenuBtn = document.querySelector('.side-menu-btn');
// // const sideMenu = document.getElementsByClassName('.side-menu')
// const openMenu = openMenuBtn.addEventListener('click', () => {
//     sideMenu.classList.toggle('open');
// });
window.addEventListener("load", function(){
    
    // const closeMenu = closeMenuBtn.addEventListener('click', function() {
    //     sideMenu.classList.toggle('close');
    // });
    
});
// const closeMenuBtn =document.getElementById('closeBtn');
// const sideMenu = document.getElementById('side-menu');
// if(!closeMenuBtn){return false;}
// const closeMenu = function() {
//     sideMenu.classList.toggle('close');
//     console.log('aiueo')
// };

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('close');
};

// <--------------   レストランタイプの画像配列と切り替え処理     -------------------->
let restaurant_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/restaurant-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-wing.jpg"]
);
let havePikmin = [0,1]
function restaurantChangeImg(i, c) {
    if (havePikmin[i] == 1) {
        havePikmin[i] = 0;
    } else {
        havePikmin[i] ++;
    }
    const pikminImg = document.getElementsByClassName('restaurantPikminImg');
    pikminImg[c].src=restaurant_pic_srcs[c][havePikmin[i]];
    console.log(havePikmin[i]);
    // console.log(havePikmin.reduce(function(sum, element){return sum+element}, 0))
}

// <--------------   カフェタイプの画像配列と切り替え処理の関数     -------------------->
let cafe_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/cafe-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-wing.jpg"]
);
function cafeChangeImg(i, c) {
    if (havePikmin[i] == 1) {
        havePikmin[i] = 0;
    } else {
        havePikmin[i] ++;
    }
    const pikminImg = document.getElementsByClassName('cafePikminImg');
    pikminImg[c].src=cafe_pic_srcs[c][havePikmin[i]];
    console.log(havePikmin[i]);
    // console.log(havePikmin.reduce(function(sum, element){return sum+element}, 0))
}

// <--------------   薬局タイプの画像配列と切り替え処理     -------------------->
let pharmacy_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/pharmacy-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-wing.jpg"]
);
function pharmacyChangeImg(i, c) {
    if (havePikmin[i] == 1) {
        havePikmin[i] = 0;
    } else {
        havePikmin[i] ++;
    }
    const pikminImg = document.getElementsByClassName('pharmacyPikminImg');
    pikminImg[c].src=pharmacy_pic_srcs[c][havePikmin[i]];
    console.log(havePikmin[i]);
    // console.log(havePikmin.reduce(function(sum, element){return sum+element}, 0))
}

// <--------------   水辺タイプの画像配列と切り替え処理     -------------------->
let river_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/river-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-wing.jpg"]
);
function riverChangeImg(i, c) {
    if (havePikmin[i] == 1) {
        havePikmin[i] = 0;
    } else {
        havePikmin[i] ++;
    }
    const pikminImg = document.getElementsByClassName('riverPikminImg');
    pikminImg[c].src=river_pic_srcs[c][havePikmin[i]];
    console.log(havePikmin[i]);
    // console.log(havePikmin.reduce(function(sum, element){return sum+element}, 0))
}

// <--------------   公園タイプの画像配列と切り替え処理     -------------------->
let park_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/park-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-wing.jpg"]
);
function parkChangeImg(i, c) {
    if (havePikmin[i] == 1) {
        havePikmin[i] = 0;
    } else {
        havePikmin[i] ++;
    }
    const pikminImg = document.getElementsByClassName('parkPikminImg');
    pikminImg[c].src=park_pic_srcs[c][havePikmin[i]];
    console.log(havePikmin[i]);
    // console.log(havePikmin.reduce(function(sum, element){return sum+element}, 0))
}

