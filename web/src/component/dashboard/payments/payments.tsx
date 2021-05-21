import React from 'react'

const Payments = (props) => {
    return (
        <div>
             <div className="m-2 mx-3 flex">
            <div className="box-border flex bg-white h-7 w-24  ">
              <small className="px-2 pt-1 text-black-150 opacity-40 ">{props.day} |</small>
              <p className="pt-1 text-sm font-bold text-blue-170">{props.amount}</p>
            </div>
            <p className="text-xs font-bold absolute left-40 pt-1 font-sans text-blue-800 tracking-tight">
              {props.name}
            </p>
          </div>
        </div>
    )
}

export default Payments
