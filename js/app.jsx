class Ventas extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
        let a=0;
        setInterval(()=>{
            a++;
            this.setState({
           
                productos:[...this.state.productos,`id ${a}`]
        })
        },1000)
    } 
    render(){
        return <div>
            <ol>
                {this.state.productos.map(a=><li>{a}</li>)}
            </ol>
        </div>
    }

}
ReactDOM.render(<Ventas nombre="luis"/>,
    document.getElementById('principal'));