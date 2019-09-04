var hashLinks = document.querySelectorAll("a[href^='#']");
        [].forEach.call(hashLinks, function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                history.pushState({}, "", link.href);
                history.pushState({}, "", link.href);
                history.back();
            });
        });
