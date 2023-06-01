import { iso4217 } from '.';

export type exchangeRate = {
    date: string;   // ISO-8601
    rate: number;
    source: iso4217;
    target: iso4217;
};
