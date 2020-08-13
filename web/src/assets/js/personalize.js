(function() {
    const cage = 3*365*24*60*60;
    document.cookie = "visited=true; path=/; max-age=" + cage; 
    const article = document.querySelector(".data-article");
    const challenge = document.querySelector(".data-challenge");
    const quiz = document.querySelector(".data-quiz");

    if (article || challenge || quiz) {
        // update ids in the cookie 
    }
})();
