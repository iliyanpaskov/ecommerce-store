import '../GoTop/GoTop.scss';

const GoTop = () => {
    return (
        <div className='pulse'>
            <div className="pulse__ring one"></div>
            <div className="pulse__ring two"></div>
            <div className="pulse__ring three"></div>
            <div className="pulse__ring four"></div>
            <a href="#category">
                <i className="fa-solid fa-circle-arrow-up pulse__icon"></i>
            </a>

        </div>
    )
}

export default GoTop;