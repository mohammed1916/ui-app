export default function M1(props){
    function printUpperCase(s){
        return s.toUpperCase()
    }
    return(
        <h2>
            {printUpperCase(props.data)}
        </h2>
    )
}