// //classic mode

// // statically import form module.
// import form from "./form";

// window.onload = function () {
//     let btn = document.getElementById('load');
//     btn.addEventListener('click', function () {
//         document.getElementById('form').appendChild(form.render());
//     });
// };


window.onload = function () {
    let btn = document.getElementById('load');
    btn.addEventListener('click', function () {
        // dynamically import form module at run time.
        import(/* webpackChunkName: "form" */ './form').then(function (form) {
            identification.appendChild(form.default.render());
        });
    });
};


//you can uncomment this lines to see how module is auto loaded directly from webpack

// import(/* webpackChunkName: "lodash" */ 'lodash').then(function ({default:_}) {
// 	document.getElementById('identification').innerHTML = _.flatten([1, [2, [3, [4]], 5]]).join('-');
// });