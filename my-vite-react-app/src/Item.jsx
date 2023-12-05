import Counter from "./counter"
const Item = (props) =>{
    return(
        <div className="item d-flex mb-10">
            <button className="remove-item"></button>
            <span className="item-name">{props.itemName}</span>
            <Counter countValue = {props.countValue}  />
        </div>
    )
}

export default Item