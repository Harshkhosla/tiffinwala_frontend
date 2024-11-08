export const Card = ({ data ,index}) => {
    return <div>
        <div key={index} className="feature-item mt-6  shadow-custom-box-shadow  pb-8 rounded-xl">
            <span className="text-3xl">{data.icon}</span>
            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">{data.title}</p>
            <p className="text-normal text-base leading-6 text-gray-600 mt-4">{data.text}</p>
        </div>
    </div>
}