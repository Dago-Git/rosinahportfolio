$(document).ready(function() {
    $("nav ul li a").click(function(e) {
        e.preventDefault();
        var targetSection = $(this).attr("href");
        var offset = $(targetSection).offset().top;

        $("html, body").animate({
            scrollTop: offset
        }, 1000);
    });

    // Retarde l'ajout de la classe pour démarrer l'animation
    setTimeout(function() {
        $(".move-left").addClass("move-left-animation");
    }, 1000); // Délai en millisecondes

      // Activer le carrousel Bootstrap
      $("#myCarousel").carousel({
        interval: 3000 // Temps en millisecondes entre chaque image (3 secondes dans cet exemple)
    });

    $(window).scroll(function() {
        // Récupérer tous les éléments avec l'id "headMenu"
        var elements = $('#headMenu');
    
        // Ajouter la classe "menu-green" à tous les éléments
        elements.addClass('menu-green');
      });
});
