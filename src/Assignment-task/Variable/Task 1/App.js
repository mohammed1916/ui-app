import Sample from "./Sample";
/**
 * @tutorial import this component as " import App from './Assignment-task/Variable/Task 1/App' "
 * @returns 'Sample' component to demonstrate 'Property Destructuring'
 */
export default function App(){
    
    return(
        <>
            <Sample x={1} y={2} z={3} />
            <Sample x={5} y={10} z={3} />
            <Sample x={1} y={3} z={1} />
        </>
);
}