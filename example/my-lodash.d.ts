declare module "my_lodash" {

    interface FirstFunction {
        (data: any[]): any;
    }

    interface Lodash {
        first: FirstFunction;
    }

    export const _: Lodash;
}