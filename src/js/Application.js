import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
	  document.querySelector('article').addEventListener('click', (me) => {
	  anime({
		targets: 'article.article',
		easing: 'spring',
		loop: 'true'
	  });
	  })
  }
}
