import { from, range } from "rxjs";
import { reduce } from "rxjs/operators";


const observable = from(range(0, 50));

const sumObservable = observable.pipe(reduce((acc, value) => acc + value, 0));

sumObservable.subscribe((sum) => console.log(sum)); // 10
sumObservable.subscribe((sum) => console.log(sum)); // 10
