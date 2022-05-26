import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
    models: T[] = [];
    eventing: Eventing = new Eventing();

    constructor(
        private rootUrl: string,
        private deserialize: (json: K) => T
    ) {}

    get on() {
        return this.eventing.on;
    }

    get trigger() {
        return this.eventing.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse): void => {
                response.data.forEach((value: K): void => {
                    this.models.push(this.deserialize(value));
                });
            });

        this.trigger('change');
    }
}
