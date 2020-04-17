1. What problem does the context API help solve?

It Helps manage global state. We use the Context API when we have global data that lots of components share (things like user or theme), or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of info from redux that contain data and a type of action. Actions work with the reducers and tell them what to do to update the state. Reducers are how we update the state and the only place to do that in redux. Store is what sets the state. It is known as a single source of truth due to its ability to scale with bigger complex projects and teams. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is immutable. We never change the original object, or write to the store object. Componenent state schedules an update to the component's object. You would use application state to access any global component from the store.  

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators. The action-creator returned thunk has access to the dispatch function

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is the state management system I prefer, because we have used it more than context api. 
