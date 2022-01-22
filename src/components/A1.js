export default function A1(props){
    function computeGreater(a,b,c){
        var greatest = 0;
        if (a> b & a>c){
            greatest = a
        } else if (b>c){
            greatest = b
        } else {
            greatest = c
        }
        return greatest
    }

    return(

            <h2>
                {computeGreater(props.a,props.b,props.c)}
            </h2>

    );
}