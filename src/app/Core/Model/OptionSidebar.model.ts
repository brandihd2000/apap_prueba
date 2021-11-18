import { Options } from './Option.model'

export class OptionSidebar {
    constructor(
        public label?: string,
        public icon?: string,
        public subMenu?: Array<Options> 
    ) {

    }
}