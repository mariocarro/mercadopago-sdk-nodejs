import get from './get';
import create from './create';

import type { CardTokenId, CardTokenResponse } from './get/types';
import type { CardTokenBody } from './create/types';
import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';

export class CardToken {
	private config: MercadoPagoConfig;

	constructor(mercadoPagoConfig: MercadoPagoConfig) {
		this.config = mercadoPagoConfig;
	}

	get({ cardTokenId }: CardTokenId): Promise<CardTokenResponse> {
		return get({ id: cardTokenId, config: this.config });
	}

	create ({ cardTokenBody }: CardTokenBody): Promise<CardTokenResponse> {
		return create({ body: cardTokenBody, config: this.config });
	}
}
