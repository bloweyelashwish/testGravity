'use strict'

function form() {
	document.addEventListener('click', (e) => {
		if (e.target.closest('[data-btn-modal-open]')) {
			openForm();
		};
	});
};

function openForm() {
	const formModal = document.querySelector('[data-form-modal]');
	const pageOverlay = document.querySelector('.page-overlay');
	const forms = [...document.querySelectorAll('form')];

	formModal.classList.add('form-opened');
	pageOverlay.classList.add('is-down');

	focusOnLabel();
	selectForm();
	closeForm(formModal, pageOverlay);
	submitForm(forms);
};



function selectForm() {
	const formTabs = document.querySelectorAll('.js-trigger-tab');
	
	formTabs.forEach(tab => {

		tab.addEventListener('click', () => {
			const tabParent = tab.parentElement;
			[...tabParent.children].forEach(t => {
				t.classList.remove('selected');
			});
			tab.classList.add('selected');

			const { trigger } = tab.dataset;
			const triggeredForm = document.querySelector(`.${trigger}`);
			const formRegister = document.querySelector('.js-sign-up');
			const formLogin = document.querySelector('.js-log-in');

			if (triggeredForm.classList.contains('js-log-in')) {
				formLogin.classList.remove('is-disabled');
				formRegister.classList.add('is-disabled');
			} else {
				formRegister.classList.remove('is-disabled');
				formLogin.classList.add('is-disabled');
			};
		});
	});
};

function focusOnLabel() {
	const formLabels = document.querySelectorAll('.form__label');
	formLabels.forEach(label => {
		const labelInput = label.nextElementSibling;
		labelInput.addEventListener('focus', e => {
				label.classList.add('in-focus');
		});

		labelInput.addEventListener('blur', e => {
			if (label.classList.contains('in-focus') && labelInput.value === "") {
				label.classList.remove('in-focus');
			};
		});
	});
}

function closeForm(form, overlay) {
	const closeFormBtn = document.querySelector('.js-close-form');

	closeFormBtn.addEventListener('click', (e) => {
		form.classList.remove('form-opened');
		overlay.classList.remove('is-down');
	});
};

function submitForm(forms) {
	forms.forEach(form => {
		form.addEventListener('submit', e => {
			e.preventDefault();
			
			const { action, method } = form;
			const formData = new FormData(form);

			fetch(action, {
				method: method,
				body: formData,
			}).then(res => res.json()).then(data => console.log(data));

			form.reset();
		});
	});
};

export { form };