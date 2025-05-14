import { PlusIcon, TrashIcon, UserIcon, HomeIcon } from '@heroicons/vue/24/outline';

export enum IconName {
	Plus = 'plus',
	Trash = 'trash',
	User = 'user',
	Home = 'home',
}

export const IconsMap = {
    [IconName.Plus]: PlusIcon,
    [IconName.Trash]: TrashIcon,
    [IconName.User]: UserIcon,
    [IconName.Home]: HomeIcon,
};
