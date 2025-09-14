$(document).ready(function(){
	$("#hamburger").click(function(){
		if($(this).hasClass("hamburger-open")){
			$("#hamburger").removeClass("hamburger-open");
			$(".main__menu").removeClass("active");
			document.body.classList.remove("scroll_block");
		} else {
			$("#hamburger").addClass("hamburger-open");
			$(".main__menu").addClass("active");
			document.body.classList.add("scroll_block");
		}
	});

	$(".nav--title").click(function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
		} else {
			$(this).parent().addClass("active");
		}
	});


	$(".item-content").click(function(){
		$("#hamburger").removeClass("hamburger-open");
		$(".main__menu").removeClass("active");
		document.body.classList.remove("scroll_block");
	});
    

	var totalImages = $("img").length;
	var imagesLoaded = 0;

	function checkImagesLoaded() {
		imagesLoaded = 0;
		$("img").each(function() {
			if (this.complete || $(this).height() > 0) {
				imagesLoaded++;
			}
		});

		var percentage = Math.round((imagesLoaded / totalImages) * 100);
		$('#loadingText').text(`${percentage}%`);
		
		if (imagesLoaded === totalImages) {
			$('.page-loader').fadeOut(800);
			clearInterval(checkInterval);
		}
	}

	var checkInterval = setInterval(checkImagesLoaded, 250);
});

const links = document.querySelectorAll("a.item-content");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 120;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 150;
    var foundValidSection = false;
    var lastSectionId = $('.nav--list li a.active').parent().attr('class') || 'section_1';

    $('p').each(function(i) {
        if ($(this).position().top < scrollDistance) {
            if ($(this).html().trim() === '' || !$(this).attr('id')) {
                return;
            }

            var sectionId = $(this).attr('id');
            if ($('.nav--list li.' + sectionId).length > 0) {
                foundValidSection = true;
                $('.nav--list li a.active').removeClass('active');
                $('.nav--list li.' + sectionId + ' a').addClass('active');
                $('.main__photo--background.active').removeClass('active');
                $('.main__photo--background.el_' + sectionId).addClass('active');
                if (!$('.nav--list li.' + sectionId).parent().parent().hasClass('active')) {
                    $('.nav--list li.' + sectionId).parent().parent().addClass('active');
                }
                lastSectionId = sectionId;
            }
        }
    });

    if (!foundValidSection) {
        $('.nav--list li a.active').removeClass('active');
        $('.nav--list li.section_1 a').addClass('active');
        $('.main__photo--background.active').removeClass('active');
        $('.main__photo--background.el_section_1').addClass('active');
        if (!$('.nav--list li.section_1').parent().parent().hasClass('active')) {
            $('.nav--list li.section_1').parent().parent().addClass('active');
        }
    }
}).scroll();