import React from 'react'

// export function Products({ name, stock }) {
//     if (stock) {
//         return <li>{name}</li>
//     } else {
//         return <li><del><ins>{name}</ins></del></li>
//     }
// }

// const Conditional1 = () => {
//     return (

//         <div className='bg-white text-black'>
//             <ul>
//                 <Products name="laptop" stock="true" />
//                 <Products name="smart watch" stock="true" />
//                 <Products name="keyboard" stock="false" />
//                 <Products name="mouse" stock="true" />
//                 <Products name="TV" stock="false" />
//                 <Products name="remote" stock="true" />
//                 <Products name="mobile" stock="false" />
//             </ul>
//         </div>
//     )
// }

// export function Products({ name, stock }) {
//     if (stock) {
//         return <li>{name}</li>
//     } else {
//         return <li><del>{name}</del></li>
//     }
// }

// const Conditional1 = () => {
//     return (

//         <div className='bg-white text-black'>
//             <ul>
//                 <Products name="laptop" stock={true} />  {/*using jsx module */}
//                 <Products name="smart watch" stock={true} />
//                 <Products name="keyboard" stock={false} />
//                 <Products name="mouse" stock={true} />
//                 <Products name="TV" stock={false} />
//                 <Products name="remote" stock={true} />
//                 <Products name="mobile" stock={false} />
//             </ul>
//         </div>
//     )
// }

// Conditional rendering using --> ( ? : (ternary operator) )

// export function Products({ name, stock }) {
//     return stock ? <li>{name}</li> : <li><del>{name}</del></li>
// }

// const Conditional1 = () => {
//     return (

//         <div className='bg-white text-black'>
//             <ul>
//                 <Products name="laptop" stock={true} />
//                 <Products name="smart watch" stock={true} />
//                 <Products name="keyboard" stock={false} />
//                 <Products name="mouse" stock={true} />
//                 <Products name="TV" stock={false} />
//                 <Products name="remote" stock={true} />
//                 <Products name="mobile" stock={false} />
//             </ul>
//         </div>
//     )
// }


export function Products({ data1, data2 }) {
    if (data2) {
        return <li>{data1}</li>
    } else {
        return <li><del>{data1}</del></li>
    }
}

const Conditional1 = (props) => {
    const data1 = props.name;
    const data2 = props.stock;
    return (

        <div className='bg-white text-black'>
            <ul>
                <Products name="laptop" stock={true} />
                <Products name="smart watch" stock={true} />
                <Products name="keyboard" stock={false} />
                <Products name="mouse" stock={true} />
                <Products name="TV" stock={false} />
                <Products name="remote" stock={true} />
                <Products name="mobile" stock={false} />
            </ul>
        </div>
    )
}



// export function Products({ name, stock }) {
//     return (
//         <li>{name}{stock && 0}</li>
//     )
// }

// const Conditional1 = () => {
//     return (

//         <div className='bg-white text-black'>
//             <ul>
//                 <Products name="laptop" stock={true} />
//                 <Products name="smart watch" stock={true} />
//                 <Products name="keyboard" stock={false} />
//                 <Products name="mouse" stock={true} />
//                 <Products name="TV" stock={false} />
//                 <Products name="remote" stock={true} />
//                 <Products name="mobile" stock={false} />
//             </ul>
//         </div>
//     )
// }

export default Conditional1

