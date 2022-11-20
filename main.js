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


let pic_srcs = new Array(["image/have-pikmins/cafe-red.jpg", "image/type-logo/cafe-logo.jpg"]);
let num = 0;
let nums = []
nums[0] = 0
nums[1] = 100
function changeImg(i) {
    if (nums[i] == 1) {
        nums[i] = 0;
    } else {
        nums[i] ++;
    }
    // document.querySelector('.pikminImg').src=pic_srcs[num];
    document.getElementsByClassName('pikminImg')[i].src=pic_srcs[i][nums[i]];
    console.log(nums.reduce(function(sum, element){return sum+element}, 0))
}


// const closeMenu = closeMenuBtn.addEventListener('click', () => {
//     sideMenu.classList.toggle('close');
// });



// const pikmin = document.getElementsByClassName('pikmin');
// let flug = 0;
// const flgChange = pikmin.addEventListener('click', () => {
    
// })


