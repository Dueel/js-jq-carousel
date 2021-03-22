function prevImg(){

    var currentImg = $('.active');
    var prevImg = currentImg.prev();
    currentImg.removeClass('active');

    if (currentImg.hasClass('first')){
        
        $('.last').addClass('active')
    } else {
        
        prevImg.addClass('active');
    }
};

function nextImg(){

    var currentImg = $('.active');
    var nextImg = currentImg.next();
    currentImg.removeClass('active');

    if (currentImg.hasClass('last')){
        
        $('.first').addClass('active');
    } else {
        
        nextImg.addClass('active');
    }
};

function init(){
    
    $('.next').click(nextImg);
    $('.prev').click(prevImg);
};

$('document').ready(init);


// - associare il click alle due freccie; - 

// - selezionare l'immagine attuale -

// - al click, togliere la classe .active all' img attuale e associarla a quella successiva con .next() - 

// - far ripartire il giro con una codizione (associare altre due classi: first, last)