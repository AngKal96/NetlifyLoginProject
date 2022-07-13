// let app = angular.module("cleanBlog", ["ngRoute"]);

// app.config(function ($routeProvider) {
//     $routeProvider
//         .when("/", {
//             templateUrl: "login.html",
//         })
//         .when("/login", {
//             templateUrl: "login.html",
//         })
//         .when("/blog", {
//             templateUrl: "blog.html",
//         })
// });

//let user = netlifyIdentity.currentUser();

netlifyIdentity.on('init', () => {
    initUser = netlifyIdentity.currentUser();
    //console.log(user);
});



netlifyIdentity.on('login', () => {
    if (initUser !== null) {
        window.location.replace('blog');
    }
    netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    window.location.replace('index');
});


// netlifyIdentity.open = () => {

//     exports.handler = async (event, context) => {
//         const isLoggedIn = document.querySelector(".isLoggedIn");
//         const notLoggedIn = document.querySelector(".notLoggedIn");

//         if (context.clientContext.user) {
//             return {
//                 statusCode: 200,
//                 body: JSON.stringify(isLoggedIn)
//             };
//         }

//         return {
//             statusCode: 401,
//             body: JSON.stringify(notLoggedIn)
//         }
//     };


    // netlifyIdentity.on('init', user => {

    // });



    // // Get the current user:
    // // Available after on('init') is invoked


    // // Bind to events

// };
// netlifyIdentity.on('login', user => console.log('login', user));
// netlifyIdentity.on('logout', () => console.log('Logged out'));
// netlifyIdentity.on('error', err => console.error('Error', err));
// netlifyIdentity.on('open', () => console.log('Widget opened'));
// netlifyIdentity.on('close', () => console.log('Widget closed'));

// // // Unbind from events
// netlifyIdentity.off('login'); // to unbind all registered handlers
// netlifyIdentity.off('login', handler); // to unbind a single handler

// // // Close the modal
// netlifyIdentity.close();

// // // Log out the user
// netlifyIdentity.logout();


    // isLoggedIn = () => {

    //     netlifyIdentity.on('login', user => {
    //         userLoggedOn === true;
    //     }
    //     )
    // };

