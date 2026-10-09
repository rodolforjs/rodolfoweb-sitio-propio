// Formulario de contacto: arma el mensaje y abre WhatsApp (sin backend).
$(function () {
    'use strict';

    const WA_NUMBER = '56945285525';
    const form = $('.needs-validation.form');
    if (!form.length) return;

    // ----- Dropdown propio (reemplaza al <select> nativo) -----
    const box = $('#serviceSelect');
    const btn = box.find('.custom-select__btn');
    const label = box.find('.custom-select__label');
    const list = box.find('.custom-select__list');
    const input = box.find('input[name="service"]');
    const options = list.find('li');
    let active = -1;

    function setActive(i) {
        active = (i + options.length) % options.length;
        options.removeClass('is-active').eq(active).addClass('is-active');
    }

    function openList() {
        list.prop('hidden', false);
        box.addClass('is-open');
        btn.attr('aria-expanded', 'true');
        const sel = options.index(options.filter('.is-selected'));
        setActive(sel >= 0 ? sel : 0);
    }

    function closeList() {
        list.prop('hidden', true);
        box.removeClass('is-open');
        btn.attr('aria-expanded', 'false');
    }

    function choose(i) {
        const li = options.eq(i);
        options.removeClass('is-selected').attr('aria-selected', 'false');
        li.addClass('is-selected').attr('aria-selected', 'true');
        input.val(li.data('value'));
        label.text(li.data('value')).addClass('has-value');
        box.removeClass('is-invalid');
        closeList();
    }

    btn.on('click', function () { list.prop('hidden') ? openList() : closeList(); });
    options.on('click', function () { choose(options.index(this)); });
    options.on('mousemove', function () { setActive(options.index(this)); });

    box.on('keydown', function (e) {
        const isOpen = !list.prop('hidden');
        if (e.key === 'Escape' && isOpen) { closeList(); btn.focus(); return; }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (!isOpen) { openList(); return; }
            setActive(active + (e.key === 'ArrowDown' ? 1 : -1));
        } else if ((e.key === 'Enter' || e.key === ' ') && isOpen && active >= 0) {
            e.preventDefault();
            choose(active);
            btn.focus();
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#serviceSelect').length) closeList();
    });

    // ----- Envío a WhatsApp -----
    form.on('submit', function (e) {
        e.preventDefault();
        const f = this;
        const valid = f.checkValidity();
        box.toggleClass('is-invalid', !input.val());
        form.addClass('was-validated');
        if (!valid) return;

        const val = (n) => ($(f).find('[name="' + n + '"]').val() || '').trim();
        const lines = [
            'Hola, soy ' + val('name') + '. Me interesa: ' + val('service') + '.',
        ];
        if (val('message')) lines.push('', val('message'));
        if (val('email')) lines.push('', 'Mi correo: ' + val('email'));
        if (val('phone')) lines.push('Mi WhatsApp: ' + val('phone'));

        const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
        window.open(url, '_blank', 'noopener');
    });
});
