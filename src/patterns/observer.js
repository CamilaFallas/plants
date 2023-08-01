class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  notify(data) {
    this.subscribers.forEach((subscriber) => {
      subscriber(data);
    });
  }
}

export default Observer;
