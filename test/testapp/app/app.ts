import {bindable} from 'aurelia-framework';
import {inlineView, } from 'aurelia-templating';
import {DialogConfiguration} from 'aurelia-dialog';
@inlineView(
  '<template><div>${test}</div></template>'
)
export class App {
  @bindable test = 1;
}