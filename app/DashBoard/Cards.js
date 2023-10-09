import React from 'react'

const Cards = (props) => {

        // console.log(props);

    return (

        <>

            

                <div className="mt-6 gap-y-10 flex flex-wrap justify-center">
                    <div className="h-74 w-72 mt-18" id={props.product.id}>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src={props.product.images[0]} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                       {props.product.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{props.product.description}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{props.product.price}</p>
                        </div>
                    </div>

                    {/* <!-- More products... --> */}
                </div>

        </>



    )
}

export default Cards;
