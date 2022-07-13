let app = angular.module("cleanBlog", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "login.html",
        })
        .when("/login", {
            templateUrl: "login.html",
        })
        .when("/blog", {
            templateUrl: "blog.html",
        })
});



app.controller('blogLogin', function ($scope, $http) {
    let initUser = netlifyIdentity.currentUser();

    netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();

    });

    netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!blog');
        }
        netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/');
    });
});




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




