import { Button } from "@material-tailwind/react";
export function Greeting(){
    function add(x:number, y:number){
        return x + y;
    }

    return <>
        <h1 className={'text-6xl text-red-500 bg-purple-200'}>{ add(10,20) }</h1>
        <Button>Button</Button>
    </>

}