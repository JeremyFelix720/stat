window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
    
    $(".details + section table"). hide();

    $(".details.recipients").click(function(){
        $(".details.recipients + section table.recipients").fadeToggle("500");
        $(".details.recipients img").toggleClass("rotate90");
    });

    $(".details.openingRate").click(function(){
        $(".details.openingRate + section table.openingRate").fadeToggle("500");
        $(".details.openingRate img").toggleClass("rotate90");
    });

    $(".details.openingTime").click(function(){
        $(".details.openingTime + section table.openingTime").fadeToggle("500");
        $(".details.openingTime img").toggleClass("rotate90");
    });

    $(".details.reactivityRate").click(function(){
        $(".details.reactivityRate + section table.reactivityRate").fadeToggle("500");
        $(".details.reactivityRate img").toggleClass("rotate90");
    });

    $(".details.clickRate").click(function(){
        $(".details.clickRate + section table.clickRate").fadeToggle("500");
        $(".details.clickRate img").toggleClass("rotate90");
    });

    $(".details.bouncesRate").click(function(){
        $(".details.bouncesRate + section table.bouncesRate").fadeToggle("500");
        $(".details.bouncesRate img").toggleClass("rotate90");
    });

    $(".details.complaintRate").click(function(){
        $(".details.complaintRate + section table.complaintRate").fadeToggle("500");
        $(".details.complaintRate img").toggleClass("rotate90");
    });

    $(".details.unsubscribeRate").click(function(){
        $(".details.unsubscribeRate + section table.unsubscribeRate").fadeToggle("500");
        $(".details.unsubscribeRate img").toggleClass("rotate90");
    });

  });
