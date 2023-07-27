import '../Logo/Logo.scss';

const Logo = () => {

    return (
        <section className='logo'>
            <article className='logo__image'>
                <img src="/images/hex.png" alt="hex" />
                <h1>S&G</h1>
            </article>
            <article className='logo__name'>
                <h1>Set_&_go</h1>
                <h5>best choice</h5>
            </article>
        </section>
    )
}

export default Logo;