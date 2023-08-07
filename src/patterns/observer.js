class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(obs => obs !== fn);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

export default Observer;

