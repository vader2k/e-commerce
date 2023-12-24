import Card from "../Ui/Card"
import useFetch from "../hooks/useFetch"

 const List = ({catId, maxValue, sort, SubCats}) => {

 const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${SubCats.map(
                                          (item) => `&[filters][sub_categories][id][$eq]=${item}`)}
                                          &[filters][price][$lte]=${maxValue}&sort=price:${sort}`
  )


  return (
    <div className="flex py-10 w-full gap-10">
      {loading 
        ? "loading" 
        : data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List