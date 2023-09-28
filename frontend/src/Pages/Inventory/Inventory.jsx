import React, {useState} from "react";
import "./Inventory.scss";
import ascNum from "../../Assets/Img/ascNum.svg";
import descNum from "../../Assets/Img/descNum.svg";
import ascLet from "../../Assets/Img/ascLet.svg"
import descLet from "../../Assets/Img/descLet.svg";

export const Inventory = () => {

    const [ numOrder, setNumOrder ] = useState(true);   //if value is true order is ascending
    const [ letOrder, setLetOrder ] = useState(true); //if value is true order is ascending

    const handleNumOrder = () => {

        numOrder

    }

    return (

        <section className="inventory">
            <h1 className="inventoryTitle">Inventory</h1>
            <div className="inventorySections">
                <div className="col sectionItem">
                    <p>Item</p>
                    <img src={ascLet} alt="ascending descending"/>
                </div>
                <div className="col sectionSupplier">
                    <p>Supplier</p>
                    <img src={ascLet} alt="ascending descending"/>
                </div>
                <div className="col sectionQuantity">
                    <p>Quantity</p>
                    <img src={ascLet} alt="ascending descending"/>
                </div>
                <div className="col sectionCost">
                    <p>Unit cost</p>
                    <img src={ascLet} alt="ascending descending"/>
                </div>
                <div className="col sectionPar">
                    <p>Par level</p>
                    <img src={ascLet} alt="ascending descending"/>
                </div>
            </div>
        </section>

    )

}