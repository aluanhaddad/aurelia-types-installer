import { bindable } from 'aurelia-framework';
import { inlineView, } from 'aurelia-templating';
@inlineView(
    '<template><div>${test}</div></template>'
)
export class App {
    test = 1;
}