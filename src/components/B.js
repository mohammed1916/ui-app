import A from "./A";

export default function B() {
    return (
        <>
            <A x={10} y={20} />
            <A x={20} y={50} />
            <A x={4} y={20} />
        </>
    );
}