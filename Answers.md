1. What problem does the context API help solve?
    It helps making your state managment to run smoother and for sure cleaner/professonial code.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions folder, has a action files that is using the help of reducers which write the logic, and all that information from state management goes to the store. They all need each other because of this.  Redux is known as a 'single source of truth' in a redux application because all the data is flowing smoothly, without having to do prop drilling.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    small app could use component state. medium to big apps should use application state for sure.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk allows us to mix all of the actions, reducers and store all together in one flow. It changeds our 'action-creators'by passing one component to another 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    context api is definitely my favorite one. this is because it makes the store and structure a lot easier and more organized without having to create a lot of things like redux.
