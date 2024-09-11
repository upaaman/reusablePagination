import { useEffect, useState } from "react";
import Pagination from "./Pagination";


const Parent = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [currentView, setCurrentView] = useState("grid");


  const fetchDataFromApi = async ({ pageNumber = 0 }) => {
    const apiUrl = `https://api.github.com/search/repositories?q=Q?page=${pageNumber}`
    // console.log(apiUrl)
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data.items)
    setData(data.items);
    // console.log(data)
  }
  useEffect(() => {
    fetchDataFromApi({ pageNumber: currPage });
  }, [currPage])


  const componentFunctionGrid = (props) => {

    return <div className="flex flex-col items-center justify-center border-gray-500 border-2 p-2 rounded-md hover:scale-105">

      <div><img className="w-[180px]" src={props.owner.avatar_url} alt="" /></div>
      <div>
        <div className="flex flex-col">
          <div className="flex gap-1" >
            <span className="font-semibold">ID:</span>
            <span>{props.id}</span>
          </div>
          <div className="flex gap-1" >
            <span className="font-semibold">Repo name:</span>
            <span>{props.name.slice(0, 10)}</span>
          </div>
          <div className="flex gap-1" >
            <span className="font-semibold">Owner name:</span>
            <span>{props.owner.login}</span>
          </div>
        </div>
      </div>
    </div>
  }
  const componentFunctionList = (props) => {
    return <div className="flex w-full border-2 px-6 py-2 justify-between border-gray-500 hover:scale-105 rounded-xl">
      <div>
        <img className="w-[80px] " src={props.owner.avatar_url} />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1" >
          <span className="font-semibold">ID:</span>
          <span>{props.id}</span>
        </div>
        <div className="flex gap-1" >
          <span className="font-semibold">Repo name:</span>
          <span>{props.name.slice(0, 10)}</span>
        </div>
        <div className="flex gap-1" >
          <span className="font-semibold">Owner name:</span>
          <span>{props.owner.login}</span>
        </div>
      </div>
    </div>
  }
  return (
    <div className="w-full px-10 py-10">
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        currentView={currentView}
        setCurrentView={setCurrentView}
        data={data}
        componentFunctionGrid={componentFunctionGrid}
        componentFunctionList={componentFunctionList}
      />
    </div>
  )
}

export default Parent