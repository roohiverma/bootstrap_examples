	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(this).find('i').toggleClass('fa fa-angle-double-left-left').toggleClass('fa fa-angle-double-right');
    });
     $("#toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");

    });
