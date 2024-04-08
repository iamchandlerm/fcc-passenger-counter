// let counter = 0;
// let result = document.querySelector('#count-el').innerText;
// let entries = document.querySelector('#save-el');

// document.querySelector('#increment-btn').addEventListener('click', () => { 
//     counter += 1;
//     document.querySelector('#count-el').innerText = counter
// })

// document.querySelector('#save-btn').addEventListener('click', () => {
//     result = counter;
//     const entry = document.createElement("p");
//     entry.innerText = result;
//     entries.append(entry)
// })


class Counter {
    constructor() {
        this.counter = 0;
        this.resultElement = document.querySelector('#count-el');
        this.entriesElement = document.querySelector('#save-el');

        document.querySelector('#increment-btn').addEventListener('click', this.increment.bind(this));
        document.querySelector('#save-btn').addEventListener('click', this.save.bind(this));
    }

    increment() {
        this.counter++;
        this.updateResult();
    }

    save() {
        const entry = document.createElement("p");
        entry.innerText = this.counter;
        this.entriesElement.append(entry);
    }

    updateResult() {
        this.resultElement.innerText = this.counter;
    }
}
  
const myCounter = new Counter();