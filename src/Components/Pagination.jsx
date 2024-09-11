

const Pagination = ({ data, componentFunctionGrid, componentFunctionList, setCurrPage, currPage, currentView, setCurrentView }) => {


    return (
        <div>
            <div>
                {/* -----------------------pagination buttons and logic  */}
                <div className="flex justify-center gap-10">
                    <div className="flex gap-2">
                        <div onClick={() => setCurrentView("grid")} >Grid</div>
                        <div onClick={() => setCurrentView("list")}>List</div>
                    </div>
                    {currPage !== 0 && <div onClick={() => setCurrPage(prev => prev - 1)} >Prev</div>}
                    <div>{currPage + 1}</div>
                    <div onClick={() => setCurrPage(prev => prev + 1)} >Next</div>
                </div>


                {/* --------------------the data will be shown here  */}
                <div>
                    <div className={`${currentView == "list" ? 'flex flex-wrap w-full ' : ' flex flex-col  flex-wrap '}`}>
                        {
                            currentView === "list" ?
                                data?.map((item, index) => {
                                    return <div key={index}>{componentFunctionGrid(item)} </div>
                                })
                                :
                                data?.map((item, index) => {
                                    return <div key={index}>{componentFunctionList(item)} </div>
                                })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination