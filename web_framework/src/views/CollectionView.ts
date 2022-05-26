import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
    constructor(public parent: Element, public collection: Collection<T, K>) {}

    abstract renderItem(model: T, parentItem: Element): void;

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');

        for(let model in this.collection.models) {
            const wrapper = document.createElement('div');
            this.renderItem(model, wrapper);
            templateElement.content.append(wrapper)
        }

        this.parent.append(templateElement);
    }
}
