import Collapse from './Collapse';
import CallbackWidget from './CallbackWidget';
import Like from './Like';

const collapse = new Collapse();
collapse.init();

const widgetContainer = document.querySelector('.form-container');
const widget = new CallbackWidget(widgetContainer);
widget.init();

const like = new Like();
like.init();
