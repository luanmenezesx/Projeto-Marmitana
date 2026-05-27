    let fontSize = 100;

$(document).ready(function () {
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

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

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

    $('#personalizar-pedido').on('submit', function (e) {
        e.preventDefault();

        const form = this;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

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

            const pratoText = $prato.find('option:selected').text().trim();
            const compText = $comp.find('option:selected').text().trim();

            if ($prato.val() || $comp.val()) {
                let bloco = `*${diasNomes[dia]}*\n`;
                bloco += $prato.val() ? `Prato: ${pratoText}\n` : `Prato: —\n`;
                bloco += $comp.val() ? `Complemento: ${compText}\n` : `Complemento: —\n`;
                linhas.push(bloco);
            }
        });

        if (linhas.length === 0) {
            alert('Por favor, selecione pelo menos um prato ou complemento.');
            return;
        }

        let mensagem = '🍽️ *Pedido Semanal - Marmitana* \n\n' + linhas.join('\n');
        const numeroWhats = '5513991845634';
        const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    });
    /* const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
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
 });*/



    $('#increase-font').click(function () {
        if (fontSize < 150) { // limite máximo
            fontSize += 10;
            $('html').css('font-size', fontSize + '%');
        }
    });

    $('#decrease-font').click(function () {
        if (fontSize > 70) { // limite mínimo
            fontSize -= 10;
            $('html').css('font-size', fontSize + '%');
        }
    });

    const $themeButton = $('#toggle-theme');

    function updateThemeIcon() {
        const isDark = $('body').hasClass('dark-theme');
        const $icon = $themeButton.find('i');

        $icon.removeClass('fa-moon fa-sun');

        if (isDark) {
            $icon.addClass('fa-sun');
            document.getElementById('logodark').innerHTML = '<img src="src/images/Marmitana-modoescuro.png" alt="Logo da Marmitana Culinária Brasileira">';

        } else {
            $icon.addClass('fa-moon');
            document.getElementById('logodark').innerHTML = '<img src="src/images/Marmitana.png" alt="Logo da Marmitana Culinária Brasileira">';

        }
    }

    $themeButton.on('click', function () {
        $('body').toggleClass('dark-theme');
        updateThemeIcon();
    });

    updateThemeIcon();
});

document.getElementById('destacar-links').addEventListener('click', function () {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "purple";
        links[i].style.color = "yellow";
    }
});

let linksDestacados = false;

document.getElementById('destacar-links').addEventListener('click', function () {

    const links = document.getElementsByTagName('a');

    linksDestacados = !linksDestacados;

    for (let i = 0; i < links.length; i++) {

        if (linksDestacados) {
            links[i].style.backgroundColor = "purple";
            links[i].style.color = "yellow";
        } else {
            links[i].style.backgroundColor = "";
            links[i].style.color = "";
        }

    }
});


document.getElementById('contraste-btn').addEventListener('click', function () {
    document.body.classList.toggle('autoContraste');
    document.body.classList.remove('dark-theme');

    // opcional: feedback visual no console
    console.log(
        document.body.classList.contains('autoContraste')
            ? 'Auto contraste ATIVADO'
            : 'Auto contraste DESATIVADO'
    );
});

$('#resetar-edicoes').on('click', function () {

    // 1. Reset tamanho da fonte
    fontSize = 100;
    $('html').css('font-size', '100%');

    // 2. Remove modo escuro
    $('body').removeClass('dark-theme');

    // 3. Remove alto contraste
    $('body').removeClass('autoContraste');

    // 4. Reset links destacados
    linksDestacados = false;
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "";
        links[i].style.color = "";
    }

    // 5. Reset ícone do tema (moon/sun + logo)
    const $icon = $('#toggle-theme').find('i');

    $icon.removeClass('fa-sun fa-moon').addClass('fa-moon');

    document.getElementById('logodark').innerHTML =
        '<img src="src/images/Marmitana.png" alt="Logo da Marmitana Culinária Brasileira">';

    console.log('Reset de acessibilidade aplicado');
});