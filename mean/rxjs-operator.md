# Pipe:-

    # Allows chaining multiple operators to transform, filter, and combine observable streams in a clean and modular way.
    # Multiple operators are used in a pipeline
    # Improves code readability, maintains separation of concerns, and avoids deeply nested callbacks

    var numbers$ = of(1, 2, 3, 4, 5);
    var filteredAndTransformed$ = numbers$.pipe(
        filter(value => value >= 3), // Keep only even numbers
        map(value => value * 10) // Transform the remaining values
    );

# of:-
    # Converts the arguments to an observable sequence.

    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => console.log(`value: ${v}`));

# interval:-
    # Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
    # interval to create a simple observable that emits numbers every second.

    var $interval = interval(1000);
    $interval.subscribe({
        next(rs) {
            console.log("Interval: ", rs * 2)
        }
    })

# take:-
    # Emits only the first count values emitted by the source Observable.
    # take to limit the number of emissions from an observable that emits values every second.
    # Control Emissions: When you only need a specific number of items from a stream.
    # Timeouts and Limits: Useful for implementing timeouts or limits in streaming scenarios.

    var intervalCount = interval(1000);
    var takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe(x => console.log(x));
    output: Logs: 0 1 2 3 4

# Observable:-
    # Observables represent a collection of values or events that arrive over time, and they provide a way to manage and process asynchronous data streams.
    # Observable: Represents a stream of values or events over time.

    var customObservable$ = new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next('Data 1');
        }, 1000);

        setTimeout(() => {
            subscriber.next('Data 2');
        }, 2000);

        setTimeout(() => {
            subscriber.complete();
        }, 3000);
    });

    customObservable$.subscribe({
        next: value => console.log('Received:', value),
        complete: () => console.log('Completed')
    });

    let observable = new Observable<any>((obs) => {
      obs.next(1);
      obs.next(2);
      setTimeout(function () {
        obs.next(3);
        obs.error('Error happens here!');
        obs.complete();
      }, 1000);
    });

    observable.subscribe({
      next(result) {
        console.log('Result: ', result);
      },

      error(error) {
        console.log('error: ', error);
      },

      complete() {
        console.log('complete observable!');
      }
    });