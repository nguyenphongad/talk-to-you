

// function LoadingIcon() {
//     const state = () => {
//         loading: true
//     };

//     const componentDidMount = () => {
//         // this simulates an async action, after which the component will render the content
//         demoAsyncCall().then(() => this.setState({ loading: false }));
//     }


//     const { loading } = this.state;

//     if (loading) { // if your component doesn't have to wait for an async action, remove this block 
//         return null; // render null when app is not ready
//     }

//     return (
//         <>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react.js"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.js"></script>
//             <div>I'm the app</div>
//             <div id="app" class="loader"></div>
//         </>
//     );
// }

// const demoAsyncCall = () => {
//     return new Promise((resolve) => setTimeout(() => resolve(), 2500));
// }

// export default LoadingIcon;
