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

// Funcionalidade de personalização de pedidos

$(document).ready(function() {
    $('#btn-personalizar').on('click', function() {
        console.log("Botão de Personalizar Clicado!");
        $('#personalizar-pedido').addClass('active');
        $('html, body').animate({
            scrollTop: $('#personalizar-pedido').offset().top - 100
        }, 500);
    });

    $('#btn-fechar-personalizar').on('click', function() {
        $('#personalizar-pedido').removeClass('active');
    });

    $('#btn-finalizar-whatsapp').on('click', function() {
        let mensagem = '🍝 *Pedido Personalizado*\n\n';
        let temSelecao = false;

        const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
        const diasNomes = {
            'segunda': 'Segunda',
            'terca': 'Terça',
            'quarta': 'Quarta',
            'quinta': 'Quinta',
            'sexta': 'Sexta'
        };

        dias.forEach(function(dia) {
            const prato = $(`#prato-${dia}`).val();
            const complemento = $(`#complemento-${dia}`).val();

            if (prato && complemento) {
                temSelecao = true;
                mensagem += ` *${diasNomes[dia]}-feira*\n`;
                mensagem += `    Prato: ${prato}\n`;
                mensagem += `    Complemento: ${complemento}\n\n`;
            }
        });

        if (!temSelecao) {
            alert('Por favor, selecione pelo menos um dia com prato e complemento!');
            return;
        }

        const numeroWhatsApp = '5513991845634';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });
});
