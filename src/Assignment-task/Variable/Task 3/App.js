import X from "./X";
import Y from "./Y";
import Z from "./Z";

/**
 * @tutorial import this component as " import App from './Assignment-task/Variable/Task 3/App' "
 * @returns 'Sample' component to demonstrate 'Property Destructuring'
 */
export default function App(){
    
    return(
        <>
            <X a={1} b={1}/>
            <Y a={1} b={1} c={1} />
            <Z a1={1} b1={1} c1={1} d1={1} />
        </>
);
}