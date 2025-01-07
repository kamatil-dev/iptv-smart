declare global {
	interface SettingsT {
		title: string;
		description: string;
		logo: {
			publicURL: string;
		};
		email: string;
		whatsapp: number;
		paypal: string;
		plans: {
			prix: number;
			mois: number;
		}[];
	}
	interface OrderT {
		nom_complet?: string;
		email?: string;
		country?: string;
		phone?: number;
		prix?: number;
		mois?: number;
		transaction?: string;
	}
}

export type { SettingsT, OrderT };
