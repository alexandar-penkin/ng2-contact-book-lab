export class Contact {
    constructor(
        public id: number | undefined,
        public gender: string,
        public name: string,
        public family: string,
        public email: string,
        public phone: string,
        public address: string
    ) {}
}
