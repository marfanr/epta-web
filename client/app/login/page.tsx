import './login.css';  

export default function Page() {
    return <>    
    <div className="   bg-zinc-900 w-screen h-screen overflow-auto flex flex-row justify-center items-center gap-3 text-white">
       <div className=" Login-page w-1/3 flex flex-col gap-y-4 shadow-xl shadow-gray-800 border border-gray-50 rounded-xl p-8">
       <label>Username</label>
       <input type="text"/>
       <label>Password</label>
       <input type="text"/>
       <div className="flex flex-row justify-center items-center">

       <button className="border rounded-xl px-6 py-4">Submit</button>
       </div>
   
      </div>
    </div>
       
    </>
  }