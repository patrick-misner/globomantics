import HouseList from "./houseList";

const { default: Banner } = require("./banner")



const App = () => {


  return (
    <>
      <Banner>Providing houses all over the world!</Banner>
      <HouseList />
    </>
  )
}


export default App;