const formModal = document.querySelector('.js-form-modal');
const pageOverlay = document.querySelector('.page-overlay');

const openForm = () => {
	formModal.classList.add('form-opened');
	pageOverlay.classList.add('is-down');
}

const selectForm = () => {
	const formTabs = [...document.querySelectorAll('.js-trigger-tab')];
	const formRegister = document.querySelector('.js-sign-up');
	const formLogin = document.querySelector('.js-log-in');
	
	formTabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const { children } = tab.parentElement;
			const { trigger } = tab.dataset;
			const triggeredForm = document.querySelector(`.${trigger}`);

			children.forEach((child) => {
				child.classList.remove('hero__tab--selected');
			});

			tab.classList.add('hero__tab--selected');

			if (triggeredForm.classList.contains('js-log-in')) {
				formLogin.classList.remove('is-disabled');
				formRegister.classList.add('is-disabled');
			} else {
				formRegister.classList.remove('is-disabled');
				formLogin.classList.add('is-disabled');
			}
		})
	})
}

const focusOnLabel = () => {
	const formLabels = [...document.querySelectorAll('.js-form-label')];

	formLabels.forEach(label => {
		const labelInput = label.nextElementSibling;

		labelInput.addEventListener('focus', () => {
				label.classList.add('in-focus');
		});

		labelInput.addEventListener('blur', () => {
			if (label.classList.contains('in-focus') && labelInput.value === "") {
				label.classList.remove('in-focus');
			}
		})
	})
}

const closeForm = () => {
	const closeFormBtn = document.querySelector('.js-close-form');

	closeFormBtn.addEventListener('click', () => {
		formModal.classList.remove('form-opened');
		pageOverlay.classList.remove('is-down');
	});
}

const submitForm = () => {
	const forms = [...document.querySelectorAll('.js-form')];

	forms.forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			
			const { action, method } = form;
			const formData = new FormData(form);

			fetch(action, {
				method: method,
				body: formData,
			})
			.then(res => res.json())
			.then(data => console.log(data));

			form.reset();
		})
	})
}

const formHandler = () => {
	openForm();
	focusOnLabel();
	selectForm();
	submitForm();
	closeForm();
}

export const initForm = () => {
	const triggerButton = document.querySelector('.js-trigger-form');
	triggerButton.addEventListener('click', () => {
		formHandler();
	})
}