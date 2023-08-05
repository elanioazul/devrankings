import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const getValidatorErrorMessage = (
	validatorName: string,
	validatorErrors?: ValidationErrors
): string | undefined => {
	let args = messages
		.get(validatorName)
		?.validatorErrorsKey?.map((name) => validatorErrors?.[name]);
	return args
		? stringFormat(messages.get(validatorName)?.message, ...args)
		: messages.get(validatorName)?.message;
};

export const passwordMatch = (
	password: string,
	confirmPassword: string
): ValidatorFn => {
	return (formGroup: AbstractControl): { [key: string]: any } | null => {
		const passwordControl = formGroup.get(password);
		const confirmPasswordControl = formGroup.get(confirmPassword);

		if (!passwordControl || !confirmPasswordControl) {
			return null;
		}

		if (
			confirmPasswordControl.errors &&
			!confirmPasswordControl.errors["passwordMismatch"]
		) {
			return null;
		}

		if (passwordControl.value !== confirmPasswordControl.value) {
			confirmPasswordControl.setErrors({ passwordMismatch: true });
			return { passwordMismatch: true };
		} else {
			confirmPasswordControl.setErrors(null);
			return null;
		}
	};
};

const messages = new Map<
	string,
	{ message: string; validatorErrorsKey?: string[] }
>([
	["required", { message: "Este campo es requerido" }],
	[
		"minlength",
		{
			message: "Son requeridos al menos {0} carácteres",
			validatorErrorsKey: ["requiredLength"],
		},
	],
	[
		"maxlength",
		{
			message: "El máximo número de carácteres a introducir es de {0}",
			validatorErrorsKey: ["requiredLength"],
		},
	],
	["email", { message: "Dirección de email incorrecta" }],
	["passwordMismatch", { message: "Las passwords no coinciden" }],
]);

function stringFormat(template: string | undefined, ...args: any[]) {
	if (template) {
		return template.replace(/{(\d+)}/g, (match, index) => {
			return typeof args[index] !== "undefined" ? args[index] : match;
		});
	}
	return undefined;
}
