export const CharacterLayout =() =>{

    return (
        <div className="flex flex-col p-10  text-xl font-semibold text-neutral-300 ">
             {/* Div for complete filter */}
           <div className="flex flex-wrap justify-around border border-teal-800 bg-neutral-900/90 rounded-md p-5">
                 {/* Div for filter with options */}
                 <div>
                    <button className="border-neutral-600 border rounded-md p-1">
                        <svg className="w-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>filter</title>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path><path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path><path d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path>
                        </svg>
                    </button>
                  </div>
                  
            {/* Div for input*/}
            <div className="my-auto">          
                <input placeholder="Character name" className="rounded-md  p-2 placeholder-neutral-600 text-black"></input>
            </div>
             {/* Div for main or npc filter*/}
            <div className="my-auto">
                    <button className="border-neutral-600 border rounded-md p-1 m-1" >
                    <svg className="w-10 fill-yellow-600" viewBox="0 0 547.37 547.36"> <title>Hero</title><path d="m273.71,547.31c-2.77-25.06-15.54-112.71-90.18-186.37C110.7,289.06,25.53,276.47.05,273.66c18.37.07,114.55-1.43,192.69-78.63C272.4,116.33,273.77,17.8,273.71,0c-.17,17.34.49,116.73,80.64,195.74,78.38,77.27,174.99,78.09,193.01,77.91-20.28.43-113.11,4.6-189.77,79.62-79.4,77.71-83.47,174.7-83.88,194.03Z"></path></svg>
                    </button>
                    
                    <button className="border-neutral-600 border rounded-md p-1 m-1">
                    <svg className="w-10 fill-purple-400" viewBox="0 0 547.37 547.36"> <title>NPC</title><path d="m273.71,547.31c-2.77-25.06-15.54-112.71-90.18-186.37C110.7,289.06,25.53,276.47.05,273.66c18.37.07,114.55-1.43,192.69-78.63C272.4,116.33,273.77,17.8,273.71,0c-.17,17.34.49,116.73,80.64,195.74,78.38,77.27,174.99,78.09,193.01,77.91-20.28.43-113.11,4.6-189.77,79.62-79.4,77.71-83.47,174.7-83.88,194.03Z"></path></svg>
                    </button>
            </div>

            {/* Div for classes filter*/}
            <div ></div>
            {/* Div for clean the filter*/}
            <div ></div>
        </div>
           
           
        </div>
    );
}