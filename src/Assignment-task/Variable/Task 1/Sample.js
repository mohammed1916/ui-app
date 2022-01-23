/**
 * 
 * @param x integer to add with 5
 * @param y integer to add with 3
 * @param z integer to add with 3
 * @returns 
 */
export default function Sample({x,y,z}){
    var a =5;
    var b=3;
    const c=3;
    return(
        <>
            <h2>
                (X = {x}) + (A = {a}) is {x+a}      (Y = {y}) + (B = {b}) is {y+b}      (Z = {z}) + (C = {c}) is {z+c}
            </h2>
        </>
);
}