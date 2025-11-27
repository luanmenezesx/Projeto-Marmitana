$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#aboutme_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#text_aboutme', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});



$(document).ready(function () {

    $('#btn-personalizar').on('click', function () {
        $('#personalizar-pedido').addClass('active');
        $('html, body').animate({
            scrollTop: $('#personalizar-pedido').offset().top - 100
        }, 500);
    });

    $('#btn-fechar-personalizar').on('click', function () {
        $('#personalizar-pedido').removeClass('active');
    });

    $('#btn-finalizar-whatsapp').on('click', function () {
        const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
        const diasNomes = {
            'segunda': 'Segunda-feira',
            'terca': 'Terça-feira',
            'quarta': 'Quarta-feira',
            'quinta': 'Quinta-feira',
            'sexta': 'Sexta-feira'
        };

        let linhas = [];

        dias.forEach(function (dia) {
            const $prato = $(`#prato-${dia}`);
            const $comp = $(`#complemento-${dia}`);

            const pratoVal = $prato.val();
            const compVal = $comp.val();

            const pratoText = pratoVal ? $prato.find('option:selected').text().trim() : '';
            const compText = compVal ? $comp.find('option:selected').text().trim() : '';

            if (pratoText || compText) {
                let bloco = `*${diasNomes[dia]}*\n`;
                bloco += pratoText ? `Prato: ${pratoText}\n` : `Prato: —\n`;
                bloco += compText ? `Complemento: ${compText}\n` : `Complemento: —\n`;
                linhas.push(bloco);
            }
        });

        if (linhas.length === 0) {
            alert('Por favor, selecione pelo menos um prato ou complemento antes de finalizar.');
            return;
        }

        let mensagem = '🍽️ *Pedido Semanal - Marmitana* \n\n' + linhas.join('\n');
        const numeroWhats = '5513991845634';
        const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    });

});
