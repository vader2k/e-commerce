import Card from "../Ui/Card"
import useFetch from "../hooks/useFetch"
// destructuting props that was sent into the list component
 const List = ({catId, maxValue, sort, SubCats}) => {

// created a filter function to filter the products by category and sub category
// and also filter by price and sort by price
// the useFetch hook was used to fetch the data from the backend
 const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${SubCats.map(
                                          (item) => `&[filters][sub_categories][id][$eq]=${item}`)}
                                          &[filters][price][$lte]=${maxValue}&sort=price:${sort}`
  )


  return (
    <div className="flex py-10 w-full gap-10">
      {error 
        ? "error" 
        : loading 
        ? "loading" 
        : data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List