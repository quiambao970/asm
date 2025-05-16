function headerStyle() {
	if($('.main-header').length){
		var windowpos = $(window).scrollTop();
		var siteHeader = $('.header-style-one');
		var scrollLink = $('.scroll-to-top');
		var sticky_header = $('.main-header .sticky-header');
		if (windowpos > 100) {
			sticky_header.addClass("fixed-header animated slideInDown");
			scrollLink.fadeIn(300);
		}else {
			sticky_header.removeClass("fixed-header animated slideInDown");
			scrollLink.fadeOut(300);
		}
		if (windowpos > 1) {
			siteHeader.addClass("fixed-header");
		}else {
			siteHeader.removeClass("fixed-header");
		}
	}
}
headerStyle();
	
$(window).on('scroll', function() {
	headerStyle();
});

$(document).ready(function() {
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 0);
		});
	}

    if (window.innerWidth < 900) {
        $('.sidebar').addClass('').removeClass('sidebar');
        $('.content-wrapper').addClass('').removeClass('content-wrapper');
    }
	

    if($('#map').length > 0){
        const map = L.map('map').setView([29.949149, -95.530085], 9);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

        const LeafIcon = L.Icon.extend({
            options: {
                iconSize:     [25, 41]
            }
        });

        const greenIcon = new LeafIcon({iconUrl: 'https://actualseomedia.com/wp-content/themes/asm/js/images/images/marker-icon-2x.png'});

        const marker1 = L.marker([30.156500, -95.469797], {icon: greenIcon}).addTo(map);
        marker1.on('click', function () {
            window.open('https://maps.google.com/?q=10210+Grogans+Mill+Rd+Suite+230,+The+Woodlands,+TX+77380,+USA&ftid=0x864736b71f602361:0x75d995e827d6d84d', '_blank');
        });

        const marker2 = L.marker([29.949149, -95.530085], {icon: greenIcon}).addTo(map);
        marker2.on('click', function () {
            window.open('https://maps.google.com/?q=16310+Tomball+Pkwy+Unit+1303,+Houston,+TX+77064,+USA&ftid=0x8640ce778c81f02d:0x9dd087cf5afbdae1', '_blank');
        });

        const marker3 = L.marker([29.740919, -95.778739], {icon: greenIcon}).addTo(map);
        marker3.on('click', function () {
            window.open('https://maps.google.com/?q=24044+Cinco+Village+Center+Blvd+%23100d,+Katy,+TX+77494,+USA&ftid=0x864121c82645e9ff:0x32c6589ceaf90303', '_blank');
        });

        const marker4 = L.marker([29.746892, -95.606642], {icon: greenIcon}).addTo(map);
        marker4.on('click', function () {
            window.open('https://maps.google.com/?q=1880+S+Dairy+Ashford+Rd+Suite+682,+Houston,+TX+77077,+USA&ftid=0x8640dc63c3fe3537:0xf3d300b13fecdadb', '_blank');
        });

        const marker5 = L.marker([29.7373, -95.4612679], {icon: greenIcon}).addTo(map);
        marker5.on('click', function () {
            window.open('https://maps.google.com/?q=2800+Post+Oak+Blvd+%234100,+Houston,+TX+77056,+USA&ftid=0x8640c16e4d15db39:0xd7e0c8a03ef91cfb', '_blank');
        });

        const marker6 = L.marker([29.5721908, -95.6600841], {icon: greenIcon}).addTo(map);
        marker6.on('click', function () {
            window.open('https://maps.google.com/?q=19901+Southwest+Fwy+%23310,+Sugar+Land,+TX+77479,+USA&ftid=0x8640e3cdbfb2de73:0x8260195979a8847a', '_blank');
        });
    }
});