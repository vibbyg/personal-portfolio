

interface IArrowLeft {
    color?: string;
}
function ArrowLeft(props: IArrowLeft) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="135" height="26" viewBox="0 0 135 26" fill="none">
            <path d="M0.292885 12.2929C-0.097641 12.6834 -0.097641 13.3166 0.292885 13.7071L6.65685 20.0711C7.04737 20.4616 7.68053 20.4616 8.07106 20.0711C8.46159 19.6805 8.46159 19.0474 8.07106 18.6569L2.41421 13L8.07106 7.34315C8.46159 6.95262 8.46159 6.31946 8.07106 5.92893C7.68053 5.53841 7.04737 5.53841 6.65685 5.92893L0.292885 12.2929ZM109 12L0.999992 12L0.999992 14L109 14L109 12Z" fill={props.color ?? '#493459'}/>
            <circle cx="122" cy="13" r="13" fill="#493459"/>
        </svg>
    )
}

export default ArrowLeft;