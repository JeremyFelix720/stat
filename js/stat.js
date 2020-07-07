window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
    
    $(".details + table"). hide();

    $(".details.recipients").click(function(){
        $(".details.recipients + table.recipients").fadeToggle("500");
        $(".details.recipients img").toggleClass("rotate90");
    });

    $(".details.openingRate").click(function(){
        $(".details.openingRate + table.openingRate").fadeToggle("500");
        $(".details.openingRate img").toggleClass("rotate90");
    });

    $(".details.openingTime").click(function(){
        $(".details.openingTime + table.openingTime").fadeToggle("500");
        $(".details.openingTime img").toggleClass("rotate90");
    });

    $(".details.reactivityRate").click(function(){
        $(".details.reactivityRate + table.reactivityRate").fadeToggle("500");
        $(".details.reactivityRate img").toggleClass("rotate90");
    });

    $(".details.clickRate").click(function(){
        $(".details.clickRate + table.clickRate").fadeToggle("500");
        $(".details.clickRate img").toggleClass("rotate90");
    });

    $(".details.bouncesRate").click(function(){
        $(".details.bouncesRate + table.bouncesRate").fadeToggle("500");
        $(".details.bouncesRate img").toggleClass("rotate90");
    });

    $(".details.complaintRate").click(function(){
        $(".details.complaintRate + table.complaintRate").fadeToggle("500");
        $(".details.complaintRate img").toggleClass("rotate90");
    });

    $(".details.unsubscribeRate").click(function(){
        $(".details.unsubscribeRate + table.unsubscribeRate").fadeToggle("500");
        $(".details.unsubscribeRate img").toggleClass("rotate90");
    });

    $(".details.co2").click(function(){
        $(".details.co2 + table.co2").fadeToggle("500");
        $(".details.co2 img").toggleClass("rotate90");
    });

  });
