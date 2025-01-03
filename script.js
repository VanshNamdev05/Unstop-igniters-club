    const moreButton = document.getElementById('scroll-to-bottom');

    moreButton.addEventListener('click', () => {

        window.scrollTo({

            top: document.body.scrollHeight,

            behavior: 'smooth'

        });
    });

    const backToTopButton = document.getElementById('scroll-to-top');

    backToTopButton.addEventListener('click', () => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });
