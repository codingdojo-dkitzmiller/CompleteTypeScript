enum Editor {
    Marvel,
    DC
}

class SuperHero {

    private _summary = '';

    constructor(private name: string, private _editor: Editor, private creationYear: number) {
        this._summary = `${name} ${Editor[_editor]} ${creationYear}`
    }

    get summary() {
        return `Summary: ${this.name} - ${this.editor} [${this.creationYear}]`
    }

    set summary(txt: string) {
       this._summary =  txt;
    }

    getSummary() {
        return this.summary;
    }

    get editor(): string {
        return Editor[this._editor];
    }

    set editor(name: string) {
       this._editor = (<any>Editor)[name];
    }
}

const superMan = new SuperHero( 'Clark Kent', Editor.DC, 1938);

console.log(superMan.summary);
console.log(JSON.stringify(superMan));


