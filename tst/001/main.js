$("nav li").click(function () {
    var index=$(this).index();
    
    $("main content").hide();
    $("main content").eq(index).show();
    
    $("nav li").removeClass("active");
    $("nav li").eq(index).addClass("active");
  });