import { DNA } from "react-loader-spinner"


const CustomDNALoader = ()=>{
    return(
        <DNA
  visible={true}
  height="140"
  width="120"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    )
}

export default CustomDNALoader