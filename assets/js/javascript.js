



// slider 

$('#autoplay').change(function(){
    setInterval(function(){
        moveLeft();
    },3000);
});
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var slideCount = $('#slider ul li').length;

    var slideUlWidth = slideWidth * slideCount;

    $('#slider').css({width: slideWidth, height: slideHeight});
    $('#slider ul').css({width: slideUlWidth, height: slideHeight, marginLeft: -slideWidth})

    $('#slider ul li').last().prependTo('#slider ul');
    
  
    function moveLeft(){
        $('#slider ul').animate({
            left : +slideWidth
        },'slow',function(){
            $('#slider ul li').last().prependTo('#slider ul');
            $('#slider ul').css('left','');
        } );
    }

    function moveRight(){
        $('#slider ul').animate({
            Right : -slideWidth
        },'slow',function(){
            $('#slider ul li').first().appendTo('#slider ul');
            $('#slider ul').css('left','');
        } );
    }

    $('a.control_prev').click(function(){
        moveLeft();
    });

    $('a.control_next').click(function(){
        moveRight();
    });


// Hints

    $('.flip').click(function(){
        $('.panel').slideUp('slow');
        $(this).next().slideToggle('slow');
    });


//Slider2
$('#autoplay2').change(function(){
    setInterval(function(){
        moveLeft();
    },3000);
});
    var slideW = $('#slider2 ul li').width();
    var slideH = $('#slider2 ul li').height();
    var slideC = $('#slider2 ul li').length;

    var slideUlW = slideW * slideC;

    $('#slider2').css({width: slideW, height: slideH});
    $('#slider2 ul').css({width: slideUlW, height: slideH, marginLeft: -slideW})

    $('#slider2 ul li').last().prependTo('#slider2 ul');

    function moveLeft1(){
        $('#slider2 ul').animate({
            left : +slideW
        },'slow',function(){
            $('#slider2 ul li').last().prependTo('#slider2 ul');
            $('#slider2 ul').css('left','');
        } );
    }

    function moveRight2(){
        $('#slider2 ul').animate({
            Right : -slideW
        },'slow',function(){
            $('#slider2 ul li').first().appendTo('#slider2 ul');
            $('#slider2 ul').css('left','');
        } );
    }

    $('a.control_prev2').click(function(){
        moveLeft1();
    });

    $('a.control_next2').click(function(){
        moveRight2();
    });


//modal

    var btn = document.getElementById('btn');

    btn.onclick = function(){
        var openModal = document.getElementById('modal');
            openModal.style.display = "block";
    }

    var closeBtn = document.getElementsByClassName('closemodal')[0];

    closeBtn.onclick = function(){
        var openModal = document.getElementById('modal');
            openModal.style.display = "none";
    }



    // --- mobile function ------------------------------------------

    function openNav(){
        var nav = document.getElementById('menu');
            nav.style.width = '100%';
    }
    
    function closeNav(){
        var nav = document.getElementById('menu');
            nav.style.width = '0'
    }







