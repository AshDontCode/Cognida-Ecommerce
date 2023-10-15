import './Shimmer.css'

export const Shimmer = ()=>{
    var cards = [1,2,3,4,5,6]
    cards = cards.map((curr)=>{
        return (
            <div key={curr} className="card w-25 cardd">
                <div className='img m-2'></div>
                <div className='box m-2 w-75'></div>
                <div className='box m-2 w-75'></div>
            </div>
        )
    });

    return(
        <div className="d-flex flex-wrap shimmer">
            {cards}
        </div>
    )
}