import { useState} from "react"
import { useParams } from "react-router-dom"
import {List} from '../components'
import useFetch from "../hooks/useFetch"

const Products = () => {

  const catId = parseInt(useParams().id)

  const [maxValue, setMaxValue] = useState(1000)
  const [sort, setSort] = useState("asc")
  const [selectedSubCategory, setSelectedSubCategory] = useState([])

  const {data, loading, error} = useFetch(`/sub-Categories?populate=*&[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    
    setSelectedSubCategory(isChecked ? [...selectedSubCategory, value] : selectedSubCategory.filter((item) => item !== value))
  }


  console.log(selectedSubCategory)
  return (
    <div className="flex justify-between items-start px-20">
      <div className="flex flex-1 flex-col gap-5 sticky top-[50px] h-full">
        <h1 className="text-[1.5rem] font-medium">Product Catgegory</h1>
        <div className="flex flex-col gap-3">
        { error ?  "something went wrong" 
          :(loading ? "loading" 
          : data?.map((item) => (
          <div className="flex gap-2" key={item.id}>
            <input 
                type="checkbox" 
                id={item.id} 
                value={item.id}
                onChange={handleChange}
            />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
        )))}
        </div>

        <h1 className="text-[1.5rem] font-medium">Filter by price</h1>
        <div className="text-[0.9rem] flex gap-3">
          {0}
          <input type="range" min={1} max={1000} onChange={(e)=>setMaxValue(e.target.value)} />
          {maxValue}
        </div>


        <h1>Sort by</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input 
              type="radio" 
              id="asc" 
              value="asc" 
              name="price" 
              onChange={(e) => setSort("asc")}/>
            <label htmlFor="asc">price (Lowest First)</label>
          </div>

          <div className="flex gap-2">
            <input 
              type="radio" 
              id="desc" 
              value="desc" 
              name="price" 
              onChange={(e) => setSort("desc")}/>
            <label htmlFor="desc">price (Higest First)</label>
          </div>
        </div>
        
      </div>


      <div className="flex-[3]">
        <img className="h-[300px] w-full object-cover" src="https://images.unsplash.com/photo-1513884923967-4b182ef167ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cover" />

        <div className="mb-[150px]">
          <List catId={catId} maxValue={maxValue} sort={sort} SubCats={selectedSubCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Products
