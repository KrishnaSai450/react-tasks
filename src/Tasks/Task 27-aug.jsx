
import { Component } from "react";
import CustomDNALoader from "../Loader/loader";
import CustomList from "../Lists/list";
import axios from "axios";




class Recipes extends Component{
    state={
        recipes:[],
        loader:true,
        error:false
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async()=>{
        const {status,data} = await axios.get("https://dummyjson.com/recipes")
        console.log(data);
        this.setState({
            recipes:data.recipes,
            loader:false
        })
    }

    //  fetchData = async()=>{
    //     const data = await fetch("https://dummyjson.com/recipes")
    //     const {recipes} = await data.json();
    //     console.log(recipes);
    //     this.setState({
    //         recipes : recipes,
    //         loader:false
    //     })

    // }


    render(){
        return(
            <>
                {
                    this.state.loader?<CustomDNALoader/>:
                    <>
                       {
                        this.state.recipes.map(eachRecipe=>{
                            return(
                                <div>
                                    <h1>{eachRecipe.name}</h1>
                                    <img src={eachRecipe.image} height={100} width={100}/>
                                    <h4>Ingredients Required</h4>
                                    <CustomList list={eachRecipe.ingredients}/>
                                    <h4>Preparation Steps</h4>
                                    <CustomList list={eachRecipe.instructions}/>
                                </div>
                            )
                        })
                       } 
                    </>
                }

            


            </>
        )
    }
}

export default Recipes