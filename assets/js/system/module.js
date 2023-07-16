import * as modal from './module/modal';
import * as tabs from './module/tabs';
import * as date from './module/date';
import * as select from './module/select';
import * as share from './module/share';
import * as qrcode from './module/qrcode';
import * as navbar from './module/navbar';
import * as hljs from './module/hljs';

import * as konami from './module/konami';
import * as console from './module/console';

export function init() {
  modal.init();
  tabs.init();
  date.init();
  select.init();
  share.init();
  qrcode.init();
  navbar.init();
  hljs.init();

  konami.init();
  console.init();
}
