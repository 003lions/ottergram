// import Barry from '../otters/otter1.jpg'

function Post({ image, name}) {
    const handleClick = (otterName) => {
        return console.log('You Clicked ' + otterName)
    }
    return (
        <li className='post-component'>
            <button onClick={() => handleClick(name)}>
                <img src={image} alt={name}/>
                <p className='post-name'>{name}</p>
            </button>
        </li>
    )
}

export default  Post;
