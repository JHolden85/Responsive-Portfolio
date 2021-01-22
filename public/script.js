// FOR THE RAW CODE DROPDOWN EVENTS
function dropdownFunction(){
    document.getElementById("gitDropdown").classList.toggle("show");
    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')){
            var dropdowns = document.getElementsByClassName("dropdown-content");
            console.log(dropdowns);
            var i;
            for (i = 0; i < dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

// window.onclick = function(event) {
//     if(!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         console.log(dropdowns);
//         var i;
//         for (i = 0; i < dropdowns.length; i++){
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')){
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
//==============================================================

//FOR THE DEPLOYED PROJECTS
function secondDownFunction(){
    document.getElementById("depDropdown").classList.toggle("show");
    window.onclick = function(event) {
        if(!event.target.matches('.depbtn')){
            var depdropdowns = document.getElementsByClassName("depdown-content");
            console.log(depdropdowns);
            var i;
            for (i = 0; i < depdropdowns.length; i++){
                var openDepdown = depdropdowns[i];
                if (openDepdown.classList.contains('show')){
                    openDepdown.classList.remove('show');
                }
            }
        }
    }
}

// window.onclick = function(event) {
//     if(!event.target.matches('.depbtn')){
//         var depdropdowns = document.getElementsByClassName("depdown-content");
//         console.log(depdropdowns);
//         var i;
//         for (i = 0; i < depdropdowns.length; i++){
//             var openDepdown = depdropdowns[i];
//             if (openDepdown.classList.contains('show')){
//                 openDepdown.classList.remove('show');
//             }
//         }
//     }
// }


//===============================================================

// FOR THE NAV BAR
// window.onscroll = function() {stickyFunction()};

// let navbar = document.getElementById("navbar");
// // console.log(navbar);

// var sticky = navbar.offsetTop;

// function stickyFunction() {
//     if (window.pageYOffset >= sticky){
//         navbar.classList.add("sticky")
//     } else{
//         navbar.classList.remove("sticky");
//     }
// }