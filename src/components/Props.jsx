import styled from "styled-components"

export default function Props() {

     const Button = styled.button`
    padding: 10px 20px;
    background-color: ${props =>{
    if(props.color){
        return props.color
        // return 'red'
    }else{
        return'blue'
    }
}};
    background-color: ${props => props.corM};

    font-size: ${props => props.size};
`

  return (
    <div>
         <Button>primeiro</Button>
        <Button color="green">segundo</Button>
        <Button size="35px">terceiro</Button>
    </div>
  )
}
