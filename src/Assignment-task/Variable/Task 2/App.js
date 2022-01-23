import Sample from "../Task 2/Sample";

/**
 * @tutorial import this component as " import App from './Assignment-task/Variable/Task 2/App' "
 * @returns 'Sample' component to demonstrate 'Property Destructuring'
 */
export default function App(){
    
    return(
        <>
            <Sample a={5} b={5} c={5}/>
            <Sample a={10} b={10} c={10}/>
            <Sample a={20} b={20} c={20}/>
        </>
);
}