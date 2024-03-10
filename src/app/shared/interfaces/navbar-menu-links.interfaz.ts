import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
export interface INavBarMenuLinkProps {
	to: string;
	icon: IconDefinition;
	label: string;
	isDefault: boolean;
}
