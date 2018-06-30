import {DialogConfiguration} from 'aurelia-dialog';
import {bindable} from 'aurelia-framework';
import {inlineView} from 'aurelia-templating';
@inlineView(
  '<template><div>${test}</div></template>'
)
export class App {
  @bindable test = 1;
}