import Image from "./assets/Image/Mask_Group.png"
import Image2 from "./assets/Image/Mask_Group (1).png"
import Image3 from "./assets/Image/Mask Group (2).png"
import Image4 from "./assets/Image/Mask Group (3).png"
import Image5 from "./assets/Image/Mask Group (4).png"
import Image6 from "./assets/Image/Ads.png"
import Image7 from "./assets/Image/Mask Group (5).png"
import Image8 from "./assets/Image/Mask Group (6).png"
import Image9 from "./assets/Image/Mask Group (7).png"


import Card from "./Components/Card.jsx"
import './Style/Style.css'

function App() {

  return (
    <div className="Container">
      <children/>
      <div className="section">
    <h2>Simple and tasty recipes</h2>
    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
   </div>
   <div className="card_contain">
      <Card image={Image} text={"Big and Juicy Wagyu Beef Cheeseburger"} Text={" Snack"} Text2={"30 Minutes"}/>
      <Card image={Image2} text={"Fresh Lime Roasted Salmon with Ginger Sauce"} Text={" Fish"} Text2={"45 Minutes"}/>
      <Card image={Image3} text={"Strawberry Oatmeal Pancake with Honey Syrup"} Text={" Breakfast"} Text2={"15 Minutes"}/>
      <Card image={Image4} text={"Fresh and Healthy Mixed Mayonnaise Salad"} Text={" BHealthy"} Text2={"10 Minutes"}/>
      <Card image={Image5} text={"Chicken Meatballs with Cream Cheese"} Text={" Meat"} Text2={"20 Minutes"}/>
      {/* <Card image={Image6} text={"Chicken Meatballs with Cream Cheese"} Text={" Meat"} Text2={""}/> */}
      <Card image={Image7} text={"Fruity Pancake with Orange & Blueberry"} Text={" Sweet"} Text2={"12 Minutes"}/>
      <Card image={Image8} text={"The Best Easy One Pot Chicken and Rice"} Text={" Snack"} Text2={"25 Minutes"}/>
      <Card image={Image9} text={"The Creamiest Creamy Chicken and Bacon Pasta"} Text={" Noodles"} Text2={"40 Minutes"}/>
      <Card image={Image2} text={"Fresh Lime Roasted Salmon with Ginger Sauce"} Text={" Fish"} Text2={"35 Minutes"}/>
   </div>
    </div>
  )
}

export default App
