

// <--------------   サイドメニューのopen, close関数     -------------------->

function openMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const openBtn = document.querySelector('#openBtn');
    sideMenu.classList.toggle('open');
    sideMenu.classList.remove('close');
    openBtn.classList.toggle('hide');
    openBtn.classList.remove('show');
}

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const openBtn = document.querySelector('#openBtn');
    sideMenu.classList.remove('open');
    sideMenu.classList.toggle('close');
    openBtn.classList.toggle('show');
    openBtn.classList.remove('hide');
    // sideMenu.classList.toggle('close');
    // sideMenu.classList.remove('open');
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
let havePikmin = [0, 1]
let result = []
function restaurantChangeImg(i, c) {
    
    // if (havePikmin[i] == 1) {
    //     havePikmin[i] = 0;
    // } else {
    //     havePikmin[i] ++;
    // }
    const pikminImg = document.getElementsByClassName('restaurantPikminImg');
    if (pikminImg[c].src=restaurant_pic_srcs[c][0]) {
        pikminImg[c].src=restaurant_pic_srcs[c][1];
    } else if (pikminImg[c].src=restaurant_pic_srcs[c][1]) {
        pikminImg[c].src=restaurant_pic_srcs[c][0];
    }
    

    
    // pikminImg[c].src=restaurant_pic_srcs[c][havePikmin[i]];
    // console.log(pikminImg[c].src);
    // console.log(havePikmin.reduce(function(sum, element){return sum+element}, 0))
    // if(havePikmin[i] == 1) {
    //     result.push(1);
    // }else {
    //     result.shift();
    // }
    // console.log(result)
    // console.log(result.length)
}
// const count = result.length;
// console.log(count)


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

