//const {scaleValue, careType} = props

function CareScale({scaleValue, careType}) {
    
    const range = [1, 2, 3] //échelle de 1 à 3

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
        </div>
    )
}
    
export default CareScale