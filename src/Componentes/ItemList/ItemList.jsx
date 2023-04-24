import { ItemCard } from "./ItemCard"
import styles from "./ItemCard.module.css"



const ItemList = ({items}) => {
  return (
    <div className={styles.ContainerCard}>
      {items.map((item) => {
        return(
          <ItemCard item={item} key={item.id} />
        )
      })}
        
    </div>
  )
}

export default ItemList
