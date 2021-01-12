(function ($) {

    function behaviors() {

        $('.header-block .menu a.toggle')
            .once()
            .click(function (e) {
                let li = $(this).closest('li');

                $(this)
                    .closest('.menu')
                    .find('li')
                    .not(li)
                    .find('ul')
                    .hide();

                li.find('ul').toggle();

                return false;
            });


        $('.header-block .menu')
            .once('dropdown-hide-outside-click', function () {
                var selector = '.header-block .menu .toggle + ul';

                $(document).click(function (event) {
                    $target = $(event.target);

                    if (
                        !$target.closest(selector).length &&
                        $(selector).is(":visible")
                    ) {
                        $(selector).hide();
                    }
                });
            });


        $('[data-ui-dialog-link]')
            .once('ui-dialog')
            .click(function () {
                var $this = $(this);
                var code = $this.attr('data-ui-dialog-link');
                var orderName = $this.attr('data-order-name');

                var dialog = $('[data-ui-dialog="' + code + '"]');

                if (!dialog.length) return false;

                if (orderName) {
                    dialog.find('input[name="order_name"]').val(orderName);
                }

                var width = dialog.attr('data-ui-dialog-width');
                var title = dialog.attr('data-ui-dialog-title');

                dialog.dialog({
                    width: width,
                    title: title,
                    modal: true
                });

                return false;
            });


        $('.slider-block .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                dots: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true
            });


        $('[data-tab-link]')
            .once('tab')
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('[data-tabs]');
                var code = $this.attr('data-tab-link');

                wrapper.find('[data-tab-content]').removeClass('active');

                $('[data-tab-content="' + code + '"]').addClass('active');

                wrapper.find('[data-tab-link]').removeClass('active');

                $this.addClass('active');

                return false;
            });


        $('[data-scroll]')
            .once('scroll', function () {
                new PerfectScrollbar(this);
            });


        $('.filters-form select')
            .once('select')
            .chosen({
                disable_search_threshold: 10
            });


        $('.doctors-list.owl-carousel')
            .once()
            .owlCarousel({
                loop: true,
                responsive: {
                    0: {
                        autoWidth: false,
                        items: 1,
                        slideBy: 1,
                        nav: false,
                        dots: true,
                        margin: 0
                    },
                    450: {
                        autoWidth: false,
                        items: 2,
                        slideBy: 2,
                        margin: 20,
                        nav: false,
                        dots: true
                    },
                    768: {
                        autoWidth: true,
                        margin: 30,
                        nav: false,
                        dots: true
                    },
                    1200: {
                        autoWidth: true,
                        margin: 58,
                        nav: true,
                        dots: false,
                        slideBy: false
                    },
                }
            });


        $('a.colorbox')
            .once('colorbox')
            .colorbox({
                maxWidth: '100%',
                maxHeight: '100%'
            });


        $('[data-mobile-menu-toggle]')
            .once()
            .click(function () {
                $('body').toggleClass('mobile-menu-open');

                return false;
            });


        $('.fb-share')
            .once()
            .click(function () {
                var $this = $(this);

                postToFeed(
                    $this.data('title'),
                    $this.data('desc'),
                    $this.prop('href'),
                    $this.data('image')
                );

                return false;
            });


        $('.filters-form select[name="duration"]')
            .once('auto-submit')
            .change(function () {

                alert('changed');

                // $(this).closest('form').submit();

            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });


    $(document).on('ajaxSetup', function (event, context) {
        context.options.ajaxGlobal = true;
    });

})(jQuery);